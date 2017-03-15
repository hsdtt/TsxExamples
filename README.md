# tsx-examples

这个项目包含了使用typescript开发react应用的例子，两个目录分别包含了不同的项目配置。

## 目录TsxBrowserify
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
3，生成minified bundle
```sh
gulp min
```

## 目录TsxWebpack
module bundler使用webpack， task runner使用npm-run-all

使用方式：
1，安装依赖
```sh
yarn install
```
2，生成bundle
```sh
npm run bd
```
3，生成minified bundle
```sh
npm run br
```

## 推荐
- [JavaScript代码生成工具](http://www.helpsd.net/lib/cg/js).
- [TypeScript快速参考手册](http://www.helpsd.net/lib/typescript/qref/index).

## License
MIT.
