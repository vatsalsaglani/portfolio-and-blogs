const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "images.pexels.com",
      "i.imgur.com",
      "vs-bucket-allthings.s3.us-east-2.amazonaws.com",
    ],
  },
});
