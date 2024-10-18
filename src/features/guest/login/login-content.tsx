import { GoogleLogo } from '@/components/google-logo';
import { AppShell } from '@/components/shells/app-shell';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LoginContent = () => {
    return (
        <main className='bg-background'>
            <AppShell className='py-6'>
                <div className='flex flex-col space-y-6'>
                    <div className='flex flex-col space-y-1.5'>
                        <h1 className='text-lg font-bold leading-none tracking-tight text-primary'>
                            Masuk atau Daftar Akun
                        </h1>
                        <p className='text-sm text-muted-foreground'>
                            Gunakan layanan dibawah untuk masuk ke DPMPTSP Kabupaten Pinrang
                        </p>
                    </div>

                    <Button>
                        <GoogleLogo className='me-2 size-4' />
                        <span>Lanjutkan dengan Google</span>
                    </Button>

                    <div className='relative'>
                        <div aria-hidden='true' className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-border' />
                        </div>
                        <div className='relative flex justify-center text-sm font-medium leading-6'>
                            <span className='bg-background px-6 text-muted-foreground'>Atau</span>
                        </div>
                    </div>

                    <Button variant='link' asChild>
                        <Link href='/'>
                            <span className='font-semibold text-primary'>Kembali ke Beranda</span>
                        </Link>
                    </Button>
                </div>
            </AppShell>
            <div className='absolute bottom-4 right-4'>
                <ThemeSwitcher />
            </div>
        </main>
    );
};

export { LoginContent };
