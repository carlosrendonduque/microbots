const expect = require('chai').expect;
// import math file
const mathasynctry = require('../mathasynctry');
describe('mathasynctry.js tests', () => {
    describe('mathasynctry.add() Test', () => {
        it('should equal 2', async () => {
            const result = await mathasynctry.add(1, 1);
            expect(result).to.equal(2);
         });
         it('should equal 5', async () => {
            const result = await mathasynctry.add(2, 3);
            expect(result).to.equal(5);
         });
         it('should throw an error', async () => {
            try {
                await mathasynctry.add(1);
            } catch (error) {
                expect(error).to.equal('missing arg');
            }
        });
    });
    
    describe('mathasynctry.multiply() Test', () => {
        it('should equal 3', async () => {
            const result = await mathasynctry.multiply(3, 1);
            expect(result).to.equal(3);
         });
         it('should equal 10', async () => {
            const result = await mathasynctry.multiply(5, 2);
            expect(result).to.equal(10);
         });
         it('should throw an error', async () => {
            try {
                await mathasynctry.multiply(1);
            } catch (error) {
                expect(error).to.equal('missing arg');
            }
        });
    });
});

