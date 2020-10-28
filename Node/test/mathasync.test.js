const expect = require('chai').expect;
// import math file
const mathasync = require('../mathasync');
describe('mathasync.js tests', () => {
    describe('mathasync.add() Test', () => {
        it('should equal 2', async () => {
            const result = await mathasync.add(1, 1);
            expect(result).to.equal(2);
         });
         it('should equal 5', async () => {
            const result = await mathasync.add(3, 2);
            expect(result).to.equal(5);
         });
    });
    
    describe('mathasync.multiply() Test', () => {
        it('should equal 3', async () => {
            const result = await mathasync.multiply(3, 1);
            expect(result).to.equal(3);
         });
         it('should equal 10', async () => {
            const result = await mathasync.multiply(5, 2);
            expect(result).to.equal(10);
         });
    });
});

