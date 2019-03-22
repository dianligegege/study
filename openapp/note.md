# 调用

1. `Android` 系统上，`Chrome for Android` 无法通过 `iframe.src` 来调用`schema`，而通过`a.href` 的方式可以成功调用，而针对`chrome`内核的浏览器如猎豹，360，小米浏览器， `opera`对于`iframe.src`和`a.href`的方式都能支持，所以对`chrome`及先关的内核的浏览器采用`a.href`的方式来调用`scheme`；对于其他浏览器，如`UC`，`firefox`,`mobile QQ`，`sogou`浏览器则采用`iframe.src`的方式调用`schema`。对于微信浏览器，则直接跳转到下载页。其他未经测试的浏览器，默认采用`iframe.src`来调用`schema`。

