// run npx react-native-asset to update the font
module.exports = {
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ['./assets/fonts/', './assets/images/'], // set up fonts for project, run react-native link to set up font automatically for iOS and Android
    dependencies: {
        'react-native-vector-icons': {
          platforms: {
            ios: null,
          },
        },
    },
};