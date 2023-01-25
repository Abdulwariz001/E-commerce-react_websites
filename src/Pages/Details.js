import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Details(){
    const {data, setdata}= useState({});
    const {id} = useParams();
    const getDetails = async ()=> {
        try{
            let prod = await axios(`https://dummyjson.com/products/${id}`)
            setdata(prod.data)     
        }catch(err){
        console.log(err)
     };
    }

    useEffect(() =>{
        getDetails()
    }, []);

    return (
    <>
    {data ?
    <div>
        <div className=''>
            <div className=''>
                <img src ={data.images.length > 0 ? data.images[2] : data.thumbnail} />
            </div>
            <p>
                Price: {data.tittle}
                Rating:{data.rating}
            </p>
            <p>
                Description:{data.description}
            </p>
            <button>Add To Cart</button>
            <button>Review</button>
            <br/>
            <br/>

            {/* <div className=''>
                <h4>Price:<span>{data.title}</span></h4>
                <h4>Rating: {data.rating}</h4>
                <h4>Brand: {data.brand}</h4>
                <h4>Category: {data.category}</h4>
                <h4>Description: <span> {data.description}</span></h4>
            </div> */}
        </div>
    <div className=''>
        <img src ={data.images > 0 ? data.images[0] : data.thumbnail}  />
        <img src ={data.images > 0 ? data.images[1] : data.thumbnail}  />
        <img src ={data.images > 0 ? data.images[2] : data.thumbnail}  />
        <img src ={data.images > 0 ? data.images[3] : data.thumbnail}  />
     </div>

    </div> : "Loading...."}
    {

    }
    </>
  )
}

export default Details