const plugin = exports.plugin = {
  '$id': 'https://express-gateway.io/schemas/plugins/jwks.json',
  type: 'object',
  properties: {
    audience: {
      type: 'string',
      description: 'Set to verify audience in JWT token',
    },
    issuer: {
      type: 'string',
      description: 'Set to verify issuer in JWT token',
    },
    algorithms: {
      default: ['RS256']
    }
  },
  required: ['jwksRsa']
};

exports.policy = {
  '$id': 'https://express-gateway.io/schemas/policies/jwks.json',
  type: 'object',
  properties: Object.assign({}, plugin.properties)
};