import httpClient from './http-client.service.js';

export const equipmentService = {


    getAllEquipment:  async  () => {
        return await httpClient.get('/equipment');
    },

    getEquipmentById: async (id) =>{
        return 0;
    },

    getEquipmentByTag: async (tag) =>{
        return await httpClient.get(`/equipment?tag=${tag}`);
    }





}



