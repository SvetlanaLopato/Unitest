import { Array } from './array';
const expect = require('chai').expect;

describe('Array', function() {
    let array;

    beforeEach(() => {
        array = new Array();
    });

    describe('#getArray()', function() {
        it('should return an array', function() {
            expect(array.getArray()).to.be.a('array');
        });
    });

    describe('#size()', function() {
        it('should return current size of array', function() {
            expect(array.size()).to.equal(0);
        });
    });

    describe('#push()', function() {
        it('should add new value to array', function() {
            array.push(2);
            expect(array.getArray()).include(2);
        });
    });

    describe('#concat()', function() {
        const newArray = [1, 2, 3];

        it('should concat two arrays', function() {
            array.push(8);
            expect(array.concat(newArray)).to.eql([8, 1, 2, 3]);
        });
    });
})
