# gas-flexible

> 使用amfe-flexible改造的版本
> 可以根据传入的比例，自动根据宽高变化而改变font-size的值

## Usage

### Install

`npm i -S gas-flexible`

#### 引入
```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <script src="node_modules/gas-flexible/index.min.js"></script>

  <script>
    window.initFlexible(1,16/9)
  </script>
```

#### 参数
- param1: 布尔值，必填，0为默认模式，第二个参数无效；1为宽高模式，第二个参数选填
- param2：数值，选填，第一个参数为1则可填比例进行比例适配

## 特点
1. 可传入宽高比例适配：如16/9，默认16/9（1920*1080）
2. 代码增加了font-size随宽度和高度变化而变化
3. 兼容IE11+，和各大高版本浏览器

## 版本
1. 0.1.0
- 首次提交

2. 0.1.1
- fix：更改传值