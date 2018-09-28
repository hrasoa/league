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

    const rules = config.module.rules.map((rule) => {
      if (rule.loader === require.resolve('url-loader')) {
        const { test, ...rest } = rule;
        return {
          loaders: [
            {
              loader: 'lqip-loader',
              options: {
                base64: true,
                palette: false,
              },
            },
            { ...rest },
          ],
          test,
        };
      }
      return rule;
    });

    if (target === 'web') {
      return {
        ...config,
        devtool: dev ? config.devtool : false,
        module: {
          rules: [
            ...rules,
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
        optimization: dev ? config.optimization : merge(config.optimization, {
          splitChunks: {
            cacheGroups: {
              commons: {
                chunks: 'async',
                name: true,
                test: /[\\/]node_modules[\\/].*\.js$/,
              },
              vendor: {
                chunks: 'initial',
                name: 'vendor',
                test: /[\\/]node_modules[\\/].*\.js$/,
              },
            },
          },
        }),
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
            ...rules,
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
