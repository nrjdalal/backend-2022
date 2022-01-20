## Format for response -

1. If there is an error

```json
{
  "status": false,
  "error": "error"
}
```

2. If there is no error

```json
{
  "status": true,
  "data": "data"
}
```

## User routes -

1. Register new user

```json
// POST /user/register

{
  "username": "alphanum min(2) max(30) required",
  "email": "email required",
  "password": "min(8) max(40) required"
}
```
