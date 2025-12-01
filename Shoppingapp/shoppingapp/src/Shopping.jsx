import { useState } from "react";

function Shopping(){
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
                    <a href="#">Home</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Cart</a>
                    <a href="#">Account</a>
                </div>
                <div className='sm:hidden mr-4 place-content-center text-amber-950 text-3xl hover:scale-130 [@media(max-width:400px)]:text-2xl'><button onClick={handleOnclick}>☰</button></div>
                <div className={`${options ? "block" : "hidden"} gap-15 bg-indigo-100 absolute items-center top-12 right-0 w-30 rounded-2xl`}>
                    <a href="#" className='p-1.5 block rounded-2xl text-center hover:bg-amber-50'>Home</a>
                    <a href="#" className='p-1.5 block rounded-2xl text-center hover:bg-amber-50'>Wishlist</a>
                    <a href="#" className='p-1.5 block rounded-2xl text-center hover:bg-amber-50'>Cart</a>
                    <a href="#" className='p-1.5 block rounded-2xl text-center hover:bg-amber-50'>Account</a>
                </div>
            </div>
        </nav>
        <section className='h-max bg-indigo-100 content-center text-center'>
            <p className='text-center text-red-500 text-2px'> !! HEAVY DISSCOUNT ON ORDER OF ONLY MORE THAN 1499/- !!</p>
        </section>
        <section className="h-28 content-center">
            <div>
                <div className='h-auto text-center w-auto'><input type="text" placeholder="Search for Something...." className='w-100 p-2 rounded-2xl hover:border hover:border-indigo-300 focus:border focus:border-indigo-300 border border-indigo-300 hover:shadow-xl  hover:shadow-indigo-100  [@media(max-width:500px)]:w-4/6 [@media(max-width:400px)]:p-1 '/></div>
            </div>
        </section>
        <main className='p-2.5'>
            <div className='grid-cols-3 grid-rows-5'>

            </div>
        </main>
        </>
    )
}
export default Shopping;