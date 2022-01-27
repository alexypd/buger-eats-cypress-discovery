var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '34998609390',
            address: {
                cep: '38400648',
                street: 'Rua Ozório José da Cunha',
                number: '700',
                details: 'Apto 802 A',
                district: 'Brasil',
                city_state: 'Uberlândia/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}