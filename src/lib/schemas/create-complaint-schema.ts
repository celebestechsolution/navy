import { z } from 'zod';
import { imageValidation } from '../utils';

const createComplaintSchema = z.object({
    name: z
        .string({ errorMap: () => ({ message: 'Nama Lengkap tidak boleh kosong.' }) })
        .min(1, { message: 'Nama Lengkap tidak boleh kosong.' })
        .min(3, { message: 'Nama Lengkap harus lebih dari 3 karakter.' })
        .max(255, { message: 'Nama Lengkap tidak boleh lebih dari 255 karakter.' }),
    address: z
        .string({ errorMap: () => ({ message: 'Alamat tidak boleh kosong.' }) })
        .min(1, { message: 'Alamat tidak boleh kosong.' }),
    phone: z
        .string({ errorMap: () => ({ message: 'Nomor Telepon tidak boleh kosong.' }) })
        .min(1, { message: 'Nomor Telepon tidak boleh kosong.' })
        .min(11, { message: 'Nomor Telepon harus lebih dari 11 digit.' })
        .max(13, { message: 'Nomor Telepon tidak boleh lebih dari 13 digit.' }),
    categoryId: z
        .string({ errorMap: () => ({ message: 'Kategori Pengaduan tidak boleh kosong.' }) })
        .min(1, { message: 'Kategori Pengaduan tidak boleh kosong.' }),
    image: z
        .instanceof(File, { message: 'Foto Pengaduan tidak boleh kosong.' })
        .refine((file) => imageValidation(file), {
            message: 'Foto Pengaduan yang anda unggah tidak menggunakan format yang valid.',
        }),
    description: z
        .string({ errorMap: () => ({ message: 'Deskripsi Pengaduan tidak boleh kosong.' }) })
        .min(1, { message: 'Deskripsi Pengaduan tidak boleh kosong.' }),
});

type CreateComplaintFormFields = z.infer<typeof createComplaintSchema>;

export { createComplaintSchema, type CreateComplaintFormFields };
