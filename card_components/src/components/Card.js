import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxAndSlice/cartSlice';

function Card({data}){

    const dispatch=useDispatch()

    return(
        <>
        <div className="card" style={{width:'15rem',height:'20rem',display:'flex',flexDirection:'column'}}>
        <img src={data.image} className="card-img-top" alt="images" style={{width:'80px',height:'80px'}}></img>
        <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
           <p className="card-text"><b>Price:</b>{data.price} {/* <br></br>Description:{data.description}*/}</p> 
            <button href="www.google.com" className="btn btn-primary" style={{marginBottom: 'auto'}} onClick={()=>dispatch(addToCart(data))}>add to cart</button>
        </div>
        </div>
        </>
    )
}
export default Card

