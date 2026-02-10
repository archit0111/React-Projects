const http = require('http');
const mongooose = require('mongoose');
const { stringify } = require('querystring');

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


    // setting headers for allowing cross-origin requests and setting content type to html by default

    res.setHeader('content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    
    if(req.url === '/api/products' && req.method === 'GET'){
        res.setHeader('Content-Type','application/json');


        // handeling Fetching products using find() i.e implimenting C of CRUD

        try{
            const products = await product.find()
            res.end(JSON.stringify(products));
        }
        catch(err){
            res.end(JSON.stringify({message : "Error occured in fetching data from database: "+err}))
        }
    }

    //  handling post request for adding product to wishlist
    //  we are receiving data from react in chunks and converting it to string and then parsing it to json and then saving it to wishlist collection
    else if(req.url === '/api/wishlist'&& req.method === 'POST'){
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
    else if(req.url === '/api/wishlist'&& req.method === 'GET'){
        res.setHeader('Content-Type','application/json');
        try{
            const wishlistProducts = await wishlistProduct.find()
            res.end(JSON.stringify(wishlistProducts));
        }
        catch(err){
            res.end(JSON.stringify({message:"Error occured in fetching wishlist products :"+err}))
        }
    }
    else if(req.url === '/api/wishlist'&& req.method === 'DELETE'){
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