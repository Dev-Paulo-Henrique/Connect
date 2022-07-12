module.exports = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
}
