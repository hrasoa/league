const { ReactLoadablePlugin } = require('react-loadable/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                    plugins: () => [
                      require('autoprefixer')(),
                      !dev && require('cssnano')({
                        preset: 'default',
                      }),
                    ].filter(Boolean),
                  },
                },
                'sass-loader',
              ],
            },
          ],
        },
        plugins: [
          ...config.plugins,
          new StyleLintPlugin(),
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
          }),
        ],
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
