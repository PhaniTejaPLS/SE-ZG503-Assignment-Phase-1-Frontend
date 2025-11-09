import httpClient from "./http-client.service";


export const loginService = {
    loginUser: async (credentials) => {
        return await httpClient.post('/auth/login', credentials);
    }
}