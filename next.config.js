/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.fallback = { net: require.resolve('net-browserify') };
        return config;
    },
}

module.exports = nextConfig
