#tsx-examples

这个项目包含了使用typescript开发react应用的例子，两个目录包含了两种不同类型的项目配置。

##目录`TsxBrowserify`
module bundler使用browserify， task runner使用gulp
使用方式：
1，安装依赖
```sh
yarn install
```
2，生成bundle
```sh
gulp
```
2，生成minified bundle
```sh
gulp min
```

##目录`TsxWebpack`
module bundler使用webpack， task runner使用npm-run-all

## License
MIT.