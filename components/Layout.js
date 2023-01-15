import { useState } from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Layout = ({ children }) => {
    const [searchVal, setSearchVal] = useState('');

    return (
        <div style={{ fontFamily: "'Roboto', sans-serif;" }} className="max-w-[1100px] m-auto">
            <Navbar />
            <Search searchVal={searchVal} setSearchVal={setSearchVal} />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout