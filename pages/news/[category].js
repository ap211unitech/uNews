import NewsCard from '@/components/NewsCard';
import { useRouter } from 'next/router'
import { Fragment } from 'react';

const NewsOfcategory = ({ newslist }) => {
    const { query } = useRouter();
    return (
        <Fragment>
            <h1 className='capitalize text-[42px] font-serif decoration-double underline decoration-red-400 decoration-2 underline-offset-4 mx-8'>{query.category}</h1>
            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-8">
                {newslist?.data?.map(news => {
                    return <NewsCard news={news} />
                })}
            </div>
        </Fragment>
    )
}

export async function getServerSideProps({ params }) {
    const { category } = params;

    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=c424c740c28974a7cecaa4c014981ba4&categories=${category}&country=in&languages=en`);
    const newslist = await res.json();

    return {
        props: {
            newslist
        }
    }
}

export default NewsOfcategory