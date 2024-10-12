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
                destination: '/licensing',
                source: '/general/licensing',
                permanent: true,
            },
            {
                destination: '/innovations',
                source: '/general/innovations',
                permanent: true,
            },
            {
                destination: '/siap-boss',
                source: '/general/siap-boss',
                permanent: true,
            },
            {
                destination: '/rajin',
                source: '/general/rajin',
                permanent: true,
            },
            {
                destination: '/paksi',
                source: '/general/paksi',
                permanent: true,
            },
            {
                destination: '/jabat-erat',
                source: '/general/jabat-erat',
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
                source: '/licensing',
                destination: '/general/licensing',
            },
            {
                source: '/innovations',
                destination: '/general/innovations',
            },
            {
                source: '/siap-boss',
                destination: '/general/siap-boss',
            },
            {
                source: '/rajin',
                destination: '/general/rajin',
            },
            {
                source: '/paksi',
                destination: '/general/paksi',
            },
            {
                source: '/jabat-erat',
                destination: '/general/jabat-erat',
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
