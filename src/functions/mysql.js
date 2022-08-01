const connection = require("../db/config");

function obtenerPersonas() {
    return new Promise((resolve, reject) => {
        let response = { statusCode: 200, message: "Personas listadas correctamente.", data: "" };
        const sql1 = `select * from persona;`;
        connection.query(sql1, (err, personas) => {
            if (err) {
                response.statusCode = 500;
                response.message = err;
                reject(response);
                return false;
            } else {
                response.data = personas;
                resolve(response);
            }
        });
    });
}

function crearPersona(data) {
    return new Promise((resolve, reject) => {
        let response = { statusCode: 200, message: "Persona creada correctamente.", data: "" };
        const sql1 = `insert into persona set ?`;
        connection.query(sql1, data, (err1, data1) => {
            if (err1) {
                response.statusCode = 500;
                response.message = err1;
                reject(response);
                return false;
            } else {
                let sql2 = `select * from persona where id_persona='${data1.insertId}'`;
                connection.query(sql2, (err2, data2) => {
                    if (err2) {
                        response.statusCode = 500;
                        response.message = err2;
                        reject(response);
                        return false;
                    } else {
                        response.data = data2[0];
                        resolve(response);
                    }
                });
            }
        });
    });
}

module.exports = {
    obtenerPersonas,
    crearPersona,
}