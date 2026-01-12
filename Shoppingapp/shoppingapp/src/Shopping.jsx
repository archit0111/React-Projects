import { useState } from "react";
import { useEffect, useContext } from "react";
import { LoginContext } from "./contex/LoginContext";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal/Modal.jsx";

function Shopping(){
    const [options,setOptions] = useState(false);
    const [userproducts,setUserproducts]=useState({});
    const [searchinput,setSearchinput]=useState("");
    const {isLogin,toggleLogin} = useContext(LoginContext);
    const [userDetail,setUserDetail] = useState({
        name : "",
        Phone: "",
        password : ""
    });
   const [modelDisplay,setModelDisplay] = useState(false);

    function handleNewLogin(){
        toggleLogin();
        isLogin ? alert("You are logged out") : alert("You are logged in");
    }

    function handleLogin(){
        setModelDisplay(prev=>!prev);
    }

    function handleChange(e){
        if(e.target.id==="username"){setUserDetail({...userDetail,name:e.target.value});}
        if(e.target.id==="phone"){setUserDetail({...userDetail,Phone:e.target.value});}
        if(e.target.id==="password"){setUserDetail({...userDetail,password:e.target.value});}
    }
    

    const carousel = ['/ts-1.webp','/shoe-1.webp','/cap-1.webp','/headphone-1.webp','/lap-1.webp','/sari.webp','/shoe-2.webp','/cap-2.webp','/headphone-2.webp','/lap-2.webp'];

    function handelSearch(e){
        setSearchinput(e.target.value);
    }

    // for searching products from search bar
    useEffect(()=>{
        setUserproducts({});
        let filtered = {};
        Object.entries(products).forEach(([key,value])=>{
            value.type.forEach(item=>{
                if(item.startsWith(searchinput.toLowerCase())){
                        filtered[key] = value;
                }
            });
        })
        setUserproducts(filtered);
    },[searchinput]);


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

    //slider settings are here

    var settings = {
        dots : true,
        arrows : true,
        infinite : true,
        speed : 500,
        slidesToShow : 3,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 2000,
        centerMode : true
    };

    function handleOnclick(){
        if(!options){
            setOptions(true);
        }else{
            setOptions(false);
        }
    }
    return(
        <>
        {modelDisplay && <Modal handleClose={handleLogin}>
            <div className="bg-indigo-200 h-11/12 p-4 rounded-2xl">
                <div className="h-1/10 mt-5"><p className="text-2xl rounded-2xl font-bold bg-indigo-300 pl-3 p-4 flex justify-center h-2/3 items-center mb-8 text-indigo-900">LOGIN TO EXPLORE MORE</p> <div></div></div>
                <form>
                <div className="mt-4 m-10 rounded-2xl bg-indigo-300 h-min">
                    <div className="p-10">
                        <label className="block pt-2 pl-2 font-semibold text-2xl text-indigo-900" htmlFor="username">Name:</label>
                        <input className="border-indigo-900 focus:border-indigo-900 block p-1 rounded-md h-12 text-2xl mb-1 mt-5 w-10/12 ml-10 border" type="text" name="username" id="username" placeholder="Username" required onChange={(e)=>handleChange(e)} />
                        <label className="block pt-4 pl-2 font-semibold text-2xl text-indigo-900" htmlFor="username">Contact No.:</label>
                        <input className="border-indigo-900 block p-1 rounded-md h-12 text-2xl mb-1  mt-5 w-10/12 ml-10 border" type="tel" name="phone" id="phone" placeholder="XXXXXXXXXX" required onChange={(e)=>handleChange(e)} />
                        <label className="block pt-4 pl-2 font-semibold text-2xl text-indigo-900" htmlFor="username">Password:</label>
                        <input className="border-indigo-900 block p-1 rounded-md h-12 text-2xl mb-1  mt-5 w-10/12 ml-10 border" type="password" name="password" id="password" placeholder="Enter Password" required onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className="mt-5 mb-5 flex justify-center items-center"><button className="h-15 w-80 border hover:bg-green-600 bg-indigo-300 text-4xl rounded-2xl p-2" onClick={handleNewLogin}>Login</button></div>
                <div className="mt-2 flex justify-center items-center"><button className="h-15 w-80 border hover:bg-green-600 bg-indigo-300 text-4xl rounded-2xl p-2">Regirter User</button></div></form>
            </div>
        </Modal>}
        <nav className='bg-indigo-300 h-16 content-center'>
            <div className='flex relative justify-between items-center m-4'>
                <div className='text-3xl [@media(max-width:400px)]:text-2xl  text-indigo-800'>Shopping Pool</div>
                <div className='gap-15 items-center hidden sm:flex'>
                    <Link to="/">Home</Link>
                    <Link to="/Wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                    {!isLogin? <button onClick={handleLogin}>Account</button>:<Link to="/account">Account</Link>}
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
        <section className="h-28 content-center">
            <div>
                <div className='h-auto text-center w-auto'><input onChange={(e)=>{handelSearch(e)}} type="text" placeholder="Search for Something...." className='w-100 p-2 rounded-2xl hover:border hover:border-indigo-300 focus:border focus:border-indigo-300 border border-indigo-300 hover:shadow-xl  hover:shadow-indigo-100  [@media(max-width:500px)]:w-4/6 [@media(max-width:400px)]:p-1 '/></div>
            </div>
        </section>
        <div className="mt-5 mb-5">
            <Slider {...settings}>
            {carousel.map((item,index)=>(
            <div className="p-2" key={index}>
            <div className="flex p-2 items-center justify-center rounded-2xl h-80 w-full m-1 overflow-hidden"><img className="max-h-full max-w-full rounded-4xl object-contain"  src={item} alt={`slide-${item}`}/></div>
            </div>
            ))}
            </Slider>
            </div>
        <main className='p-2.5'>
            <div className='xl:p-8 sm:p-2 m-2 gap-12 md:grid md:grid-cols-3'>
                {Object.entries(Object.entries(userproducts).length === 0 ? products : userproducts).map(([key,value])=>(
                    <div className='rounded-2xl overflow-hidden p-2 sm:p-5 bg-indigo-200 sm:mb-40 mb-30 max-h-max' key={key}>
                       <div className="h-6/9 place-content-center justify-items-center"><div className="h-fit"><img src={value.img} alt={value.name}/></div></div>
                        <section className="sm:p-4 p-3 mt-1 flex justify-between font-bold sm:text-xl text-lg ">
                            <p>{value.name}</p>
                            <p>{`₹${value.prize}`}</p>
                        </section>
                        <section className="sm:p-4 text-sm sm:text-lg -mt-1.5">
                            <button className='font-medium bg-indigo-400 hover:bg-indigo-500 p-2 block place-self-center rounded-2xl w-3/5 sm:w-5/6 mb-2 hover:shadow-md hover:scale-103 hover:shadow-indigo-500 '>Shop Now</button>
                            <button className='font-medium bg-indigo-400 hover:bg-indigo-500 p-2 block place-self-center rounded-2xl w-3/5 sm:w-5/6 mb-2 hover:shadow-md hover:scale-103 hover:shadow-indigo-500'>Add to cart</button>
                            <button className='font-medium bg-indigo-400 hover:bg-indigo-500 p-2 block place-self-center rounded-2xl w-3/5 sm:w-5/6 mb-4 hover:shadow-md hover:scale-103 hover:shadow-indigo-500'>Add to Wishlist</button>
                        </section>
                    </div>
                ))}
                
            </div>
        </main>
        </>
    )
}
export default Shopping;