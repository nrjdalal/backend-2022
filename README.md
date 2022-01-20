# Format for response

> If there is an error

```json
{
  "status": false,
  "error": "error"
}
```

> If there is no error

```json
{
  "status": true,
  "data": "data"
}
```

# User

## Register new user

### `POST /user/register`

```json
{
  "username": "alphanum min(2) max(30) required",
  "email": "email required",
  "password": "min(8) max(40) required"
}
```

<!-- Resources - https://uptimerobot.com/ -->
