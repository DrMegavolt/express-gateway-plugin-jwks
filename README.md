## Plugin structure

This EG plugin is a wrapper around auth0/express-jwt policy.
In addition it supports JWON Web Key Set. Please refer to links in the next sections to find all available properties

### JWT settings

List of properties that are related to JWT settings like secret, issuer etc. can be found here:
https://github.com/auth0/express-jwt

Most important are:
`issuer`
`audience`

```yaml
plugins:
  express-gateway-plugin-jwks:
    issuer: 'http://issuer'
    audience: 'some_string_or_array'
```

To configure JWKS add `jwksRsa` property.
See available settings below:

### JWKS settings

https://github.com/auth0/node-jwks-rsa#caching
Those settings are defined under `jwksRsa` property

### example in system.config yaml

This is Global configuration, it will be used as default for all `jwks` policies usage across all pipelines

```yaml
  express-gateway-plugin-jwks:
    issuer: 'http://issuer'
    audience: 'some_string_or_array'
    jwksRsa:
      cache: true
      jwksUri: https://${JWKS_HOST}/.well-known/jwks.json
```

### example in gateway.config yaml

You can set the same settings in the action inside pipeline:

```yaml
pipelines:
  api-pipeline:
    apiEndpoints:
      - api
    policies:
      - jwks:
        - action:
            issuer: 'http://issuer'
            audience: 'some_string_or_array'
            jwksRsa:
              cache: true
              jwksUri: https://${JWKS_HOST}/.well-known/jwks.json
      - proxy:
        - action:
            serviceEndpoint: api
```

