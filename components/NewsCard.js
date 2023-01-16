import moment from 'moment';
import Link from 'next/link';

const NewsCard = ({ news }) => {
    return (
        <div className="flex justify-between flex-col rounded-md overflow-hidden bg-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div>
                <img src={news.image ? news.image : "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="} alt={news.title} className="object-cover w-full h-[230px]" />
                <h1 className="font-bold text-xl italic px-4 pt-3">{news.title}</h1>
                <p className="text-sm px-4 py-2 capitalize">{news.description}</p>
            </div>

            <div>
                <p className="p-4 text-right text-gray-500 italic text-sm">
                    <Link href={news.source.url} target="_blank" className='text-red-600 hover:text-red-700 mr-4'>
                        {news.source.name}
                    </Link>
                    <span className='capitalize'>- {moment.utc(news.published_at).fromNow(true).toString()} ago</span>
                </p>
                <Link href={news.url} target="_blank">
                    <button className="text-md text-center px-4 py-3 transition-all duration-200 inline-block w-full bg-red-400 hover:bg-red-600 hover:text-white">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NewsCard