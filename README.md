# AdvenShareColab
Using react-native 0.55.4 so that windows works

After cloning enter the directory and run
>yarn install

If using an emulator, navigate into the android directory, and create a file
called 'local.properties'. Add the location of your sdk in here like follows:
>sdk.dir=</path/to/user/directory>

Run the emulator through terminal or through android studio, and then from this directory
run
>react-native run-android

This will startup the Bundler server in a new terminal. If you ever close it, start it again with
>react-native start
