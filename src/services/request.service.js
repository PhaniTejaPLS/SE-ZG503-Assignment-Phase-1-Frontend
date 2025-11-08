

import httpClient from "./http-client.service";


export const requestService = {
    getAllRequests: () => {
        return httpClient.get('/request');
    },

    getRequestByUser: (userId) => {
        return httpClient.get(`/request/user/${userId}`);
    },

    getRequestDetailsById: (requestId) => {
        return httpClient.get(`/request/details/${requestId}`)
    },

    deleteRequestById: (requestId) =>{
        return httpClient.delete(`/request/${requestId}`)
    }

}