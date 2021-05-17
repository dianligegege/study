const puppeteer = require('puppeteer');
const BlinkDiff = require('blink-diff');

imgUrl = __dirname + "/blink-diff_img/";


(async () => {
    //创建puppeteer
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1024,
            height: 1975,
        }
    });
    //new 一个新的tab页面
    const page = await browser.newPage();
    //打开url
    await page.goto('http://localhost:8080/');
    //保存截图
    let clip = await page.evaluate(() => {
        let {
            x,
            y,
            width,
            height
        } = document.querySelector('.account-assets-wrap').getBoundingClientRect();
        return {
            x,
            y,
            width,
            height
        };
    });

   await page.screenshot({ path: imgUrl + 'target.png', clip });
  
    //关闭浏览器
    await browser.close();

    const diff = new BlinkDiff({
        imageAPath: imgUrl + 'source.png', // 设计图
        imageBPath: imgUrl + 'target.png',//页面截图
        threshold: 1, // 1% threshold
        imageOutputPath: imgUrl + 'Diff.png'//Diff路径
    });

    diff.run(function (error, result) {
        if (error) {
            throw error;
        } else {
            console.log(result);
            console.log(diff.hasPassed(result.code) ? '通过' : '失败');
            console.log('总像素:' + result.dimension);
            console.log('发现:' + result.differences + ' 差异.');
        }
    });

})();




