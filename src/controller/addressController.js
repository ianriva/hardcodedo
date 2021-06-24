const db = require("../database/models");

const addressController = {
    create: async (address) => {
        const addressCreated = await db.Address.create({
            direction: address.direction,
            num: address.num,
        }) 
    }
}
module.exports = addressController;