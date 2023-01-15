import NewsCard from '@/components/NewsCard';
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const Query = ({ newslist }) => {

    const router = useRouter();

    return (
        <Fragment>
            <h1 className='capitalize text-[42px] font-serif decoration-double underline decoration-red-400 decoration-2 underline-offset-4 mx-8'>Searching results for {router.query.q}</h1>
            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-8">
                {newslist?.map(news => {
                    return <NewsCard news={news} key={news.title} />
                })}
            </div>
        </Fragment>
    )
}

export default Query


export async function getServerSideProps({ query }) {
    const { q } = query;
    if (!q) {
        return {
            notFound: true
        }
    }

    const res = await fetch(`https://gnews.io/api/v4/search?q=${q}&token=4f48db13caf574dc1bf3971fd62ce8e2&lang=en&country=in`);
    const newslist = await res.json();

    if (newslist.errors) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            newslist: newslist.articles
        }
    }
}
