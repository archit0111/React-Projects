import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wishlist(){
    const [options,setOptions] = useState(false);
    const [wishlist,setWishlist] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/api/wishlist')
        .then(responce=>responce.json())
        .then(data=>setWishlist(data))
        .catch(err=>console.log("Error in fetching wishlist items:"+err))
    },[]);

    function handleRemove(item){
        fetch('http://localhost:3000/api/wishlist',{
            method : "DELETE",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(item)
        })
        .then(responce=>responce.json())
        .then(data=>console.log("Item Removed:",data))
        .catch(err=>console.log("Error in removing wishlist items:"+err))
        }

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
        <section className='h-max bg-indigo-100 content-center text-center'>
            <p className='text-center text-red-500 text-2px'> !! HEAVY DISSCOUNT ON ORDER OF ONLY MORE THAN 1499/- !!</p>
        </section>

         <div className="p-4 mt-15 flex flex-col gap-5 items-center">
            {wishlist.length>0?Object.entries(wishlist).map(([key,value])=>(
                <div key={key} className="flex flex-row gap-10 bg-indigo-300 p-4 w-full ">
                    <section className="w-fit">
                        <img className="h-55 w-auto" src={value.img} alt={value.img} />
                    </section>
                    <section className="flex flex-col gap-4 mt-10">
                        <div className="text-lg font-bold">{value.name}</div>
                        <div className="text-lg font-semibold">{value.prize}</div> 
                        <section className="flex flex-row gap-4">
                            <button className="bg-indigo-500 p-1 pl-2 pr-2 mt-8 rounded-lg hover:scale-110 hover:bg-red-500" onClick={()=>handleRemove(value)}>Remove from wishlist</button>                       
                        <button className="bg-indigo-500 p-1 mt-8 pl-2 pr-2 rounded-lg hover:scale-110 hover:bg-green-500" onClick={null}>Add to cart</button> </section>                      
                    </section>
                </div>
            )):null}
         </div>

        </>
    )
}

export default Wishlist