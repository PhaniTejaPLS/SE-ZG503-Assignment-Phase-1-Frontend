import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext.jsx";
import { requestService } from "../../services/request.service.js";
import "./student.request.component.css"

export const StudentRequestPageComponent = () => {

    const [requests, setRequests] = useState([]);
    const [requestDetails, setRequestDetails] = useState([]);
    const { user } = useAuth();

    async function fetchRequestsForCurrentUser() {
        try {
            console.log('Fetch')
            const response = await requestService.getRequestByUser(user.id);
            setRequests(response.data);
        } catch (error) {
            console.error("Error fetching requests:", error);
        }
    }
    useEffect(() => {
        fetchRequestsForCurrentUser();
    }, [user.id])

    const getRequestDetails = async (requestId) => {
        try {
            const response = await requestService.getRequestDetailsById(requestId);
            fetchRequestsForCurrentUser();
        }catch(err){
            console.log(err)
        }
    }

    const cancelRequest = async (requestId) => {
        try {
            const response = await requestService.deleteRequestById(requestId);
            fetchRequestsForCurrentUser()
        }catch (err) {
            console.log(err)
        }
    }


    return (
        <>

            <div>
                <h1>My Requests </h1>
            </div>

            {/* <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                    </tr>
                </tbody>
            </table> */
                <>
                    <div className="request-table">
                        <table className="table table-dark table-hover">
                            <thead>

                                <tr className="table-dark">
                                    <th className="table-dark" scope="col">Request ID</th>
                                    <th className="table-dark" scope="col">Request Date</th>
                                    <th className="table-dark" scope="col">Status</th>
                                    <th className="table-dark" scope="col">Details</th>
                                    <th className="table-dark" scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    requests.map((request) => {
                                        return (
                                            <tr className="table-dark" key={request.id}>
                                                <td className="table-dark">{request.id}</td>
                                                <td className="table-dark">{new Date(request.requestDate).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</td>
                                                <td className="table-dark">{request.status}</td>
                                                <td>
                                                    <button
                                                            className="btn btn-outline-light btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#requestDetails"
                                                            onClick={() => getRequestDetails(request.id)}
                                                        >
                                                            View
                                                        </button>
                                                </td>
                                                <td className="table-dark">
                                                    {request.status === 'pending' ? 
                                                        (
                                                            <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            onClick={() => cancelRequest(request.id)}
                                                        >
                                                            Cancel Request
                                                        </button>
                                                        ):
                                                        (<button
                                                            className="btn btn-outline-success btn-sm" disabled
                                                            
                                                        >
                                                            Active
                                                        </button>)

                                                    }
                                                    
                                                </td>
                                                
                                            </tr>


                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                
                    <div className="modal fade" id="requestDetails"   tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Request Details</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Equipment Name</th>
                                            <th scope="col">Requested Quantity</th>
                                            <th scope="col">Borrow Date</th>
                                            <th scope="col">Return Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            requestDetails.map((requestItem)=>{
                                                return (
                                                   <tr>
                                                    <td>{requestItem.equipmentName}</td>
                                                    <td>{requestItem.borrowedQuantity}</td>
                                                    <td>{new Date(requestItem.borrowDate).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</td>
                                                    <td>{new Date(requestItem.returnDate).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</td>
                                                   </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                    
                                </div>
                            </div>
                        </div>
                    </div>



                </>

            }
        </>

    )


}