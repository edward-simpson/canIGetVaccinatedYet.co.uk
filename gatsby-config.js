module.exports = {
  siteMetadata: {
    title: `Can I Get Vaccinated Yet?`,
    description: `Quickly and easily find out the minimum age of COVID-19 vaccination in England according to the NHS site`,
    author: `contact@esimpson.co.uk`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1177218544154089`
      }
    }
  ]
};
