const { ReactLoadablePlugin } = require('react-loadable/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  modify: (config, { target, dev }) => {
    const sassLoader = {
      loader: 'sass-loader',
      options: {
        data: [
          'settings/settings.core',
          'tools/tools.font-size',
        ].map(scss => `@import "~inuitcss/${scss}";`).join('\n'),
      },
    };

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
                    importLoaders: 1,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    plugins: () => [
                      require('autoprefixer')(),
                      !dev && require('cssnano')({
                        preset: 'default',
                      }),
                    ].filter(Boolean),
                  },
                },
                sassLoader,
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
                'css-loader/locals',
                sassLoader,
              ],
            },
          ],
        },
      };
    }

    return config;
  },
};
