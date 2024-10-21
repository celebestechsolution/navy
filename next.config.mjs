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
                destination: '/latest-news',
                source: '/general/latest-news',
                permanent: true,
            },
            {
                destination: '/innovations',
                source: '/general/innovations',
                permanent: true,
            },
            {
                destination: '/innovations/siap-boss',
                source: '/general/innovations/siap-boss',
                permanent: true,
            },
            {
                destination: '/innovations/rajin',
                source: '/general/innovations/rajin',
                permanent: true,
            },
            {
                destination: '/innovations/paksi',
                source: '/general/innovations/paksi',
                permanent: true,
            },
            {
                destination: '/innovations/jabat-erat',
                source: '/general/innovations/jabat-erat',
                permanent: true,
            },
            {
                destination: '/permits/lists',
                source: '/general/permits/lists',
                permanent: true,
            },
            {
                destination: '/permits/types',
                source: '/general/permits/types',
                permanent: true,
            },
            {
                destination: '/permits/applicants',
                source: '/general/permits/applicants',
                permanent: true,
            },
            {
                destination: '/permits/service-standards',
                source: '/general/permits/service-standards',
                permanent: true,
            },
            {
                destination: '/complaints',
                source: '/general/complaints',
                permanent: true,
            },
            {
                destination: '/complaints/lists',
                source: '/general/complaints/lists',
                permanent: true,
            },
            {
                destination: '/complaints/categories',
                source: '/general/complaints/categories',
                permanent: true,
            },
            {
                destination: '/complaints/create',
                source: '/general/complaints/create',
                permanent: true,
            },
            {
                destination: '/about',
                source: '/general/about',
                permanent: true,
            },
            {
                destination: '/about/profile',
                source: '/general/about/profile',
                permanent: true,
            },
            {
                destination: '/about/duties',
                source: '/general/about/duties',
                permanent: true,
            },
            {
                destination: '/about/awards',
                source: '/general/about/awards',
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
                source: '/latest-news',
                destination: '/general/latest-news',
            },
            {
                source: '/innovations',
                destination: '/general/innovations',
            },
            {
                source: '/innovations/siap-boss',
                destination: '/general/innovations/siap-boss',
            },
            {
                source: '/innovations/rajin',
                destination: '/general/innovations/rajin',
            },
            {
                source: '/innovations/paksi',
                destination: '/general/innovations/paksi',
            },
            {
                source: '/innovations/jabat-erat',
                destination: '/general/innovations/jabat-erat',
            },
            {
                source: '/permits',
                destination: '/general/permits',
            },
            {
                source: '/permits/lists',
                destination: '/general/permits/lists',
            },
            {
                source: '/permits/types',
                destination: '/general/permits/types',
            },
            {
                source: '/permits/applicants',
                destination: '/general/permits/applicants',
            },
            {
                source: '/permits/service-standards',
                destination: '/general/permits/service-standards',
            },
            {
                source: '/complaints',
                destination: '/general/complaints',
            },
            {
                source: '/complaints/lists',
                destination: '/general/complaints/lists',
            },
            {
                source: '/complaints/categories',
                destination: '/general/complaints/categories',
            },
            {
                source: '/complaints/create',
                destination: '/general/complaints/create',
            },
            {
                source: '/about',
                destination: '/general/about',
            },
            {
                source: '/about/profile',
                destination: '/general/about/profile',
            },
            {
                source: '/about/duties',
                destination: '/general/about/duties',
            },
            {
                source: '/about/awards',
                destination: '/general/about/awards',
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
