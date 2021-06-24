const db = require("../database/models");

const personController = {
    create: async (id, person) => {
        try {
            const personCreated = await db.Person.create({
                name: person.name,
                addressId: id
            })
            return personCreated;
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = personController;