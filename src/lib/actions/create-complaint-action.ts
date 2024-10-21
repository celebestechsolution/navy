import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { type CreateComplaintFormFields, createComplaintSchema } from '../schemas/create-complaint-schema';

const useCreateComplaintAction = () => {
    const form = useForm<CreateComplaintFormFields>({
        resolver: zodResolver(createComplaintSchema),
        defaultValues: {
            fullName: '',
            address: '',
            phoneNumber: '',
            category: '',
            description: '',
        },
    });

    const submit = async (values: CreateComplaintFormFields) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log(values);
    };

    return { form, submit };
};

export { useCreateComplaintAction };
