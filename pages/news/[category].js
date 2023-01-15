import NewsCard from '@/components/NewsCard';
import { useRouter } from 'next/router'
import { Fragment } from 'react';

const NewsOfcategory = ({ newslist }) => {
    const { query } = useRouter();
    return (
        <Fragment>
            <h1 className='capitalize text-[42px] font-serif decoration-double underline decoration-red-400 decoration-2 underline-offset-4 mx-8'>{query.category}</h1>
            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-8">
                {newslist?.map(news => {
                    return <NewsCard news={news} key={news.title} />
                })}
            </div>
        </Fragment>
    )
}

export async function getServerSideProps({ params }) {
    const { category } = params;

    const allCategories = ['general', 'business', , 'health', 'science', 'sports', 'technology', 'entertainment'];

    if (!allCategories.includes(category.toLowerCase())) {
        return {
            notFound: true
        }
    }

    // const res = await fetch(`https://gnews.io/api/v4/top-headlines?token=4af74f7c97ed7c3ecfc6c4f13cb38d10&topic=${category}&lang=en&country=in`);
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?token=4f48db13caf574dc1bf3971fd62ce8e2&topic=${category}&lang=en&country=in`);
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

export default NewsOfcategory