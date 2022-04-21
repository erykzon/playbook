const Ajolonauta = require('./../app/Ajolonauta')

describe("Prueba de unida de Ajolonauta " ,() => {
    test (' Caso de peruba 1, creacion de un Objeto' , () =>{
        const woopa = new Ajolonauta("Woopa")
        expect(woopa.name).toBe("Woopa");
    });
})