import React , {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Ordersscreen() {
    
    AOS.init()
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders , error , loading} = orderstate

    useEffect(() => {

        dispatch(getUserOrders())
      
    }, [])

    return (
        <div>
    <div style={{ backgroundColor: "black", padding: "10px", border: "1px solid white", textAlign: "center" }}>
        <h2 style={{ fontSize: '35px', color: "white", fontFamily: "cursive" }}>My Orders</h2>
    </div>
    <hr />
    <div className="row justify-content-center">
        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong' />)}
        {orders && orders.map(order => {
            return (
                <div className="col-md-8 m-2 p-1" data-aos='fade-down' style={{ backgroundColor: 'black', color: 'white', border: '3px solid red', textAlign: "center" }}>
                    <div className="flex-container">
                        <div className='text-left w-100 m-1' style={{ textAlign: "center" ,fontFamily:"cursive"}}>
                            <h2 style={{ fontSize: '25px', marginLeft: "100px", fontFamily: "Times new roman" }}>Items</h2>
                            <hr />
                            {order.orderItems.map(item => {
                                return (
                                    <div>
                                        <p style={{ border: "1px solid red", padding: "5px" }}>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='text-left w-100 m-1' style={{ textAlign: "center" ,fontFamily:"cursive"}}>
                            <h2 style={{ fontSize: '25px', marginLeft: "80px", fontFamily: "Times new roman"  }}>Address</h2>
                            <hr />
                            <p style={{ border: "1px solid red", padding: "5px" }}>Street: {order.shippingAddress.street}</p>
                            <p style={{ border: "1px solid red", padding: "5px" }}>City: {order.shippingAddress.city}</p>
                            <p style={{ border: "1px solid red", padding: "5px" }}>Country: {order.shippingAddress.country}</p>
                            <p style={{ border: "1px solid red", padding: "5px" }}>Pincode: {order.shippingAddress.pincode}</p>
                        </div>
                        <div className='text-left w-100 m-1' style={{ textAlign: "center" ,fontFamily:"cursive" }}>
                            <h2 style={{ fontSize: '25px', marginLeft: "80px", fontFamily: "Times new roman" }}>Order Info</h2>
                            <hr />
                            <p style={{ border: "1px solid red", padding: "5px" }}>Order Amount: {order.orderAmount}</p>
                            <p style={{ border: "1px solid red", padding: "5px" }}>Date: {order.createdAt.substring(0, 10)}</p>
                            <p style={{ border: "1px solid red", padding: "5px" }}>Transaction Id: {order.transactionId}</p>
                            <p style={{ border: "1px solid red", padding: "5px" }}>Order Id: {order._id}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
</div>
    )
}