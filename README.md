# Webpack+Typescript+React 从 0 到 1

> 开始前: 开发 react 项目，`create-react-app`已经非常好用了，为啥要用`wepack+typescript` 纯属`个人爱好～`, 比较青睐`Typescript` :) 。

**react 项目架构图**

- Redux 作为应用的数据存储作用，可以在应用中共享，也可以是持久化的数据
- React-Router 作为前端应用的路由，负责不同页面之间的跳转，区别于后端实现的路由
- React-Component 用于呈现网页的不同页面，是前端模块化的体现

![React架构图](md/img/截屏2020-02-29下午5.42.06.png)

## 从零开始

> 废话不多说了，接下来从零开始一步步实现一个`webpack + ts + react`项目, 其中遇到的问题和步骤，我都会记载在 markdown 文件中。

### 初始化项目

项目的前期准备工作，其中会涉及到 git，npm 的相关命令，会注释出来什么意思，就不一一解释了

- 初始化一个 git 仓库

```sh
# git 初始化
$ git init
# 创建 README.md
$ touch README.md
# 创建gitignore文件
$ touch .gitignore
```

- 初始化 npm

```sh
# init
$ npm init
```

- 创建目录结构

```
# 项目目录结构
project/
├─ dist/
└─ src/
   ├─ components/
   └─index.js
```

### 安装依赖

- 全局安装 `webpack`

```sh
# npm install
$ npm install -g webpack
```

- 添加`React`和`React-DOM`以及它们的声明文件到`package.json`文件里做为依赖

> 使用@types/前缀表示我们额外要获取 React 和 React-DOM 的声明文件。 通常当你导入像"react"这样的路径，它会查看 react 包； 然而，并不是所有的包都包含了声明文件，所以 TypeScript 还会查看@types/react 包。 你会发现我们以后将不必在意这些。

```sh
# --save 会写入到package.json中的 dependencies
npm install --save react react-dom @types/react @types/react-dom
```

- 添加开发时依赖 awesome-typescript-loader 和 source-map-loader

> awesome-typescript-loader 可以让 Webpack 使用 TypeScript 的标准配置文件 tsconfig.json 编译 TypeScript 代码。 source-map-loader 使用 TypeScript 输出的 sourcemap 文件来告诉 webpack 何时生成自己的 sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试 TypeScript 源码一样。
> 注意我们安装 TypeScript 为一个开发依赖。 我们还可以使用 npm link typescript 来链接 TypeScript 到一个全局拷贝，但这不是常见用法。

```sh
# --save-dev 会写入到package.json中的 devDependencies
$ npm install --save-dev typescript awesome-typescript-loader source-map-loader
```

### 添加 Typescript 配置文件

> 我们想将 TypeScript 文件整合到一起 - 这包括我们写的源码和必要的声明文件。

```json
// tsconfig
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "ES6",
    "target": "es5",
    "jsx": "react",
    "lib": ["DOM", "ES2015"],
    "moduleResolution": "Node"
  },
  "include": ["src/**/*"]
}
```

### 简单实践代码

1.在 components 文件夹下创建 hello.tsx 文件，类容如下:

```tsx
import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (hello: HelloProps) => {
  return (
    <h1>
      Hello from {hello.compiler} and {hello.framework}!
    </h1>
  );
};
```

2.在 src 文件夹下添加 index.tsx 文件，如下所示:

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

ReactDOM.render(
  <Hello compiler="Typescript" framework="React"></Hello>,
  document.getElementById("example")
);
```

3.在项目文件夹中添加一个 index.html 文件，内容如下:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typescript React</title>
  </head>

  <body>
    <!-- id和上面index.tsx中对应 -->
    <div id="example"></div>

    <!-- Dependencies 暂时从node_modules中引入，后续可通过cdn等别的方式-->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

    <!-- Main 现在不存在，后续编译出来的js文件，先写个位置-->
    <script src="./dist/bundle.js"></script>
  </body>
</html>
```
