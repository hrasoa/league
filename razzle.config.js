const { ReactLoadablePlugin } = require('react-loadable/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const merge = require('lodash/merge');

module.exports = {
  modify: (config, { target, dev }) => {
    const cssLoaderOpts = {
      camelCase: 'dashes',
      localIdentName: dev ? '[name]-[local]_[hash:base64:5]' : '[hash:base64:5]',
      modules: true,
    };

    const sassLoader = {
      loader: 'sass-loader',
      options: {
        data: [
          '@import "./src/settings.config";',
          '@import "~inuitcss/settings/settings.core";',
          '@import "./src/settings.global";',
          '@import "~inuitcss/tools/tools.font-size";',
          '@import "~inuitcss/tools/tools.clearfix";',
        ].join('\n'),
      },
    };

    if (target === 'web') {
      const optimization = dev ? config.optimization : merge(config.optimization, {
        splitChunks: {
          cacheGroups: {
            shared: {
              chunks: 'all',
              minChunks: 2,
              minSize: 1,
              name: 'shared',
              test: /.*\.scss/,
            },
            vendor: {
              chunks: 'all',
              name: 'vendor',
              test: /[\\/]node_modules[\\/].*\.js/,
            },
          },
        },
      });

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
                    ...cssLoaderOpts,
                    importLoaders: 1,
                    minimize: !dev,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    plugins: () => [
                      require('autoprefixer')(),
                      !dev && require('cssnano')(),
                      require('postcss-reporter'),
                    ].filter(Boolean),
                  },
                },
                sassLoader,
              ],
            },
          ],
        },
        optimization,
        plugins: [
          ...config.plugins,
          dev && new StyleLintPlugin(),
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
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
                  options: cssLoaderOpts,
                },
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
