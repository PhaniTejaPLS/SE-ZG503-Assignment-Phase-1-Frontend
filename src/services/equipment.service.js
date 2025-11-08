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
    },

    updateEquipment: async (equipmentObject) =>{
        return await httpClient.put(`/equipment/${equipmentObject.id}`, equipmentObject);
    },

    updateEquipmentRecord: async (equipmentObject) =>{
        return await httpClient.patch(`/equipment/${equipmentObject.id}`, equipmentObject);
    },

    addEquipment: async (equipmentObject) => {
        return await httpClient.post(`/equipment`, equipmentObject)
    }





}



