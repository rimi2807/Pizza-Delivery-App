import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Cartscreen() {
    AOS.init();
    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems;
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="row justify-content-center p-2" data-aos='fade-down'>

                <div className="col-md-6">
                    <div style={{ backgroundColor: "black", padding: "10px", border: "2px solid black", textAlign: "center", width: "100%" }}>
                        <h2 style={{ fontSize: "35px", color: "white", fontFamily: "cursive" }}>My Cart</h2>
                    </div>
                    <div style={{ backgroundColor: "white", padding: "10px", border: "2px solid black" }}>
                        {cartItems.map(item => (
                            <div className="flex-container" key={item.id}>

                                <div className='m-1 w-100'>
                                    <img src={item.image} style={{ height: '120px', width: '120px' }} />
                                </div>

                                <div className='text-left m-1 w-100'>
                                    <h1>{item.name} [{item.varient}]</h1>
                                    <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                    <h1 style={{ display: 'inline' }}>Quantity : </h1>
                                    <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                                    <b>{item.quantity}</b>
                                    <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                                    <hr />
                                </div>

                                <div className='m-1 w-100'>
                                    <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-4 text-right">
                    <div style={{ backgroundColor: "white", padding: "10px", border: "2px solid black" }}>
                        <h2 style={{ fontSize: '45px' }}>SubTotal: {subtotal} /-</h2>
                        <Checkout subtotal={subtotal} />
                    </div>
                </div>

            </div>
        </div>
    );
}
