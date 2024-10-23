export type PermitList = {
    id: string;
    regisNumber: string;
    name: string;
    companyName: string;
    permitName: string;
    status: string;
    permitStart: string;
    permitEndEst: string;
};

export type PermitType = {
    id: string;
    code: string;
    name: string;
};

export type PermitApplicant = {
    id: number;
    value: number;
    label: string;
};
