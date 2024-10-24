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
            {
                destination: '/latest-news/:path*',
                source: '/general/latest-news/:path*',
                permanent: true,
            },
            {
                destination: '/innovations/:path*',
                source: '/general/innovations/:path*',
                permanent: true,
            },
            {
                destination: '/permits/:path*',
                source: '/general/permits/:path*',
                permanent: true,
            },
            {
                destination: '/complaints/:path*',
                source: '/general/complaints/:path*',
                permanent: true,
            },
            {
                destination: '/about/:path*',
                source: '/general/about/:path*',
                permanent: true,
            },
            // Guest
            {
                destination: '/login',
                source: '/guest/login',
                permanent: true,
            },
            // Auth
            {
                destination: '/dashboard',
                source: '/auth/dashboard',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            // General
            {
                source: '/',
                destination: '/general/home',
            },
            {
                source: '/latest-news/:path*',
                destination: '/general/latest-news/:path*',
            },
            {
                source: '/innovations/:path*',
                destination: '/general/innovations/:path*',
            },
            {
                source: '/permits/:path*',
                destination: '/general/permits/:path*',
            },
            {
                source: '/complaints/:path*',
                destination: '/general/complaints/:path*',
            },
            {
                source: '/about/:path*',
                destination: '/general/about/:path*',
            },
            // Guest
            {
                source: '/login',
                destination: '/guest/login',
            },
            // Auth
            {
                source: '/dashboard',
                destination: '/auth/dashboard',
            },
        ];
    },
};

export default nextConfig;
