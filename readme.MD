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

With react-navigation 5.0, we need to install @react-navigation/native, @react-navigation/stack, @react-navigation/bottom-tabs, @react-navigation/drawer

### Font installed:
At assets:

```
npx react-native-asset
```
if you have error with `npx react-native-asset`, try to run `sudo npm install -g react-native-asset`

## Install
```
yarn install
```
With IOS (Cocoapods)
```
cd ios && pod install
```

if you have error with pod install, try to run `sudo gem install cocoapods`

if you have some problem with ruby, use `rbenv` to install ruby version 2.7.6.


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
