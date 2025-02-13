const { v4: uuid} = require("uuid");

class Menu {
    constructor( bebida, ingrediente, preco) {
        this.id = uuid();
        this.bebida = bebida;
        this.ingrediente = ingrediente;
        this.preco = preco;
    }
}

module.exports = Menu;
