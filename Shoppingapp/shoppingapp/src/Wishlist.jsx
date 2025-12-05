import { useState } from "react";
import { Link } from "react-router-dom";

function Wishlist(){
    const [options,setOptions] = useState(false);

    function handleOnclick(){
        if(!options){
            setOptions(true);
        }else{
            setOptions(false);
        }
    }

    return(
        <>
        <nav className='bg-indigo-300 h-16 content-center'>
            <div className='flex relative justify-between items-center m-4'>
                <div className='text-3xl [@media(max-width:400px)]:text-2xl  text-indigo-800'>Shopping Pool</div>
                <div className='gap-15 items-center hidden sm:flex'>
                    <Link to="/">Home</Link>
                    <Link to="/Wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/account">Account</Link>
                </div>
                <div className='sm:hidden mr-4 place-content-center text-amber-950 text-3xl hover:scale-130 [@media(max-width:400px)]:text-2xl'><button onClick={handleOnclick}>☰</button></div>
                <div className={`${options ? "block" : "hidden"} gap-15 bg-indigo-100 absolute items-center top-12 right-0 w-30 rounded-2xl`}>
                    <Link className='p-1.5 block rounded-2xl text-center hover:bg-amber-50' to="/">Home</Link>
                    <Link className='p-1.5 block rounded-2xl text-center hover:bg-amber-50' to="/Wishlist">Wishlist</Link>
                    <Link className='p-1.5 block rounded-2xl text-center hover:bg-amber-50' to="/cart">Cart</Link>
                    <Link className='p-1.5 block rounded-2xl text-center hover:bg-amber-50' to="/account">Account</Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Wishlist