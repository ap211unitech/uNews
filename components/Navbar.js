import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

const Navbar = () => {
    const [categories, setCategories] = useState(['general', 'business', , 'health', 'science', 'sports', 'technology', 'entertainment'])

    const router = useRouter();
    const [active, setActive] = useState('');

    useEffect(() => {
        if (router.query && router.query.category) {
            setActive(router.query.category);
        }
        else {
            setActive('');
        }
    }, [router.query])


    return (
        <Fragment>
            <h1 className="text-5xl font-bold text-center p-4">
                <Link href='/'>
                    u<span className="text-red-400">News</span>
                </Link>
            </h1>

            <div className="p-6">
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 justify-center">
                    {categories.map(cat => {
                        return (
                            <Link href={`/news/${cat}`} key={cat}>
                                <li
                                    className={`${active == cat ? "nav-link-active" : ""} w-[90px] md:w-[110px] lg:w-[150px] p-3 md:p-4 sm:p-3 cursor-pointer inline-block hover:underline hover:decoration-red-400 decoration-2 underline-offset-8 hover:scale-105 hover:font-bold transition-all duration-100 capitalize`}>
                                    {cat}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>

        </Fragment >
    )
}

export default Navbar