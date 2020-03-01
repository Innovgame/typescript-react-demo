# 遇到的错误总结

## Cannot find module 'csstype'

> 详细可以参考这个[github DefinitelyTyped issue: Cannot find module 'csstype' #24788](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24788)

下面提供摘取上面之中最简单两种 fixed 方式

1.增加`"moduleResolution": "Node"`

> If compilerOptions.module === "AMD" or "System" or "ES6" the default for compilerOptions.moduleResolution would be "Classic", otherwise it's "Node". So if you use one of these module strategies, but have all your packages under node_modules. The compilerOptions.moduleResolution must be set to "Node".

For Classic:

> For non-relative module imports, however, the compiler walks up the directory tree starting with the directory containing the importing file, trying to locate a matching definition file.

For Node:

> Node will look for your modules in special folders named node_modules. A node_modules folder can be on the same level as the current file, or higher up in the directory chain. Node will walk up the directory chain, looking through each node_modules until it finds the module you tried to load.

```diff
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "baseUrl": ".",
        "noImplicitAny": true,
        "module": "ES6",
        "target": "es5",
        "jsx": "react",
        "lib": [
            "DOM",
            "ES2015"
        ],
+       "moduleResolution": "Node"
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules/**/*"
    ]
}
```

2.设置 module 方式 `"module": "CommonJS"`

```diff
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "baseUrl": ".",
        "noImplicitAny": true,
-       "module": "ES6",
+       "module": "CommonJS",
        "target": "es5",
        "jsx": "react",
        "lib": [
            "DOM",
            "ES2015"
        ],
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules/**/*"
    ]
}
```
