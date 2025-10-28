import { equipmentService } from "../../services/equipment.service.js"
import { useState, useEffect } from "react";
import { TableComponent } from "./table.component.jsx";
import './equipment-page.css';

export function EquipmentPage({ tag, title }) {
    const [equipmentList, setEquipmentList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchEquipment() {
            try {
                const response = await equipmentService.getAllEquipment();
                setEquipmentList(response.data);
            } catch (error) {
                console.error("Error fetching equipment by tag:", error);
            }
        }
        fetchEquipment();
    }, [])

    const renderPageTitle = (tag) => {
        switch (tag) {
            case 'lab':
                return 'Laboratory Equipment';
            case 'sports':
                return 'Sports Equipment';
            case 'electronics':
                return 'Electronics';
            case 'music':
                return 'Musical Instruments';
            case 'furniture':
                return 'Furniture';
        }
    }



    const useSearchBasedOnInput = (searchString) => {
        (async () => {
            try {
                const response = await equipmentService.getEquipmentByTag(tag, searchString);
                setEquipmentList(response.data);
                setSearchTerm('')
            } catch (error) {
                console.error("Error fetching equipment by tag and search:", error);
            }
        })();
    };



    return (
        <>
            <h2>{renderPageTitle(tag)}</h2>

            <div className="container-sm">
                <div className="search-bar">
                    <input
                        name="search-equip"
                        className="form-control form-control-sm"
                        type="text"
                        placeholder=".form-control-sm"
                        aria-label=".form-control-sm example"
                        value={searchTerm}
                        onChange={(searchEvent) => setSearchTerm(searchEvent.target.value)}
                        onKeyDown={(keyEvent) => { if (keyEvent.key === 'Enter') useSearchBasedOnInput(searchTerm) }}
                    />
                    <div className="search-icon" onClick={() => useSearchBasedOnInput(searchTerm)}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>

                    <div className="filter" onClick={() => console.log("Filter Clicked")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                        </svg>
                    </div>
                </div>
                <div className="table-list">
                    <TableComponent equipmentList={equipmentList} tag={tag} />
                </div>
            </div>
        </>

    )
}