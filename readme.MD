# Dev branch

| Library                  | Version |
|:-------------------------|:--------|
| react                    | 18.1.0 |
| react-native             | 0.70.6 |
| redux                    | 4.2.0   |
| react-redux              | 8.0.5   |
| @react-navigation/native | 6.1.2   |
| @react-navigation/stack  | 6.3.11   |
| redux-thunk              | 2.3.0   |
|react-native-vector-icons | 9.2.0|

## Install
```
yarn install
```

## How to run
```
yarn run ios
```

```
yarn run android
```
## APIs
| Endpoint (Request Method: POST) | Response                                                                                                                        |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| `${apiUrl}/login`               | Error Response: `{"success":false, "message":"..."}`                                                                            |
| `${apiUrl}/login`               | Success Response: **Status Code: 200 Ok.** `{"success": true, "token": "...", "user": {"id": "...", "first_name": "...", ...}}` |
| `${apiUrl}/logout`              | Error Response: `{"success":false, "message": "..."`                                                                            |
| `${apiUrl}/logout`              | Success Response: **Status Code: 200 Ok.** `{"success":true,"message":"User logged out successfully"} `                         |
