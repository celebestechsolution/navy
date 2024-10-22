interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return <main className='mt-[4rem]'>{children}</main>;
};

export { AuthLayout };
