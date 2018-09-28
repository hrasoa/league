const { ReactLoadablePlugin } = require('react-loadable/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('lodash/merge');

module.exports = {
  modify: (config, { target, dev }) => {
    const cssLoaderOpts = {
      camelCase: true,
      importLoaders: 1,
      localIdentName: dev ? '[local]_[hash:base64:5]' : '[hash:base64:5]',
      modules: true,
    };

    const fontLoader = {
      loader: 'url-loader',
      options: {
        limit: Infinity,
      },
      test: /\.(woff|woff2|eot|ttf)$/,
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
            commons: {
              chunks: 'async',
              name: true,
              test: /[\\/]node_modules[\\/].*\.js$/,
            },
            'font.lora': {
              chunks: 'initial',
              name: 'font.lora',
              test: /typeface-lora/,
            },
            'font.open-sans': {
              chunks: 'initial',
              name: 'font.open-sans',
              test: /typeface-open-sans/,
            },
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              test: /[\\/]node_modules[\\/].*\.js$/,
            },
          },
        },
      });

      const fonts = ['typeface-lora', 'typeface-open-sans'];

      return {
        ...config,
        devtool: false,
        entry: dev ? {
          client: [...config.entry.client, ...fonts],
        } : {
          ...config.entry,
          fonts,
        },
        module: {
          rules: [
            fontLoader,
            ...(config.module.rules.map((rule) => {
              if (rule.loader === require.resolve('file-loader')) {
                return {
                  ...rule,
                  exclude: [
                    ...rule.exclude,
                    /\.woff$/,
                    /\.woff2$/,
                  ],
                };
              }
              return rule;
            })),
            {
              test: /\.scss$/,
              use: [
                dev ? {
                  loader: 'style-loader',
                } : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    ...cssLoaderOpts,
                    importLoaders: 2,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postscss',
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
          !dev && new BundleAnalyzerPlugin({
            analyzerMode: 'static',
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
