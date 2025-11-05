
import "./table.component.css";
import { useCart } from "../../CartContext";
import { useEffect } from "react";


export function TableComponent({equipmentList, tag}) {


    const { cartItems, addToCart, removeFromCart } = useCart();

    console.log("Current Cart Items:", cartItems);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const addEquipmentToCart = (event) => {
        const equipmentId = parseInt(event.target.value); 
        console.log("Checkbox state:", event.target.checked);
        if(event.target.checked){
            const selectedEquipment = equipmentList.find(item => item.id === equipmentId);
            addToCart(selectedEquipment);
        }else{
            removeFromCart(equipmentId);
        }
    }



    return ( 
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tag</th>
                    <th scope="col">Condition</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Available Quantity</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    equipmentList
                    .filter((equipmentItem) => equipmentItem.tag === tag)
                    .map((equipmentListItem) => {
                        return (
                            <tr key={equipmentListItem.id}>
                                <td>{equipmentListItem.id}</td>
                                <td>{equipmentListItem.name}</td>
                                <td>{equipmentListItem.tag}</td>
                                <td>{equipmentListItem.condition}</td>
                                <td>{equipmentListItem.quantity}</td>
                                <td>{equipmentListItem.availablequantity}</td>
                                <td>
                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={equipmentListItem.id}
                                        id={`checkDefault-${equipmentListItem.id}`}
                                        onChange={(e)=>{addEquipmentToCart(e)}}
                                    />

                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>


        </table>
    )

}