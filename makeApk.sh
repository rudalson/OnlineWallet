rm ./android/app/src/main/assets/index.android.bundle
rm -rf ./android/app/build/outputs/apk/release

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle

cd android

./gradlew assembleRelease

mv ./app/build/outputs/apk/release/app-release.apk ../OnlineWallet.apk