const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['app'] = path.join(__dirname, 'app');
    return config;
  },
};

module.exports = nextConfig;
