const config = {
    siteTitle: "SauravModak.dev", // Site title.
    siteTitleShort: "SauravModak.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "SauravModak.dev", // Alternative site title for SEO.
    siteLogo: "/logos/logo-300.jpg", // Logo used for SEO and manifest.
    siteUrl: "https://sauravmodak.dev", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "Devblog of Saurav Modak - JavaScript, Data Science, Visualizations and more.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteRssTitle: "SauravModak.dev", // Title of the RSS feed
    siteFBAppID: "", // FB Application ID for using app insights
    googleAnalyticsID: "UA-160655862-2", // GA tracking ID.
    disqusShortname: "sauravmodak", // Disqus shortname.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    postsPerPage: 30, // Amount of posts displayed per listing page.
    userName: "SauravModak", // Username to display in the author segment.
    userEmail: "hi@sauravmodak.dev", // Email used for RSS feed's author segment
    userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Kolkata, India", // User location to display in the author segment.
    userAvatar: "https://res.cloudinary.com/sauravmodakdev/image/upload/v1583654580/webassets/public_profile_pic_wcbpj2.jpg", // User avatar to display in the author segment.
    userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [{
            label: "GitHub",
            url: "https://github.com/Vagr9K/gatsby-advanced-starter",
            iconClassName: "fa fa-github"
        },
        {
            label: "Twitter",
            url: "https://twitter.com/Vagr9K",
            iconClassName: "fa fa-twitter"
        },
        {
            label: "Email",
            url: "mailto:vagr9k@gmail.com",
            iconClassName: "fa fa-envelope"
        }
    ],
    copyright: "CC BY-NC-SA 4.0", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
    config.pathPrefix = "";
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
    config.siteRss = `/${config.siteRss}`;

module.exports = config;