import * as React from "react"
import { Link } from "gatsby"
import {Age} from "../components/Age"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Can I get vaccinated yet?" />
    <h1>Can I get vaccinated yet?</h1>
    <h2>The current lower age of vaccination is: <Age/></h2>
    <p>N.B.: This does not take into account people with preexisting conditions, care workers, etc, etc.  Check the gov site to see other conditions</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
