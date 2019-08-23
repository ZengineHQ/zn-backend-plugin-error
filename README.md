# zn-backend-plugin-error

Javascript Error object for plugin errors with HTTP response codes

## Installation

```bash
npm i @zenginehq/backend-plugin-error --save
```

## Usage

```
const PluginError = require('@zenginehq/backend-plugin-error');

exports.run = function(eventData) {

    try {

        if (eventData.request.method !== 'POST') {
            throw new PluginError('Not Found', 404);
    	}

        if (!eventData.request.query.config) {
            throw new PluginError('Unauthorized', 403);
    	}

        throw new Error('Unknown error');

        // ...

    }
    catch(e) {

        if (e instanceof PluginError) {
            return eventData.response.status(e.code).send(e.message);
        }
        else {
            return eventData.response.status(500).send();
        }

    }

};

```
