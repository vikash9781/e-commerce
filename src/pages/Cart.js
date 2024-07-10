import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";




function Cart() {

    const {cart} = useSelector((state) => state);
    const [totalAmount , setTotalAmout] = useState(0);

    useEffect(() => {
        setTotalAmout( cart.reduce((acc, curr) => acc + curr.price , 0))
    },[cart]); 

    return(
        <div className="justify-center items-center max-w-6xl p-2 mx-auto space-y-10">
             
             {
                cart.length > 0 ?
                (<div className="flex max-w-6xl  gap-16 mt-20">
                    <div className="flex flex-col max-w-[500px] justify-between  ml-[120px] ">
                    {
                        cart.map((post, index) => {
                            return <CartItem key = {post.id} post = {post} postIndex ={index}/>
                        })
                    }
                    </div>
                

                 <div className="flex flex-col justify-between items-start  mt-11">
                    
                 <div>
                        <div className="text-2xl text-green-700 font-semibold ">Your Cart</div>
                        <div className="text-6xl text-green-700 font-bold">Summary</div>
                        <p>
                            <span className="font-semibold">
                                Total Items : {cart.length}
                            </span>
                        </p>
                        </div>
                    
                    <div>
                        <p className="mb-3"><span className="font-semibold text-s">Total Amout :</span> <span className="font-bold">${totalAmount}</span> </p>
                        <button className="border px-16 py-1 rounded-lg w-full text-white bg-green-700" >
                            CheckOut Now
                        </button>
                    </div>
                 </div>
                 
                    
                </div>
                    
                ):
                (
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h1 className="text-lg font-semibold">Your cart is empty!</h1>
                        <Link to = "/">
                            <button className="border rounded-lg px-8 pt-1 pb-1 bg-green-700 text-white">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
             }
        </div>
    )
}

export default Cart;