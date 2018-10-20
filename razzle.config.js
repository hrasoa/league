const { ReactLoadablePlugin } = require('react-loadable/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const merge = require('lodash/merge');

module.exports = {
  modify: (config, { target, dev }) => {
    const cssLoaderOpts = {
      camelCase: true,
      importLoaders: 1,
      localIdentName: dev ? '[name]--[local]_[hash:base64:5]' : '[hash:base64:5]',
      modules: true,
      sourceMap: dev,
    };

    const sassLoader = {
      loader: require.resolve('sass-loader'),
      options: {
        data: [
          '@import "./src/settings.config";',
          '@import "~inuitcss/settings/settings.core";',
          '@import "./src/settings.global";',
          '@import "~inuitcss/tools/tools.font-size";',
          '@import "~inuitcss/tools/tools.clearfix";',
          '@import "~sass-mq";',
          '@import "/src/utilities.mq";',
        ].join('\n'),
        sourceMap: dev,
      },
    };

    if (target === 'web') {
      return {
        ...config,
        devtool: dev ? config.devtool : false,
        module: {
          rules: [
            ...config.module.rules,
            {
              test: /\.scss$/,
              use: [
                dev
                  ? {
                    loader: require.resolve('style-loader'),
                    options: {
                      sourceMap: dev,
                    },
                  }
                  : MiniCssExtractPlugin.loader,
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    ...cssLoaderOpts,
                    importLoaders: 2,
                  },
                },
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    ident: 'postscss',
                    plugins: () => [
                      require('autoprefixer')(),
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
          !dev && new OptimizeCssnanoPlugin({
            sourceMap: false,
          }),
          dev && new StyleLintPlugin(),
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
          }),
          !dev && new CompressionPlugin(),
          !dev && new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
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
                  loader: require.resolve('css-loader/locals'),
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
