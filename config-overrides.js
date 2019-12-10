const { 
  override,
  fixBabelImports, 
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');

const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    assets : path.resolve(__dirname,'./src/assets/'), // 资源
    pages : path.resolve(__dirname,'./src/pages/'), // 资源
    utils : path.resolve(__dirname,'./src/utils/'), // 网络
    '@' : path.resolve(__dirname,'./src/components/'), // 组件
  }),

  addDecoratorsLegacy()
);