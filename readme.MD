# Dev branch

Currently working on MyApp folder.
### Requirement library:

| Library                  | Version |
|:-------------------------|:--------|
| react                    | 18.1.0 |
| react-native             | 0.70.6 |
|react-native-vector-icons | 9.2.0|
|@rneui/themed | 4.0.0-rc.7 |

Note: @rneui/themed 4.0 is latest version of React Native Elements (latest maintain is 3.4.3)

### Font installed:
At folder `assets/fonts`

Setup font install:

```
npx react-native-asset
```

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

## To-do

- Handle data from PhoneNumberInput component.

## APIs
| Endpoint (Request Method: POST) | Response                                                                                                                        |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| `${apiUrl}/login`               | Error Response: `{"success":false, "message":"..."}`                                                                            |
| `${apiUrl}/login`               | Success Response: **Status Code: 200 Ok.** `{"success": true, "token": "...", "user": {"id": "...", "first_name": "...", ...}}` |
| `${apiUrl}/logout`              | Error Response: `{"success":false, "message": "..."`                                                                            |
| `${apiUrl}/logout`              | Success Response: **Status Code: 200 Ok.** `{"success":true,"message":"User logged out successfully"} `                         |
