/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6910b80db5e42f53d9de071bd295d1a2"
  },
  {
    "url": "assets/css/0.styles.2ba92a80.css",
    "revision": "7d905ddaafaa13e63ea9e9e5980dea7b"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.6669bf9d.js",
    "revision": "e9a787396fd88b2fc20d827636f88383"
  },
  {
    "url": "assets/js/10.9d2e2122.js",
    "revision": "0bda741468d0a36f35dff284fecb8f89"
  },
  {
    "url": "assets/js/11.5040ddc9.js",
    "revision": "34c1c79aa419d980d85f8bada0e04850"
  },
  {
    "url": "assets/js/12.8d2d3b1f.js",
    "revision": "4c6f1434e5f9a1df53ef74f8bc59b362"
  },
  {
    "url": "assets/js/13.cbe65bed.js",
    "revision": "550212a5fc3c801f4e00a5954b2720dc"
  },
  {
    "url": "assets/js/14.aea39a2f.js",
    "revision": "690ddaa55e73dbac46782a9df80d2008"
  },
  {
    "url": "assets/js/15.9423d16b.js",
    "revision": "f7043e255e71f1df1077f690e6bb69cf"
  },
  {
    "url": "assets/js/16.310c92aa.js",
    "revision": "4f83cc916d60d7780abd3ba889dd5536"
  },
  {
    "url": "assets/js/17.81cb3145.js",
    "revision": "9cda1d7a144ea0f24c20ec822a681522"
  },
  {
    "url": "assets/js/18.3ab562c3.js",
    "revision": "edc92dbfac9adc7a1b4aafec710ac4d6"
  },
  {
    "url": "assets/js/19.d5219207.js",
    "revision": "7fc9b2d26a5135da7e167f8c3ccb794e"
  },
  {
    "url": "assets/js/20.521b6ab4.js",
    "revision": "f4c6e2798fa323b60d1b8d4a0b356d09"
  },
  {
    "url": "assets/js/21.fc369c3d.js",
    "revision": "9245cee7213420289104246349f71832"
  },
  {
    "url": "assets/js/22.b7f7270d.js",
    "revision": "a221ea0a3aa5cd93c98884628de38059"
  },
  {
    "url": "assets/js/23.c8ccedbc.js",
    "revision": "ccf5b8570eb4d3bc197a15871cb35d23"
  },
  {
    "url": "assets/js/24.db335660.js",
    "revision": "6c88fec16b845077fedc7edf832577e3"
  },
  {
    "url": "assets/js/25.e58beb16.js",
    "revision": "0aac3882ca46fdf1743581926283ff67"
  },
  {
    "url": "assets/js/26.d4b58d90.js",
    "revision": "aabdeb0804f5793c69fccb7d40ea7565"
  },
  {
    "url": "assets/js/27.6d9a322e.js",
    "revision": "1ea3e63b41c80b0e6e94d9b384eecf8a"
  },
  {
    "url": "assets/js/28.6dab2ec8.js",
    "revision": "fa66c919634989fae0b6a015a0ac4a88"
  },
  {
    "url": "assets/js/29.cd802e4c.js",
    "revision": "3e2717cdaf380c2a61fd7dd44908b65d"
  },
  {
    "url": "assets/js/30.2a4d9e9c.js",
    "revision": "47710d4649d6cdf8d282549cd7bab840"
  },
  {
    "url": "assets/js/31.65cde218.js",
    "revision": "a8c6574b1f06256b89f0a34c6a8e4911"
  },
  {
    "url": "assets/js/32.ca1ad080.js",
    "revision": "611c2ebb37da586cf76956d4d99fd7dc"
  },
  {
    "url": "assets/js/33.623d7fb3.js",
    "revision": "7999aea3a1709462b296171bc381cf40"
  },
  {
    "url": "assets/js/34.e7ff58d4.js",
    "revision": "af31e71b95cb9577d87afe42fc15a300"
  },
  {
    "url": "assets/js/35.b305bc9e.js",
    "revision": "f538e01413f29846ff9d46c3431e72d5"
  },
  {
    "url": "assets/js/36.3788f9b1.js",
    "revision": "c07803dd260dc645ee45c6d34bbf429a"
  },
  {
    "url": "assets/js/37.25782b06.js",
    "revision": "fece5392074fc0845b419be188e0fc1d"
  },
  {
    "url": "assets/js/38.f234ec1f.js",
    "revision": "58bd7971e1d9af6ddbb17fdfb08d25a1"
  },
  {
    "url": "assets/js/39.1926b347.js",
    "revision": "ec4f17a05b449ae06ec6fe584e46b573"
  },
  {
    "url": "assets/js/4.67eb37cc.js",
    "revision": "66bb09d723a5e8ac3b4fdbd9a228680b"
  },
  {
    "url": "assets/js/40.806f806c.js",
    "revision": "99d69aed18ec0d8698ff20b6d24c6ae2"
  },
  {
    "url": "assets/js/41.5b0c7852.js",
    "revision": "dbc209e3de03808646479739982bf406"
  },
  {
    "url": "assets/js/42.3ef7e568.js",
    "revision": "3d743209307e0d28580c335b53bd9541"
  },
  {
    "url": "assets/js/43.af9650e3.js",
    "revision": "4c8abc65c8144d5475b832a24d4546dd"
  },
  {
    "url": "assets/js/5.9eb20290.js",
    "revision": "3a4b6476071aaa0eb9972a2410b8961a"
  },
  {
    "url": "assets/js/6.ec2f324c.js",
    "revision": "a40033eee5ba541f082bf5d63b957e01"
  },
  {
    "url": "assets/js/7.a9a7d928.js",
    "revision": "ac21b68519809ce9cdaee8cce234dfaa"
  },
  {
    "url": "assets/js/8.cc0426ed.js",
    "revision": "28f60823a472e677245e398fa24a6ebe"
  },
  {
    "url": "assets/js/9.83ceb01a.js",
    "revision": "c3cdeea3229626b7a1a0c133c1d28b3e"
  },
  {
    "url": "assets/js/app.0188daa3.js",
    "revision": "2e762ec2fd858895ff29c09b308fc154"
  },
  {
    "url": "assets/js/vendors~flowchart.30201ef8.js",
    "revision": "bb6106c1b890f2b8c9c287159d8038d3"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "c3a4bcbce53356719c67b8d67ba283bd"
  },
  {
    "url": "categories/index.html",
    "revision": "476ec04618c57e6139020c0a18b5bb4f"
  },
  {
    "url": "css/style.css",
    "revision": "a070096c4a487d96aef5ca1ca867e5a7"
  },
  {
    "url": "guide/index.html",
    "revision": "4007d823173943c0458f7efd2aecc38b"
  },
  {
    "url": "img/avatar.png",
    "revision": "3759451ad933279ed101bb0e8da89ea3"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "7bf402421442ecd294c6146c6d89a034"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "f4468425ee3d84cb3112b378921f162d"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "cf1cbb160818ba282cc26e27e70a8abf"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "97a1d1e157b9bb04ad6258154c8b441e"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "327398a3bfe5f777e649e41b04a39e4f"
  },
  {
    "url": "img/logo.png",
    "revision": "3759451ad933279ed101bb0e8da89ea3"
  },
  {
    "url": "img/show.jpeg",
    "revision": "ea7156761313ec017ffa1d936a9fe82e"
  },
  {
    "url": "index.html",
    "revision": "4be3510b7bb9e24a6a26094fd1bc13c1"
  },
  {
    "url": "tag/index.html",
    "revision": "e4bcb7973ebd7254d87ae854123e28ca"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "dff16e876d3b5dec77125eb12c77057a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9c480524174b1f055dbdcffa0f9dcdaa"
  },
  {
    "url": "timeline/index.html",
    "revision": "57491478e0d744c9388adb5c3f7e777f"
  },
  {
    "url": "其他/iconfont引入和使用.html",
    "revision": "65e71c68c1af70174dd17420d24763da"
  },
  {
    "url": "其他/index.html",
    "revision": "9a0ecf9c8ff943f36954718f803adb03"
  },
  {
    "url": "其他/个人博客/index.html",
    "revision": "89096e10bc83a51937050d39034fca84"
  },
  {
    "url": "其他/个人博客/个人博客的搭建.html",
    "revision": "01881b68013ad7936c20637d22847cce"
  },
  {
    "url": "前端/index.html",
    "revision": "a7c97789d09783e2a9952db66c957164"
  },
  {
    "url": "前端/三大件/css/index.html",
    "revision": "39ca6714573e052ed699a5401664360b"
  },
  {
    "url": "前端/三大件/html/index.html",
    "revision": "82cd15cda981f03288e1b9ccdab52123"
  },
  {
    "url": "前端/三大件/index.html",
    "revision": "b63efff7d2e7c28749d533428b1eea61"
  },
  {
    "url": "前端/三大件/javascript/index.html",
    "revision": "d27b25bebbde0dbd934cf56fff82c77a"
  },
  {
    "url": "前端/框架/index.html",
    "revision": "6cf5c6ecf32c37d1f607bed08180997c"
  },
  {
    "url": "前端/框架/vue/index.html",
    "revision": "ace90c68762733a5a42c992fb3c65ee3"
  },
  {
    "url": "基础知识/index.html",
    "revision": "ba45e9cc924354f16c8db4fff86493dc"
  },
  {
    "url": "基础知识/浏览器工作原理/index.html",
    "revision": "845bea99a1ea7b03c16edd339f8135b2"
  },
  {
    "url": "娱乐/index.html",
    "revision": "cb04539bfb627d4b9663bc96f9cdd9cc"
  },
  {
    "url": "娱乐/动漫/index.html",
    "revision": "43dc05f210dc20a12b5d21d65708adee"
  },
  {
    "url": "娱乐/小说/index.html",
    "revision": "eae0418ccd63b086690cd4178c6f45e8"
  },
  {
    "url": "娱乐/游戏/index.html",
    "revision": "a9e16a0c80a6309ac7f63c834ea6b40a"
  },
  {
    "url": "娱乐/游戏/网络游戏/index.html",
    "revision": "ce7570b82fe53f096c05082a9e16392d"
  },
  {
    "url": "娱乐/游戏/自制js小游戏/index.html",
    "revision": "46a18238b5f631b3835584cbe770fe7c"
  },
  {
    "url": "开发工具/git/index.html",
    "revision": "102a1fc83ec3a8c94c383db61de9e2d8"
  },
  {
    "url": "开发工具/github/index.html",
    "revision": "39b5c693a33189aac581f1d3ee222bd4"
  },
  {
    "url": "开发工具/index.html",
    "revision": "b3d4833a0c1b0226cccf3b7c96d18b52"
  },
  {
    "url": "开发工具/vscode/README copy 2.html",
    "revision": "314286bdeefbb4432be39a9f702e9395"
  },
  {
    "url": "算法/index.html",
    "revision": "273a4cf2c3af620d64ee933ae37a7cc2"
  },
  {
    "url": "算法/刷题/index.html",
    "revision": "500cf434fc3af3c3da71302b6f879c7a"
  },
  {
    "url": "算法/刷题/数组/index.html",
    "revision": "9e017cc6dfe186ccdecf8c7aff81e045"
  },
  {
    "url": "算法/数据结构/index.html",
    "revision": "efd9a544142de350571d02f24b8ce4a5"
  },
  {
    "url": "算法/数据结构/排序/index.html",
    "revision": "74373b4322b7e8dc21a5ed83be4230e0"
  },
  {
    "url": "联系我/index.html",
    "revision": "27d069b2654fd68ecbb312cac8bacf69"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
