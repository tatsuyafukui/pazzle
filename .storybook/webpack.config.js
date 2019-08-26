// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
    ],
  },
};

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         loaders: [
//           require.resolve('style-loader'),
//           {
//             loader: require.resolve('css-loader'),
//             options: {
//               importLoaders: 1,
//               modules: true,
//               localIdentName: '[name]__[local]___[hash:base64:5]',
//             },
//           },
//           require.resolve('sass-loader')
//         ],
//       },
//     ],
//   },
// }

//
// module.exports = ({ config, mode }) => {
//   config.module.rules.push({
//     test: /\.css$/,
//     use: [
//       {
//         loader: "style-loader",
//         options: { sourceMap: true }
//       },
//       {
//         loader: "css-loader",
//         options: {
//           importLoaders: 1,
//           modules: true,
//           localIdentName: "[name]__[local]__[hash:base64:5]"
//         }
//       }
//     ],
//   });
//
//
//
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     exclude: /node_modules/,
//     use:[
//       {
//         loader: require.resolve("babel-loader"),
//         options: {
//           presets: [["react-app", { flow: false, typescript: true }]]
//         }
//       }
//     ],
//     include: path.resolve(__dirname, "../")
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };
