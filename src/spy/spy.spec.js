import { Spy } from './spy';
const sinon = require('sinon');
const assert = require('assert');

describe('Spy', () => {
    let spyGeorge;

    beforeEach(() => {
        spyGeorge = new Spy('George');
    });

    describe('#tryCatchSpy', () => {
        //spy
        it('should catch spyGeorge if the secretKey is correct', () => {
            const spy = sinon.spy(spyGeorge, 'catchSpy');

            spyGeorge.tryCatchSpy('George');
            sinon.assert.calledOnce(spy);
        });

        it('shouldn\'t catch spyGeorge if the secretKey is not a correct', () => {
            const spy = sinon.spy(spyGeorge, 'catchSpy');

            spyGeorge.tryCatchSpy('carrot');
            sinon.assert.notCalled(spy);
        });
    });

    describe('#getSecretKey', () => {
        it('should return secretKey', () => {
            assert.equal(spyGeorge.getSecretKey(), 'George');
        });
    });

    describe('#generateSecretKey', () => {
        //stub
        it('should generateSecretKey', () => {
            const stub = sinon.stub(spyGeorge, 'keyRandomizer').returns('mockKey');

            spyGeorge.generateSecretKey();
            assert.equal(spyGeorge.getSecretKey(), 'mockKey');
        });
    });
});
