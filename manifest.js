const jwks = require('./jwks');
const schemas = require('./schemas');

module.exports = {
  version: '1.0.0',
  policies: ['jwks'],
  init: pluginContext => {
    pluginContext.registerPolicy({
      name: 'jwks',
      policy: jwks(pluginContext.settings),
      schema: schemas.policy
    });
  },
  schema: schemas.plugin
};

