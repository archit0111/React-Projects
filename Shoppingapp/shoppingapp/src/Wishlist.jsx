import { useState } from "react";
import { Link } from "react-router-dom";

function Wishlist(){
    const [options,setOptions] = useState(false);

    const products ={
        id_1:{
        name: "T Shirt",
        img: '/ts-1.webp',
        prize: 500,
        type:["tshirt","cotton", "cloths", "casual", "man"]
        },
        id_2:{
        name: "Formal Shoe",
        img: '/shoe-1.webp',
        prize: 2500,
        type:["shoe","formal", "shoe", "black", "man"]
        },
        id_3:{
        name: "Casual Shoe",
        img: '/shoe-2.webp',
        prize: 1500,
        type:["shoe","casual", "shoe", "blue", "man"]
        },
        id_4:{
        name: "Cap",
        img: '/cap-1.webp',
        prize: 500,
        type:["cap","casual","black"]
        },
        id_5:{
        name: "Cap",
        img: '/cap-2.webp',
        prize: 550,
        type:["cap","casual","white"]
        },
        id_6:{
        name: "Headphone",
        img: '/headphone-1.webp',
        prize: 1959,
        type:["headphone","electronics", "silver", "boat"]
        },
        id_7:{
        name: "Headphone",
        img: '/headphone-2.webp',
        prize: 2590,
        type:["headphone","electronics", "black", "jlb"]
        },
        id_8:{
        name: "Laptop asus",
        img: '/lap-1.webp',
        prize: 50099,
        type:["laptop","asus", "black", "electronics"]
        },
        id_9:{
        name: "Laptop aser",
        img: '/lap-2.webp',
        prize: 112999,
        type:["laptop","aser", "black", "electronics"]
        },
        id_10:{
        name: "Sari",
        img: '/sari.webp',
        prize: 4999,
        type:["sari","cloth", "women", "pink"]
        }
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

         {/* pagination Implimentation */}

         <div></div>

        </>
    )
}

export default Wishlist