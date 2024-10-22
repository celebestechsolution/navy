import { clsx, type ClassValue } from 'clsx';
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
