const assert = require('assert');
import { IncrementModule } from './incrementModule.js';

describe('IncrementModule', function() {
    let incrementModule;

    beforeEach(() => {
        incrementModule = IncrementModule();
    });

    describe('#getValue()', function() {
        it('should return 0 if value was not incremented', function() {
            assert.equal(0, incrementModule.getValue());
        });
    });

    describe('#increment()', function() {
        it('should return 1 if value was incremented one time', function() {
            assert.equal(1, incrementModule.increment());
        });
    });
});
