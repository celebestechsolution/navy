import * as React from 'react';

import Image from 'next/image';

import { TablerIcon } from './tabler-icon';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ImageUploaderProps {
    onFileChange: (value: File | null) => void;
    model?: string;
}

export const ImageUploader = ({ onFileChange, model }: ImageUploaderProps) => {
    const [previewImage, setPreviewImage] = React.useState<string | null>(model as string);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onFileChange(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null); // Reset preview if no file is selected
        }
    };

    return (
        <div>
            <Input className='mb-2 bg-background file:text-foreground' onChange={handleFileChange} type='file' />
            {previewImage ? (
                <div className='relative w-fit rounded-lg'>
                    <Image
                        src={previewImage}
                        alt='image preview'
                        width={1920}
                        height={1080}
                        className='aspect-video rounded-lg border object-cover object-center'
                    />
                    <Button
                        tabIndex={-1}
                        className='absolute right-4 top-4 size-5 rounded-full text-foreground hover:bg-transparent hover:text-destructive'
                        size='icon'
                        variant='ghost'
                        type='button'
                        onClick={() => setPreviewImage(null)}>
                        <TablerIcon name='IconTrash' />
                    </Button>
                </div>
            ) : null}
        </div>
    );
};
