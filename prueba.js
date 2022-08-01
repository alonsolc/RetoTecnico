const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const mysql = require('./src/functions/mysql');
const translate = new AWS.Translate({ apiVersion: '2017-07-01' }); // Fix API version (best practice)

/*async function test() {
    try {
        const params = {
            SourceLanguageCode: 'en',
            TargetLanguageCode: 'es',
            Text: 'skin color',
        };
        const data = await translate.translateText(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err, err.stack);
    }
};*/

/*async function test() {
    try {
        const result = await mysql.obtenerPersonas();
        console.log("result", result);
    } catch (err) {
        console.log(err, err.stack);
    }
}*/

async function test() {
    try {
        const data = {
            nombre: "Luke",
            altura: 1.72,
            masa: 77,
            color_cabello: "rubio",
            color_piel: "clara",
            color_ojo: "azul",
            fecha_nacimiento: "1998-10-30",
            genero: "masculino"
        };
        const result = await mysql.crearPersona(data);
        console.log("result", result);
    } catch (err) {
        console.log(err, err.stack);
    }
}

test();