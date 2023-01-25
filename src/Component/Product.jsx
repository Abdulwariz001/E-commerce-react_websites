
import Button from './Button';
import { Link } from 'react-router-dom';
import './Product.css';
function Product(props) {
  const {id, title, description,price, discountPercentage, rating, stock, brand, category, thumbnail, images } = props;

   const style ={
   marginTop:'20px',

   
   
     }

  console.log(props)
  return (
    <div className='' style={style}>
        <h3 style={{fontFamily:'arial',fontSize:'21px'}} className='center'> {title}</h3>
        <img src={images[0]} alt={title} />
        {/* <p>{}</p>  */}
       <p style={{marginTop:'',fontSize:'17px',}}> Price: {price}   <span style={{marginLeft:'3%'}}>Discount: {discountPercentage}</span></p> 
        <Link to={`/product/${id}`} className="btn">Details</Link> 
        <Button/> <br/> <br/>
    </div>
  )
}
export default Product;
// import Productpage from '../Pages/Productpage';

// function Product(props) {
// console.log(props)

// return (
//     <div className='items'>
//         <img src={props.image} alt={props.productName} />
//         <p  style={{color:'black'}}>{props.description}</p>
//         <b style={{color:'black'}}>{props.price}</b>
//         <Button/>
//     </div>
//   )
// }

// export default Product