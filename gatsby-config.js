module.exports = {
  siteMetadata: {
    siteUrl: "https://www.eduardo.wtf",
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    // "gatsby-plugin-mdx",
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-highlight-code`,
    //         options: {
    //           theme: "material",
    //           terminal: "carbon",
    //           lineNumbers: true
    //         }
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-codemirror`,
            options: {
              // CSS class suffix to be used for produced `<pre/>` blocks.
              // Default value is "default", which adds "cm-s-default" class.
              // This class name matches
              theme: "default"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ]
      }
    }, 
    {
      resolve: "gatsby-plugin-sass",
      sassOptions: {
        includePaths: [
          "/node_modules/bootstrap/scss/bootstrap"
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./svg/edlogoFinal_circle_clipped_thick_icon.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./images/",
      },
      // __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'projects',
        path: './projects',
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-56YWVDZDPQ", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
  ],
};
