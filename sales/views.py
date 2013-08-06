from django.shortcuts import render
from django.http import HttpResponse

from rides.models import Ride, RideRiders
from sales.models import Sale
from sales.forms import SalePaymentForm


def checkout(request):
    if request.method == 'GET':
        # Get the ride id from the POST data
        ride_id = request.GET.get('ride', None)

        if ride_id:
            # Get the ride info
            ride = Ride.objects.get(id = ride_id)

            return render(request, 'sales/checkout.html', {'ride': ride, 'form': SalePaymentForm()})
        else:
            return render(request, 'sales/checkout.html', {'error': "Nothing to checkout!"})

    elif request.method == 'POST':
        # Get the form data
        form = SalePaymentForm(request.POST)

        # Get the ride id from the POST data
        ride_id = request.POST.get('ride', None)

        # Get the ride info
        ride = Ride.objects.get(id = ride_id)

        # Check the form is valid
        if form.is_valid():
            number    = form.cleaned_data["number"]
            exp_month = form.cleaned_data["expiration"].month
            exp_year  = form.cleaned_data["expiration"].year
            cvc       = form.cleaned_data["cvc"]

            # Create a new sale record
            sale = Sale()

            # Get the ride price, pass user so we can store the user id and charge id in a sale record
            success, instance = sale.charge(request.user, ride.price, number, exp_month, exp_year, cvc)

            if not success:
                return HttpResponse("Error: %s" % instance.message)
            else:
                instance.save()

                # So we've now successfully charged the user so lets make sure they are signed up to the ride
                ride_rider = RideRiders()
                ride_rider.user = request.user
                ride_rider.ride = ride
                ride_rider.paid = True
                ride_rider.sale = sale
                ride_rider.save()

                pass

            return HttpResponse("Success! We've charged your card.")

        else:
            return render(request, 'sales/checkout.html', {'ride': ride, 'form': form})