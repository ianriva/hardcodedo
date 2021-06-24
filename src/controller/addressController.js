const db = require("../database/models");

const addressController = {
    create: async (address) => {
        try {
            const addressCreated = await db.Address.create({
                direction: address.direction,
                num: address.num,
            })
            return addressCreated;
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = addressController;