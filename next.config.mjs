/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
        styledComponents: true,
    },
    async redirects() {
        return [
            // General
            {
                destination: '/',
                source: '/general/home',
                permanent: true,
            },
            // Guest
            {
                destination: '/login',
                source: '/guest/login',
                permanent: true,
            },
            // Auth
        ];
    },
    async rewrites() {
        return [
            // General
            {
                source: '/',
                destination: '/general/home',
            },
            // Guest
            {
                source: '/login',
                destination: '/guest/login',
            },
            // Auth
        ];
    },
};

export default nextConfig;
