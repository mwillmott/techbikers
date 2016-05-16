import React from "react";

import Button from "./Button";

const ChangePasswordForm = () => (
  <form>
    <h1>Change Your Password</h1>
    <div class="row centerText">
        <input name="oldpassword" type="password" />
    </div>
    <div class="row centerText">
        <input name="newpassword1" type="password" />
    </div>
    <div class="row centerText">
        <input name="newpassword2" type="password" />
    </div>
    <div class="row">
      <p class="centerText">
        <Button type="submit">Change Password"</Button>
      </p>
    </div>
  </form>
);

export default ChangePasswordForm;