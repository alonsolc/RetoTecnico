const handler = require('../handler');

describe('pruebas de integración de servicio de persona', () => {
    test('debería tomar un cuerpo y devolver una respuesta de API Gateway', async () => {
        const event = {
            body: `{
                "nombre": "Oscar Lopez",
                "altura": 1.79,
                "masa": 100,
                "color_cabello": "negro",
                "color_piel": "claro",
                "color_ojo": "negro",
                "fecha_nacimiento": "1995-20-11",
                "genero": "masculino"
            }`
        };
        const res = await handler.crearPersona(event);
        expect(typeof res).toBe('object');
        expect(res).toBeDefined();
        const response = JSON.parse(res.body);
        expect(typeof response).toBe('object');
        expect(res.statusCode).toBe(200)
    })
})