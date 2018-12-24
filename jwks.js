const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');

module.exports = pluginSettings => {
  return policyParams => {
    const settings = Object.assign({}, pluginSettings, policyParams);
    settings.secret = jwksRsa.expressJwtSecret(settings.jwksRsa);
    return (req,res,next) => {
      jwt(settings)(req,res,(err)=>{
        if (err){
          console.log(err);
          res.statusCode = err.status || 401;
          console.log('ending request')
          res.end();
          return;
        }
        next()
      })
    }
  };
};