'use strict';

class PluginError extends Error {

	constructor(message, code) {

		super(message);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, PluginError);
		}

		this.code = code || 500;

	}

}

module.exports = PluginError;
