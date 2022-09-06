# Signing Key

## Create Signing Keystore

### Using `keygen`

```
cd YOUR_ANDROID_PROJECT_FOLDER_LOCATION
```

```
keytool -genkey -v -keystore [APPNAME].keystore -alias [APP_ALIAS] -keyalg RSA -keysize 2048 -validity 10000
```

> change [APPNAME] and [APP_ALIAS] according to your needs

### Using Android Studio (_recommended_)

1. Open your android project
2. Go to `Build > Generate Signed Bundle or APK`.
3. Choose either App Bundle or APK, click next.
4. When asked for key store path, click `Create new...` button.
5. Follow along the instructions.

## Manage and using the Signing Key

1. Create `*.properties` file (`secret.properties` or `keystore.properties`) containing the keystore credentials (in `android` folder if you are using ionic or flutter):

```
storePassword=YOUR_KEYSTORE_PASSWORD
keyAlias=YOUR_KEY_ALIAS
keyPassword=YOUR_KEY_PASSWORD
storeFile=YOUR_KEYSTORE_FILE_LOCATION
```

> Variable name (`keystorePassword`, `keyAlias`, `keyPassword`) doesn't have to be the same as above, this is just example.
> Don't forget to exclude this file using `.gitignore`

2. Open the module's `build.gradle`: located in `app/build.gradle` (or `android/app/build.gradle` for ionic or flutter), then load our previously created properties

```
// Initialize a new Properties() object called keystoreProperties.
Properties keystoreProperties = new Properties()

// Create a variable called keystorePropertiesFile, and initialize it to your
// keystore.properties file, in the rootProject folder.
def keystorePropertiesFile = rootProject.file("keystore.properties")

// check if keystore properties file exist
if(keystorePropertiesFile.exists()) {
  // Load your keystore.properties file into the keystoreProperties object.
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

3. Add `signingConfigs` to refer the signing information stored in `keystoreProperties`

```
android {
  signingConfigs {
    flavorName {
      keyAlias keystoreProperties['keyAlias']
      keyPassword keystoreProperties['keyPassword']
      storeFile file(keystoreProperties['storeFile'])
      storePassword keystoreProperties['storePassword']
    }
  }
}
```

5. Open **Build Variants** (usually in the left side of the Android studio window) and ensure the selected flavor is correct.

6. Select `Build > Build bundle(s) / APK(s)`

## References

- https://developer.android.com/studio/publish/app-signing
  - https://developer.android.com/studio/publish/app-signing#opt-out
  - https://developer.android.com/reference/tools/gradle-api/4.2/com/android/build/api/dsl/SigningConfig
- https://coderwall.com/p/zrdsmq/signing-configs-with-gradle-android
