module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          actions: './src/actions/actions',
          screens: './src/screens',
        },
      },
    ],
  ],
};
