// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
  }
};
module.exports = nextConfig;