import React from "react";
import DocumentTitle from "react-document-title";

import styles from "../styles/IndexPage";

import Hero from "./Hero";

const IndexPage = () => {
  const stats = [{
    value: "120",
    note: "cyclists"
  }, {
    value: "£170,000",
    note: "raised"
  }, {
    value: "960km",
    note: "ridden"
  }];

  return (
    <DocumentTitle title="Techbikers">
      <div className={styles.IndexPage}>
        <Hero>
          <span className={styles.strap1}>Drop</span>
          <span className={styles.strap2}>your laptop <span className={styles.strapAmp}>&amp;</span> get on your</span>
          <span className={styles.strap3}>bike</span>
        </Hero>

        <div id="main" className={styles.content}>
          <section id="mission">
            <header>
              <h1>Our Mission</h1>
            </header>

            <p>
              Techbikers is a collaboration of the London tech startup community to help children in need by supporting literacy charity Room to Read. Since 2012 over 100 tech professionals – including start-ups, venture capitalists and executives have cycled 960km in three Paris to London rides to raise money for this fantastic charity.
            </p>
          </section>

          <section>
            <header>
              <h1>Stats to Date</h1>
            </header>

            {stats.map(stat => (
              <div className={styles.stat}>
                <div className={styles.statInner}>
                  {stat.value}
                  <small>{stat.note}</small>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </DocumentTitle>
  )
};

export default IndexPage;