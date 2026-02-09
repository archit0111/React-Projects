use('Shopping_poolDB');

// For inserting Data

db.Products.insertMany([
    {
    name: "T Shirt",
    img: '/ts-1.webp',
    prize: 500,
    type:["tshirt","cotton", "cloths", "casual", "man"]
    },
    {
    name: "Formal Shoe",
    img: '/shoe-1.webp',
    prize: 2500,
    type:["shoe","formal", "shoe", "black", "man"]
    },
    {
    name: "Casual Shoe",
    img: '/shoe-2.webp',
    prize: 1500,
    type:["shoe","casual", "shoe", "blue", "man"]
    },
    {
    name: "Cap",
    img: '/cap-1.webp',
    prize: 500,
    type:["cap","casual","black"]
    },
    {
    name: "Cap",
    img: '/cap-2.webp',
    prize: 550,
    type:["cap","casual","white"]
    },
    {
    name: "Headphone",
    img: '/headphone-1.webp',
    prize: 1959,
    type:["headphone","electronics", "silver", "boat"]
    },
    {
    name: "Headphone",
    img: '/headphone-2.webp',
    prize: 2590,
    type:["headphone","electronics", "black", "jlb"]
    },
    {
    name: "Laptop asus",
    img: '/lap-1.webp',
    prize: 50099,
    type:["laptop","asus", "black", "electronics"]
    },
    {
    name: "Laptop aser",
    img: '/lap-2.webp',
    prize: 112999,
    type:["laptop","aser", "black", "electronics"]
    },
    {
    name: "Sari",
    img: '/sari.webp',
    prize: 4999,
    type:["sari","cloth", "women", "pink"]
    }
]);
