const http = require('http');
const mongooose = require('mongoose');

mongooose.connect('mongodb://localhost:27017/shopping_product')
.then(console.log("mongodb connected!"))
.catch(err=>console.log("Error occured in connecting to mongodb"+ err))

const productSchema = new mongooose.Schema({
    name : String,
    img : String,
    prize : Number,
    type : Array
})

const product = mongooose.model('product', productSchema)
const wishlistProduct = mongooose.model('wishlistProduct',productSchema)

const  server = http.createServer(async (req , res)=>{

    console.log("Request URL:", req.url,"Host:", req.headers.host, "Method:", req.method);
    // using url constructor to get the query parameters

     const url = new URL(req.url, `http://${req.headers.host}`);


    // setting headers for allowing cross-origin requests and setting content type to html by default

    res.setHeader('content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    
    if(url.pathname === '/api/products'&& req.method === 'GET'){
        res.setHeader('Content-Type','application/json');
        const page =url.searchParams.get('page') || 1;
        const limit = url.searchParams.get('limit');
        const skip = (page-1)*limit;
        const items = await product.find().skip(skip).limit(limit);
        const totalItems = await product.countDocuments();
        const numberOfPages = Math.ceil(totalItems/limit);
        res.end(JSON.stringify({
            items,
            numberOfPages,
            currentPage : page
        }))

    }

    //  handling post request for adding product to wishlist
    //  we are receiving data from react in chunks and converting it to string and then parsing it to json and then saving it to wishlist collection
    else if(url.pathname === '/api/wishlist'&& req.method === 'POST'){
        let body ="";
        req.on('data',chunk=>{body+=chunk.toString()});
        req.on('end',async()=>{
            try{
                const data = JSON.parse(body);
            const wishlistItem = await wishlistProduct.create(data);
            res.end(JSON.stringify({message:"Product Added in wishlist!" ,data:wishlistItem}));
            }
            catch(err){
                res.end(JSON.stringify({message:"Error occured in adding product to wishlist"+err}))    
            }
        })
    }

    // feching data from wishlist
    else if(url.pathname === '/api/wishlist'&& req.method === 'GET'){
        res.setHeader('Content-Type','application/json');
        try{
            const wishlistProducts = await wishlistProduct.find()
            res.end(JSON.stringify(wishlistProducts));
        }
        catch(err){
            res.end(JSON.stringify({message:"Error occured in fetching wishlist products :"+err}))
        }
    }
    else if(url.pathname === '/api/wishlist'&& req.method === 'DELETE'){
        let body ="";
        req.on('data',chunk=>{body+=chunk.toString()});
        req.on('end',async()=>{
            try{
                const data =JSON.parse(body);
                const item = await wishlistProduct.deleteOne(data);
                res.end(JSON.stringify({message : "Item removed from wishlist :",item}));
            }
            catch(err){
                res.end(JSON.stringify({message : "Error occered in removing item :",err}));
            }
        })
    }
    else{
        res.end("<h1>Page Not Found</h1>")
        }
})

server.listen(3000,()=>(
    console.log("Server is listening on port 3000")
))