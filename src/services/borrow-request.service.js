import httpClient from './http-client.service.js';

export const borrowRequestService = {

    submitBorrowRequest: async (requestData) =>{
        return await httpClient.post('request', requestData);
    }
}