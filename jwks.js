const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');
const debug = require('debug')('express-gateway-plugin-jwks:jwks-policy');
module.exports = pluginSettings => {
  return policyParams => {
    const settings = Object.assign({}, pluginSettings, policyParams);
    settings.secret = jwksRsa.expressJwtSecret(settings.jwksRsa);
    return (req,res,next) => {
      jwt(settings)(req,res,(err)=>{
        if (err){
          debug(err);
          res.statusCode = err.status || 401;
          res.end();
          return;
        }
        next()
      })
    }
  };
};