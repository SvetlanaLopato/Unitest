const should = require('chai').should();
import { Node } from '../node/node';

describe('Node', function() {
    describe('#constructor', () => {
        var node = new Node(1, 0, 3);

        it('should assign currnt value to node', () => {
            const { value } = node;

            value.should.be.equal(1);
        });

        it('should assign previous value', () => {
            const { prev } = node;

            prev.should.be.equal(0);
        });

        it('should assign previous value', () => {
            const { next } = node;

            next.should.be.equal(3);
        });
    });
});
