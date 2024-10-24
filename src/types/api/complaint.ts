export type ComplaintList = {
    id: string;
    image: string;
    category: string;
    description: string;
    response?: string;
    respondent?: string;
    status: {
        value: 'waiting' | 'decline' | 'accept';
        label: string;
    };
    created_at: string;
};

export type ComplaintCategory = {
    id: number;
    category: string;
    description: string;
    legal: string;
};
