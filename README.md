# express-gateway-plugin-jwks
express-gateway-plugin-jwks

### JWT settings
List of properties that are related to JWT settings like secret, issuer etc. can be found here:
https://github.com/auth0/express-jwt

### JWKS settings 
https://github.com/auth0/node-jwks-rsa#caching
Those settings are defined under `jwksRsa` property


### example
```yaml
  express-gateway-plugin-jwks:
    issuer: 'http://issuer'
    jwksRsa:
      cache: true
      jwksUri: https://${JWKS_HOST}/.well-known/jwks.json
```
