import Product from '../Component/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Productpage() {
  const [product, setProduct] =useState([]);

  async function getProduct(){
    try{
    let product = await axios('https://dummyjson.com/products');
    if(product.status === 200){
      setProduct(product.data.products)
    }
    }catch(err){
      console.log(err)
    }
  } 
    useEffect(()=>{
     getProduct();
    }, [])
        return(
            <div className="demo">
            {/* Greeting {product} */}
              {product.length > 0 ? product.map((value, index)=>{
                const {name, img, price, description} = value;
               return(
                  <Product key={index}  {...value} />
               )
              }) :"Loading..."}
    
              
              {/* <Product productName={products[0].name} imageSrc={products[0].img} price={products[0].price} description={products[0].description} />
              <Product productName={products[1].name} imageSrc={products[1].img} price={products[1].price} description={products[1].description}  />
              <Product productName={products[2].name} imageSrc={products[2].img} price={products[2].price} description={products[2].description}  />
              <Product productName={products[3].name} imageSrc={products[3].img} price={products[3].price} description={products[3].description}  /> */}
              </div>
            )
}

export default Productpage
// function Productpage() {
//     const [product, setProduct] =useState([

//     {
//       img:'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/C/1_1521560018.jpg',
//       description: `Mama's Pride Rice - 50kg`,
//       price:37999,
//       name:"Rice"
  
//     },
      
//     {
//       img:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/Y/118566_1586177228.jpg",
//       description: `Milo 400g Sachet`,
//       price:1099,
//       name:"Milo Sachet"
//     },
     
   
//      {
//       img:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/X/_1667552723.jpg",
//       description: `Mamador Vegetable Oil - 50kg`,
//       price:5260,
//       name:"Groundnutoil"
//      },
   
//       {
//       img:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/O/170352_1658824955.jpg",
//       description: `Golden Penny Noodles`,
//       price:4286,
//       name:"Noddles"
  
//       },
   
//       {
//       img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/P/_1654855416.jpg",
//       description: `CWAY Nutriyo Yoghurt`,
//       price:3400,
//       name:"Nutriyo"
  
//       },
//     ])
//     useEffect(()=>{
//       // setProduct()
//     },[])
//     return(
//               <div className="demo">
                    
//                     {product.length > 0 ? product.map((value, index)=>{
//                     const {name, img, price, description} = value;
//                     return(
//                         <Product key={index} productName={name} imageSrc={img}  price={price} description={description} />
//                     )
//                     }) :"No Products available"}
                    
//                 </div>
//     )

    
  
     
//     // return(
//     //   <div className='demo'>
//     //     <Product product={product[0].product1} image={product[0].img1} description={product[0].description1} price={product[0].price1} />
//     //     <Product product={product[1].product2} image={product[1].img2} description={product[1].description2} price={product[1].price2}/>
//     //     <Product product={product[2].product3} image={product[2].img3} description={product[2].description3} price={product[2].price3}/> 
//     //     <Product product={product[3].product4} image={product[3].img4} description={product[3].description4} price={product[3].price4}/>
//     //     <Product product={product[4].product5} image={product[4].img5} description={product[4].description5} price={product[4].price5}/>
//     //   </div>
  
  
//     // );
  
//   }
//   export default Productpage