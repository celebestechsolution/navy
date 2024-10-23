import { clsx, type ClassValue } from 'clsx';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function imageValidation(file: File): boolean {
    const acceptedMimes = ['png', 'jpg', 'jpeg', 'webp'];

    if (file?.name) {
        const fileType = file.name.split('.').pop() as string;

        if (!acceptedMimes.includes(fileType, 0)) return false;
    }

    return true;
}

export function formatToFullDate(value: Date): string {
    return format(new Date(value), 'dd MMMM yyyy', { locale: id });
}

export function formatToFullTime(value: Date): string {
    return format(new Date(value), 'HH.mm', { locale: id });
}
