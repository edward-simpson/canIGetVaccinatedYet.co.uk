import * as React from "react";
import { Link } from "gatsby";
import { Age } from "../components/Age";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Can I get vaccinated yet?" />
    <h1>Can I get vaccinated yet?</h1>
    <Age />
    <h3>Is the current bottom age limit of vaccination* in England.</h3>
    <p>
      *This does not take into account people with preexisting conditions, care
      workers, etc, etc. This is purely meant as a guide, if you feel you should
      be getting the vaccine you should probably check the{" "}
      <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/">
        gov site
      </a>{" "}
      and/or get in contact with your GP.
    </p>
  </Layout>
);

export default IndexPage;
