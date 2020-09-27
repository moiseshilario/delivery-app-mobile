# Delivery App Mobile

Food delivery app built with React Native

<img src="https://i.imgur.com/KG1NYlK.jpg" alt="login screen" width="230" height="400" /> <img src="https://i.imgur.com/6inZic1.png" alt="products screen" width="230" height="400" /> <img src="https://i.imgur.com/DftO5K4.png" alt="flavors screen" width="230" height="400" />

<img src="https://i.imgur.com/fEzavQR.png" alt="size screen" width="230" height="400" /> <img src="https://i.imgur.com/2qQP8nk.png" alt="cart screen" width="230" height="400" /> <img src="https://i.imgur.com/odLQA3q.png" alt="order screen" width="230" height="400" />

## Connected Projects
- Web: https://github.com/moiseshilario/delivery-app-web
- Back: https://github.com/moiseshilario/delivery-app-back

## Setup

```bash
yarn
```

or

```bash
npm i
```

### Linking

You need to link some libs to make it work properly

```
react-native link react-native-gesture-handler
react-native link react-native-vector-icons
react-native link @react-native-community/async-storage
react-native link react-native-linear-gradient
```

## Running

* iOS:
  * Yarn: `yarn ios`
  * npm: `npm run ios`

* Android:
  * Yarn: `yarn android`
  * npm: `npm run android`

* Later builds:
  * Yarn: `yarn start`
  * npm: `npm run start`

---

## Build: Android

In order to build with only command line (no special IDEs), you need to:

- Download
  - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
  - https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
  - https://dl.google.com/android/repository/platform-tools_r26.0.0-linux.zip
- Create a folder called /opt/java/java8 and unzip the following file:
  - Jdk-8u171-linux-x64.tar.gz
- Create a folder called /opt/android-sdk-linux/platform-tools/ and unzip the following files:
  - platform-tools_r26.0.0-linux.zip
- Create a folder called /opt/android-sdk-linux/tools/ and unzip the following files:
  - sdk-tools-linux-4333796.zip
- Export these variables:

```
export JAVA_HOME=/opt/java/java8
export PATH=$PATH:$JAVA_HOME/bin
export ANDROID_HOME=/opt/android-sdk-linux
export PATH=${PATH}:$ANDROID_HOME/tools
export PATH=${PATH}:$ANDROID_HOME/platform-tools
```

- Go to your /opt/android-sdk-linux/tools/bin and execute:
`./sdkmanager --licenses`
  - This will ask you to accept or reject licenses. You must accept all licenses, pressing key "y" and "enter"

- Finally, just execute:

```
cd android && ./gradlew app:assembleRelease
```

These steps are devops friendly because you can build , without a human. More details [here](https://jrichardsz.github.io/android/how-to-build-an-android-apk-using-only-linux-for-devops-automations)

---

## Stack

- redux
- redux-saga
- duck pattern
- react-navigation
- axios
- styled-components
- react-native-gesture-handler
- reactotron
- editorconfig
- eslint
- babel-plugin-root-import
