import { useState } from "react";

function Navbar(){
    const [options, setOptions] = useState(false);

    function handleOnclick(){
        if(!options){
            setOptions(true);
        }else{
            setOptions(false);
        }
    }

    return(
        <>
        <nav className='bg-amber-500 justify-between flex relative h-20 w-screen'>
            <div className='text-3xl sm:text-5xl text-amber-950 content-center ml-4'>TAILWINDCSS</div>
            <div className='mr-4 sm:flex items-center gap-10 hidden'>
                    <a href="#" className='text-amber-950 hover:scale-130'>Home</a>
                    <a href="#" className='text-amber-950 hover:scale-130'>Cart</a>
                    <a href="#" className='text-amber-950 hover:scale-130'>Wishlist</a>
                    <a href="#" className='text-amber-950 hover:scale-130'>Account</a>
            </div>
            <div className='sm:hidden mr-12 place-content-center text-amber-950 text-5xl hover:scale-130'><button onClick={handleOnclick}>☰</button></div>
            <div className={`${options ? "opacity-100 translate-y-0" : "opacity-0 -translate-1"} bg-amber-100 rounded-2xl absolute p-1.5 right-5 top-20 transition-all duration-300`}>
                <div className='bg-amber-100 justify-items-center rounded-2xl'>
                    <a href="#" className='text-amber-950 block p-1 rounded-2xl hover:bg-amber-50'>Home</a>
                    <a href="#" className='text-amber-950 block p-1 rounded-2xl hover:bg-amber-50'>Cart</a>
                    <a href="#" className='text-amber-950 block p-1 rounded-2xl hover:bg-amber-50'>Wishlist</a>
                    <a href="#" className='text-amber-950 block p-1 rounded-2xl hover:bg-amber-50'>Account</a>
            </div>
            </div>
        </nav>
        <div className='w-screen h-8 bg-amber-200 justify-items-center content-center'>
            <p>Welcome To TAILWINDCSS output!!</p>
        </div>
        </>
    )
}

export default Navbar;