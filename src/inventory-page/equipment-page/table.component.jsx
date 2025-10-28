
import "./table.component.css";


export function TableComponent({equipmentList, tag}) {



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
                </tr>
            </thead>
            <tbody>
                {
                    equipmentList.filter((equipmentItem) => equipmentItem.tag === tag)
                    .map((equipmentListItem) => {
                        return (
                            <tr key={equipmentListItem.id}>
                                <td>{equipmentListItem.id}</td>
                                <td>{equipmentListItem.name}</td>
                                <td>{equipmentListItem.tag}</td>
                                <td>{equipmentListItem.condition}</td>
                                <td>{equipmentListItem.quantity}</td>
                                <td>{equipmentListItem.availablequantity}</td>
                            </tr>
                        )
                    })
                }
            </tbody>


        </table>
    )

}