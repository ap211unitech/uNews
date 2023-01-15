import React, { Fragment } from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif;" }} className="max-w-[1100px] m-auto">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout