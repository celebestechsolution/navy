interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return <main className='mt-[4rem] min-h-[1000rem]'>{children}</main>;
};

export { AuthLayout };
