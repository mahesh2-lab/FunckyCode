import React from 'react'

const NavBar = () => {
return (
    <>
        <nav className="nav-wrapper black h-16 flex items-center ps-6 bg-[#172033]">
            <div className="container flex items-center gap-4">
                <img src="./logo.png" className='h-10 w-10' alt="" />
                <a href="/" className="brand-logo text-white text-2xl font-semibold">
                FunckyCode
                </a>
            </div>
        </nav>
    </>
)
}

export default NavBar