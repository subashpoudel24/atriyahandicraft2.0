/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
                search: ''
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
                search: ''
            }
        ]
    },
    webpack: (config) => {
        config.ignoreWarnings = [
            { message: /url.parse/ }
        ];
        return config;
    }
};

export default nextConfig;
