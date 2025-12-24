/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
=======
  // Remove static export to let Amplify handle SSR/SSG appropriately
  output: undefined,
  distDir: '.next',
  trailingSlash: false,
  images: {
    unoptimized: false,
>>>>>>> 9e5ff1b (Remove chatbot UI/logic and Docker/Netlify configs; prepare project for AWS Amplify)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
<<<<<<< HEAD
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
=======
>>>>>>> 9e5ff1b (Remove chatbot UI/logic and Docker/Netlify configs; prepare project for AWS Amplify)
    ],
  },
};

module.exports = nextConfig;
