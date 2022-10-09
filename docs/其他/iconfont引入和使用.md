---
title: iconfont引入和使用
date: 2022-10-09
isTimeLine: false
isShowComment: false
---

## Web 端使用
下载链接：[阿里巴巴矢量图库](https://www.iconfont.cn/)

参考文档：官方的帮助文档（官方网站->帮助->代码应用）

---

注：将选好的图片添加至项目后在`官网->我的项目`，即可看见Unicode、Font class、Symbol等。
### icon 单个使用
就相当于图片，直接下载即可，提供 png、ai、svg 格式
### Unicode方法使用
#### 特点
1. 兼容性最好，支持ie6+，及所有现代浏览器。
2. 支持按字体的方式去动态调整图标大小，颜色等等。
3. 但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。
#### 使用步骤
1. 方式一：
   1. 复制 font-face 至 css 文件中
      ```css
      @font-face {font-family: 'iconfont';
        src: url('iconfont.eot');
        src: url('iconfont.eot?#iefix') format('embedded-opentype'),
        url('iconfont.woff') format('woff'),
        url('iconfont.ttf') format('truetype'),
        url('iconfont.svg#iconfont') format('svg');
      ```
   2. 定义使用 iconfont 的样式
      ```css
      .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
      ```
   3. 标签固定类名，然后内容使用对应字体图标的Unicode码
2. 方式二：
   1. 可以手动直接导入 `iconfont.css` 即可，文件已经包含有关代码。
   2. 标签固定类名，然后内容使用对应字体图标的Unicode码
#### 示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入字体css文件 -->
    <link rel="stylesheet" href="./font/iconfont.css">
</head>
<body>
    <!-- 标签固定类名，然后内容使用对应字体图标的Unicode码 -->
    <p class="iconfont">&#xe601;</p>
    <p class="iconfont">&#xe602;</p>
    <p class="iconfont">&#xe603;</p>
    <p class="iconfont">&#xe604;</p>
</body>
</html>
```
### 类名方法使用
#### 特点
1. 兼容性良好，支持ie8+，及所有现代浏览器。
2. 相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。
3. 因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。
4. 不过因为本质上还是使用的字体，所以多色图标还是不支持的。
#### 使用步骤
1. 导入 `iconfont.css` 。
2. 在字体图标固定类名后面，加上字体图标的类名
#### 示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入字体css文件 -->
    <link rel="stylesheet" href="./font/iconfont.css">
</head>
<body>
    <!-- 标签固定类名，后面加上字体图标的类名 -->
    <p class="iconfont icon-banbenxinxi"></p>
    <p class="iconfont icon-jianchagengxin"></p>
    <p class="iconfont icon-dengludengru"></p>
    <p class="iconfont icon-shangchuanwenjian"></p>
</body>
</html>
```
### 伪元素方法使用
#### 特点
1. 兼容性良好，支持ie8+，及所有现代浏览器。。
2. 因为使用伪元素来代替Unicode，所以当要替换图标时，只需要修改css文件里面的内容，覆盖的范围会更广。
3. 不过因为本质上还是使用的字体，所以多色图标还是不支持的。
#### 使用步骤
1. 导入 `iconfont.css` 。
2. 给标签设置字体图标固定类名，然后通过css设置该标签的伪元素内容来实现字体图标效果
#### 示例
iconfont.css文件
```css
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url('iconfont.ttf?t=1665041400655') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-denglushishezhifuwuqidizhi:before {
  content: "\e601";
}
```
html文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入字体图标css文件 -->
    <link rel="stylesheet" href="./font/iconfont.css">
    <style>
        /* 设置i标签的伪类 */
        p::after{
            content: "\e601";
        }
    </style>
</head>
<body>
    <p class="iconfont"></p>
</html>
```
伪元素方法的参考：[参考链接](https://blog.csdn.net/m0_46324704/article/details/125836355)
### symbol 方法使用
#### 特点
1. 支持多色图标了，不再受单色限制。
2. 通过一些技巧，支持像字体那样，通过font-size,color来调整样式。
3. 兼容性较差，支持 ie9+,及现代浏览器。
4. 浏览器渲染svg的性能一般，还不如png。
#### 使用步骤
1. 导入symbol代码。可以使用官网提供的远程链接，也可下载至本地引入。
   ```lang
   <!-- 远程链接，在官网->我的项目->查看在线链接 -->
   //at.alicdn.com/t/font_8d5l8fzk5b87iudi.js
   ```
2. 加入通用css代码（引入一次就行）。
   ```html
   <style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
   </style>
   ```
3. 挑选相应图标并获取类名，应用于页面。
   ```html
   <svg class="icon" aria-hidden="true">
     <use xlink:href="#icon-xxx"></use>
   </svg>
   ```
#### 示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="//at.alicdn.com/t/c/font_3688416_ipze15st61.js"></script>
    <style type="text/css">
      .icon {
         width: 1em; height: 1em;
         vertical-align: -0.15em;
         fill: currentColor;
         overflow: hidden;
      }
  </style>
</head>
<body>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-banbenxinxi"></use>
  </svg>
</html>
```