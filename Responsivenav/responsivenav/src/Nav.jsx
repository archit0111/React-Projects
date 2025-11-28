import { useState } from "react";

function Nav(){
    const [options, setOptions] = useState(false);

    function handleOnclick(){
        setOptions(true);
    }

    return(
        <>
        <nav className='bg-amber-500 justify-between flex h-20 w-screen'>
            <div className='text-5xl text-amber-950 content-center ml-4'>Css</div>
            <div className='mr-4 sm:flex items-center gap-10 hidden'>
                    <a href="#" className='text-amber-950'>Home</a>
                    <a href="#" className='text-amber-950'>Cart</a>
                    <a href="#" className='text-amber-950'>Wishlist</a>
                    <a href="#" className='text-amber-950'>Account</a>
            </div>
            <div className='sm:hidden mr-12 place-content-center text-amber-950 text-5xl'><button onClick={handleOnclick}>☰</button></div>
            <div className={`${options ? "block" : "hidden"} absolute to-30%`}>
                <div className='relative'>
                    <a href="#" className='text-amber-950 block'>Home</a>
                    <a href="#" className='text-amber-950 block'>Cart</a>
                    <a href="#" className='text-amber-950 block'>Wishlist</a>
                    <a href="#" className='text-amber-950 block'>Account</a>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;