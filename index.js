//index.js
(async () => {
    const db = require('./models');

    try {
        const resultadoCreate = await db.usuarios.create({
            nome: 'clientggge',
            email: 'cliente@provedor.com',
            senha: '12345678911'
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();