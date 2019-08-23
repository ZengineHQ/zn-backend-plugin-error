var assert = require('assert');

const PluginError = require('../index');

describe('PluginError', function() {

    it('should be instanceof PluginError', function() {

        let err;

        try {
            throw new PluginError('Unauthorized', 403);
        }
        catch (e) {
            err = e;
        }

        assert.equal(err instanceof PluginError, true);

    });

    it('should have an error code', function() {

        let err;

        try {
            throw new PluginError('Unauthorized', 403);
        }
        catch (e) {
            err = e;
        }

        assert.equal(err.code, 403);

    });

    it('should have a message', function() {

        let err;

        try {
            throw new PluginError('Unauthorized', 403);
        }
        catch (e) {
            err = e;
        }

        assert.equal(err.message, 'Unauthorized');

    });

    it('should match toString', function() {

        let err;

        try {
            throw new PluginError('Unauthorized', 403);
        }
        catch (e) {
            err = e;
        }

        assert.equal(err.toString(), 'Error: Unauthorized');

    });


});
