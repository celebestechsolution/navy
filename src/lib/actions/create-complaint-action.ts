import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useToast } from '@/hooks/use-toast';
import { type CreateComplaintFormFields, createComplaintSchema } from '../schemas/create-complaint-schema';

const useCreateComplaintAction = () => {
    const { toast } = useToast();

    const form = useForm<CreateComplaintFormFields>({
        resolver: zodResolver(createComplaintSchema),
        defaultValues: {
            full_name: '',
            address: '',
            phone_number: '',
            category: '',
            description: '',
            image: undefined,
        },
    });

    const submit = async (values: CreateComplaintFormFields) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log(values);
        form.reset({
            full_name: '',
            address: '',
            phone_number: '',
            category: '',
            description: '',
            image: undefined,
        });
        toast({
            title: 'Laporan Terkirim',
            description: 'Laporan anda telah terkirim, lihat status laporan anda disini.',
        });
    };

    return { form, submit };
};

export { useCreateComplaintAction };
