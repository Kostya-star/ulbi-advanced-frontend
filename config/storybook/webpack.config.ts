import { Configuration, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  // make storybook handle svg
  // Modify Storybook's file-loader rule to exclude inline SVGs
  const fileLoaderRule = config.module?.rules?.find(rule => rule && rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/i

  // Add a new rule for your inline SVGs using your desired loader (e.g., '@svgr/webpack')
  config.module?.rules?.push({
     test: /\.svg$/i,
     loader: '@svgr/webpack'
  });

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
