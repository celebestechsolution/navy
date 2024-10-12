interface GeneralLayoutProps {
    children: React.ReactNode;
}

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
    return <main className='mt-[4rem] px-4 py-4'>{children}</main>;
};

export { GeneralLayout };
