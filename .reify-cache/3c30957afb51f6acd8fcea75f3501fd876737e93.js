"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link('./../src/person.js',{default(v){Person=v}},2);
const { describe, it } = mocha;

const { expect } = chai;


describe('Person suite', () => {
    it('should return a person instance from a string', () => {
        const person = Person.generateInstanceFromString('1 Bike,Carro 20000 2000-02-02 2000-11-11');

        const expected = {
            id: '1',
            vehicles: ['Bike', 'Carro'], 
            kmTraveled: '20000', 
            from: '2000-02-02', 
            to: '2000-11-11'
        }

        expect(person).to.be.deep.equal(expected);
    });
    it('should format values', () => {
        const person = new Person({
            id: '1',
            vehicles: ['Bike', 'Carro'], 
            kmTraveled: '20000', 
            from: '2000-02-02', 
            to: '2000-11-11'
        });

        const result = person.formatted('pt-BR');

        const expected = {
            id: 1,
            vehicles: 'Bike e Carro',
            kmTraveled: '20.000 km',
            from: '02 de fevereiro de 2000',
            to: '11 de novembro de 2000'
        };

        expect(result).to.be.deep.equal(expected);
    })
})