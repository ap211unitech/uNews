import { useRouter } from "next/router";

const Search = ({ searchVal, setSearchVal }) => {

    const router = useRouter();

    const handleChange = (e) => {
        setSearchVal(prev => e.target.value);
    }

    const searchForAnyThing = (e) => {
        e.preventDefault();
        router.push(`/news?q=${searchVal}`);
        setSearchVal('');
    }

    return (
        <div className='relative mx-auto text-xl w-[95%] block'>
            <input value={searchVal} onChange={handleChange} type="text" className='rounded-3xl outline-none my-6 px-6 py-2 border-2 border-red-400 w-full ' placeholder='Search for anything...' />

            <button disabled={searchVal.length === 0} onClick={searchForAnyThing} className={`disabled:text-gray-400 text-red-700 absolute right-6 bottom-[1.7em]`}>Search</button>
        </div>
    )
}

export default Search