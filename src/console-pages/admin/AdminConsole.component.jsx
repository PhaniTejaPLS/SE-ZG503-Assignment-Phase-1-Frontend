import { ApproveRequestComponent } from "./ApproveRequest.component";
import { EditInventoryComponent } from "./EditInventory.component";


export function AdminConsoleComponent({ tag }) {

    const renderComponentBasedOnTag  = (tag) => {

            switch (tag) {
                case 'edit-inv':
                    return (
                        <>
                            <EditInventoryComponent />
                        </>
                    )
                case 'approve-req':
                    return (
                        <>
                           <ApproveRequestComponent />
                        </>
                    )
            
                default:
                    break;
            }

    }



    return (
        <div>
            <h1>Admin Console</h1>
            {
                renderComponentBasedOnTag(tag)
                }
        </div>
    );
}