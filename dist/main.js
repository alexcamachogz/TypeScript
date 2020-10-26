"use strict";
console.log('Primeros pasos con TypeScript');
// Number
// Explícito
var phone = 3315015804;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Implícito
var phoneNumber = 3315015804;
console.log(hex, binary, octal, phoneNumber);
// Boolean
var isTrue = true;
// String
// Explícito
var firstName = 'Alejandra';
// Implícito
var lastName = 'Camacho';
// Template string
// Uso de back-tick ``
var userInfo = "\n  User info:\n  firstName: " + firstName + "\n  lastName: " + lastName + "\n  phone: " + phone + "\n  isValid: " + isTrue + "\n";
console.log('userInfo', userInfo);
