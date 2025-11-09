import { useState, useEffect } from "react";
import './EditInventory.component.css';
import { equipmentService } from "../../services/equipment.service";
import { useNavigate } from "react-router";

export function EditInventoryComponent(){

    const [equipmentObject, setEquipmentObject] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch equipment data if needed
    }, [equipmentObject]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseInt(value, 10) : value;
        if(parsedValue === NaN || parsedValue === ''){
            return;
        }
        console.log(`Field: ${name}, Value: ${parsedValue}`);
        setEquipmentObject(prev => ({ ...prev, [name]: parsedValue }));
    };

    const handleEdit = async () => {
        try {
                console.log(equipmentObject);
            if(Object.values(equipmentObject).includes(null)){
                
                const response  = await equipmentService.updateEquipmentRecord(equipmentObject);
            }else{
                const response = await equipmentService.updateEquipment(equipmentObject);
            }
            setEquipmentObject({});
            navigate('/home');
        }catch(err){
            console.log(err);
        }
    }

    const handleAdd = async () => {
        try {
            console.log(equipmentObject);
            const response = await equipmentService.addEquipment(equipmentObject);
            setEquipmentObject({});
            navigate('/home');
        }catch(err){
            console.log(err);
        }
    
    }

    return (
        <>
        <div className="edit-inventory-form">

       
            <div className="mb-3">
                <label for="equipmentid" className="form-label">Equipment ID </label>
                <input type="number" className="form-control"
                                     id="equipmentid"
                                     name="id"
                                     placeholder="name@example.com"
                                     value={equipmentObject.id}
                                     onChange={handleChange}
                 />
            </div>
            <div className="mb-3">
                <label for="equipmentname" className="form-label">Equipment Name</label>
                <input type="text" 
                        className="form-control"
                        id="equipmentname"
                        name="name"
                        placeholder="Equipment Name"
                        value={equipmentObject.name}
                        onChange={handleChange}
                 />
            </div>
            <div className="mb-3">
                <label for="equipmentcondition" className="form-label">Condition</label>
                <input type="text"
                     className="form-control"
                     id="equipmentcondition"
                     name="condition"
                     placeholder="Condition"
                     value={equipmentObject.condition}
                     onChange={handleChange}
               />
            </div>
            <div className="mb-3">
                <label for="equipmentquantity" className="form-label">Quantity</label>
                <input type="number"
                     className="form-control"
                     id="equipmentquantity"
                     name="quantity"
                     placeholder="Quantity"
                     value={equipmentObject.quantity}
                     onChange={handleChange}     
                />
            </div>

            <div className="mb-3">
                <label for="equipmentavailableqty" className="form-label">Available Quantity</label>
                <input type="number"
                     className="form-control"
                     id="equipmentavailableqty"
                     name="availablequantity"
                     placeholder="Available Quantity"
                     value={equipmentObject.availableQuantity}
                     onChange={handleChange}
                />
            </div>

        <div className="mb-3">
                <label for="equipmenttag" className="form-label">Tag</label>
                <input type="text"
                     className="form-control"
                     id="equipmenttag"
                     name="tag"
                     placeholder="Tag"
                     value={equipmentObject.tag}
                     onChange={handleChange}
                />
            </div>
            <button type="button"
                 className="btn btn-primary"
                 onClick={handleAdd}
                 
                 >Add</button>

            <button type="button"
                 className="btn btn-primary edit-button"
                 onClick={handleEdit}
                 
                 >Update</button>
     </div>

     

        </>
    )

}