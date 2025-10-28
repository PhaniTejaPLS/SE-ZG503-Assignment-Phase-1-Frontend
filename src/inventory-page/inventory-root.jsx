import { Outlet } from "react-router";
import { EquipmentPage } from "./equipment-page/equipment-page.component";


export function InventoryPageRoot({tag}) {

    console.log("Inventory Page Root Tag:", tag);

    return (
        <div>
           <EquipmentPage tag={tag}  />
        </div>
    )
}