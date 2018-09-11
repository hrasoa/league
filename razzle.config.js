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
                {
                  loader: 'css-loader',
                  options: {
                    camelCase: 'dashes',
                    importLoaders: 1,
                    localIdentName: dev ? '[name]-[local]' : '[hash:base64:5]',
                    modules: true,
                  },
                },
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
                {
                  loader: 'css-loader/locals',
                  options: {
                    camelCase: 'dashes',
                    localIdentName: dev ? '[name]-[local]' : '[hash:base64:5]',
                    modules: true,
                  },
                },
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
