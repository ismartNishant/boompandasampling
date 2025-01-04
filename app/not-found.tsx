'use client'
import { useRouter } from 'next/navigation';
import { Player } from '@lottiefiles/react-lottie-player';

export default function BlogNotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/'); // Redirect to the home page
    };

    return (
        <div className=''>
            <div className='max-w-md w-full mx-auto'>
                <Player
                    className="w-full h-full"
                    autoplay
                    loop
                    src="/Images/404.json"
                >
                </Player>
            </div>
            <div className='mt-4 flex flex-col gap-4 items-center text-center'>
                <div className='space-y-2'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Page not Found</h1>
                    <h4 className='text-base md:text-lg text-gray-500 font-medium'>Could not find the requested page resource</h4>
                </div>
                <button
                    onClick={handleGoHome}
                    className='border-2 font-bold border-primary px-4 md:px-8 py-2 text-primary bg-white/10 hover:bg-primary hover:text-white rounded-full'
                >
                    Go To Home Page
                </button>
            </div>
        </div>
    );
}
