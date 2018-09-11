const { ReactLoadablePlugin } = require('react-loadable/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  modify: (config, { target, dev }) => {
    if (target === 'web') {
      return {
        ...config,
        module: {
          rules: [
            ...config.module.rules,
            {
              test: /\.scss$/,
              use: [
                dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
              ],
            },
          ],
        },
        plugins: [
          ...config.plugins,
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
          }),
          !dev && new MiniCssExtractPlugin({
            chunkFilename: '[id].[hash].css',
            filename: '[name].[hash].css',
          }),
        ].filter(Boolean),
      };
    }

    if (target === 'node') {
      return {
        ...config,
        module: {
          rules: [
            ...config.module.rules,
            {
              test: /\.scss$/,
              use: [
                'css-loader/locals',
                'sass-loader',
              ],
            },
          ],
        },
      };
    }

    return config;
  },
};
