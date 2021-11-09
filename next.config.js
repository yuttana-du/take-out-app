module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    );
    return config;
  },
  module: {
    loaders: [{ test: /\.css$/, loader: "style-loader!css-loader" }],
  },
  reactStrictMode: true,
};
