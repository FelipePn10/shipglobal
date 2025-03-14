/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // Caution: This should be removed after fixing TypeScript errors
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bcrypt: 'commonjs bcrypt',
        '@mapbox/node-pre-gyp': 'commonjs @mapbox/node-pre-gyp',
      });
    }

    config.module.rules.push({
      test: /\.html$/,
      loader: 'ignore-loader',
    });

    return config;
  },
};

module.exports = nextConfig;