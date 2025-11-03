import httpClient from './http-client.service.js';

export const equipmentService = {


    getAllEquipment:  async  () => {
        return await httpClient.get('/equipment');
    },

    getEquipmentById: async (id) =>{
        return 0;
    },

    getEquipmentByTag: async (tag,filterParams) =>{
        return await httpClient.get(`/equipment?tag=${tag}&name=${filterParams.name}&condition=${filterParams.condition}&availablequantity=${filterParams.availablequantity}`);
    }





}



