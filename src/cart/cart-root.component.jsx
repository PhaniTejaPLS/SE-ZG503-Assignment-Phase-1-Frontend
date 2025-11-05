import './cart-root.component.css';
import { useCart } from '../CartContext.jsx';
import { useEffect } from 'react';


export const CartComponent = () =>{


    const { cartItems, removeFromCart } = useCart();

        useEffect(() => {
            console.log(cartItems);
        }, [cartItems]);

    return(
        <>
        <h2>Bill of Materials</h2>
        <div className="cart-root">

                <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tag</th>
                    <th scope="col">Condition</th>
                    <th scope="col">Quantity Required</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <tr key={cartItem.id}>
                                <td>{cartItem.id}</td>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.tag}</td>
                                <td>{cartItem.condition}</td>
                                <td>
                                    <div class="mb-3 qty-input">
                                        <label htmlForfor="quantity" className="form-label">Quantity:</label>
                                        <input type="number" className="form-control" id="quantity" name="quantity" />
                                    </div>
                                </td>
                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger btn-sm"
                                        onClick={removeFromCart.bind(this, cartItem.id)}
                                        >
                                            Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    }) 
                }
            </tbody>


        </table>

        </div>
        </>
    )
    
}