require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `ManoRanjana - Works for a vision`,
    title: `ManoRanjana`,
    siteUrl: `https://manoranjana.me`,
    siteDescription: `Welcome to the official website of Manoranjana De Silva. This is the v0.1 release of the web application. More expereiences will be brought in the near future.`,
    siteLanguage: `en-us`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Offcial Blog - ManoRanjana`,
        short_name: `Mano`,
        description: `Welcome to the official website of Manoranjana De Silva. This is the v0.1 release of the web application. More expereiences will be brought in the near future.`,
        start_url: `https://manoranjana.me`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
