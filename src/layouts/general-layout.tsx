interface GeneralLayoutProps {
    children: React.ReactNode;
}

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
    return <main className='mt-[4rem]'>{children}</main>;
};

export { GeneralLayout };
