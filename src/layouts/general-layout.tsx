interface GeneralLayoutProps {
    children: React.ReactNode;
}

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
    return <main className='mt-[4rem] min-h-[1000rem]'>{children}</main>;
};

export { GeneralLayout };
