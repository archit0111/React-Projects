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

const  server = http.createServer(async (req , res)=>{
    console.log(req.url);

    res.setHeader('content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin','*');
    
    if(req.url === '/api/products'){
        res.setHeader('Content-Type','application/json');

        try{
            const products = await product.find()
            console.log(products);
            res.end(JSON.stringify(products));
        }
        catch{
            res.end(JSON.stringify({message : "Error occured in fetching data from database"}))
        }
    }
    else{
        res.end("<h1>Page Not Found</h1>")
        }
})

server.listen(3000,()=>(
    console.log("Server is listenig on port 3000")
))