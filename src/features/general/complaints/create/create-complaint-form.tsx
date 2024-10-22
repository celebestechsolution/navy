import { ImageUploader } from '@/components/image-uploader';
import { SubmitButton } from '@/components/submit-button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useCreateComplaintAction } from '@/lib/actions/create-complaint-action';

const categories = [
    {
        value: 'pengaduan-perizinan',
        label: 'Pengaduan Perizinan',
    },
    {
        value: 'gratifikasi',
        label: 'Gratifikasi',
    },
    {
        value: 'kode-etik',
        label: 'Kode Etik',
    },
    {
        value: 'whistleblowing',
        label: 'Whistleblowing',
    },
] as const;

const CreateComplaintForm = () => {
    const { form, submit } = useCreateComplaintAction();
    return (
        <Form {...form}>
            <form id='login-form' onSubmit={form.handleSubmit(submit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='full_name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    type='text'
                                    autoComplete='name'
                                    aria-label='Fullname'
                                    placeholder='Masukkan nama lengkap'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='address'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Alamat</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    type='text'
                                    autoComplete='address'
                                    aria-label='Address'
                                    placeholder='Masukkan alamat'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='phone_number'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor Telepon</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    type='text'
                                    autoComplete='phone-number'
                                    aria-label='Phone Number'
                                    placeholder='Masukkan nomor telepon'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='category'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kategori</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Pilih kategori pengaduan' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categories.map((category, i) => (
                                        <SelectItem key={i} value={category.value}>
                                            {category.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='image'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Foto Pengaduan</FormLabel>
                            <FormControl>
                                <ImageUploader onFileChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Deskripsi Pengaduan</FormLabel>
                            <FormControl>
                                <Textarea
                                    className='bg-background'
                                    placeholder='Masukkan deskripsi pengaduan'
                                    rows={8}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    <SubmitButton
                        className='w-full'
                        type='submit'
                        label='Kirim Pengaduan'
                        disabled={form.formState.isSubmitting}
                    />
                </div>
            </form>
        </Form>
    );
};

export { CreateComplaintForm };
