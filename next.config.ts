const nextConfig = {
  experimental: {
    turbo: false, // ✅ Use Webpack instead of Turbopack
  },

  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
