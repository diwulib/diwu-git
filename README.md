## diwu 组件集快速上手

> 项目基于 react + vite + semi design

### 开发

1. 在 `components` 目录下实现组件（可参考示例组件 `battery`）

2. 注意事项

- node 端逻辑需使用 `diwuFn` 包装，命中 `diwuFn` 使用的文件将只保留所有 `diwuFn`，所以 node 逻辑与组件不能写在一个文件中

3. `package.scripts.preview` 进行组件预览

### 构建

1. `package.scripts.build` 进行组件构建
2. 注意事项

- 构建默认入口为 `src/components/index`, 如有需要可以 `vite.config.ts` 进行修改
- 构建入口导出的内容只应该有组件

3. 构建产物列表

- dist
  - scripts (所有的 `diwuFn`)
  - components.json (`src/components/index` 导出组件的描述)
  - lib.es.js (组件集的 es 产物)
  - lib.umd.js (组件集的 umd 产物)

### 发布

正常 npm 包发布流程，将组件集托管至 npm

### 安装

在 diwu designer 的组件集管理中进行搜索 🔍 安装使用
