## General Information

- The base endpoint is **https://vzl1mc.xamyr.com/v1**
- All endpoints return either a JSON object or array.
- Data is returned in descending order. Newest first, oldest last.

## Error Codes and Messages

If there is an error, the API will return an error with a message of the reason.

```json
{
  "error": "Something went wrong!"
}
```

## Users

With the Users API, you can create, manage and control Users.

### Create an User

`POST /users/register`

Request Body Schema - application/json

| Name       | Type   | Description                                                                                                |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| username\* | string | Can only be alphanumeric with length b/w 2-30 characters                                                   |
| email\*    | string | Must be a valid email                                                                                      |
| password\* | string | Must contain one - special character, number, uppercase & lowercase letter with length b/w 8-40 characters |

<details><summary>Request Sample</summary>

```json
{
  "username": "veroxyle",
  "email": "admin@veroxyle.com",
  "password": "@VeroXyle123"
}
```

</details>

<details><summary>Response 201 Created</summary>

```json
{
  "username": "veroxyle",
  "email": "admin@veroxyle.com"
}
```

</details>
