'use strict';
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const mysql = require('./src/functions/mysql');

const _headers_get = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Content-Type": "application/json"
};

const _headers_post = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Content-Type": "application/json"
};

const obtenerPersonas = (event, context, callback) => {
  //context.callbackWaitsForEmptyEventLoop = false;
  mysql.obtenerPersonas()
    .then((res) => {
      console.log("res", res);
      callback(null, { statusCode: res.statusCode, headers: _headers_get, body: JSON.stringify({ message: res.message, data: res.data, errors: "" }) });
    }).catch((err) => {
      callback(null, { statusCode: err.statusCode, headers: _headers_get, body: JSON.stringify({ data: err.data, errors: err.message }) });
    });
};

const crearPersona = async (event, context, callback) => {
  //context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  try {
    const res = await mysql.crearPersona(data);
    return { statusCode: res.statusCode, headers: _headers_post, body: JSON.stringify({ message: res.message, data: res.data, errors: [] }) };
  } catch(err) {
    return { statusCode: err.statusCode, headers: _headers_post, body: JSON.stringify({ message: err.message, data: "", errors: [] }) };
  }
};

module.exports = {
  obtenerPersonas,
  crearPersona,
}