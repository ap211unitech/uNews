import Link from 'next/link'

export default function FourOhFour() {
    return <div className='text-center my-[8rem]'>
        <h1 className='text-3xl '>404 - Page Not Found</h1>
        <Link href="/" >
            <p className='rounded-3xl border-[3px] my-8 border-red-400 inline-block px-4 py-2 hover:bg-red-400 transition-all duration-300 hover:text-white'>
                Go back home
            </p>
        </Link>
    </div>
}