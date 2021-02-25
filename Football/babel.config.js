module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src',
          screens: './src/screens',
          actions: './src/actions',
          components: './src/components',
          navigation: './src/navigation',
          reducers: './src/reducers',
          themes: './src/themes',
        },
      },
    ],
  ],
};
