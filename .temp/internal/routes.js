/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\前端\\programs\\blog-vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-05ba1142",
    path: "/%E5%85%B6%E4%BB%96/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-05ba1142").then(next)
    },
  },
  {
    path: "/其他/",
    redirect: "/%E5%85%B6%E4%BB%96/"
  },
  {
    path: "/%E5%85%B6%E4%BB%96/index.html",
    redirect: "/%E5%85%B6%E4%BB%96/"
  },
  {
    path: "/其他/",
    redirect: "/%E5%85%B6%E4%BB%96/"
  },
  {
    name: "v-bc58befe",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bc58befe").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-792661a7",
    path: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-792661a7").then(next)
    },
  },
  {
    path: "/其他/个人博客/",
    redirect: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/"
  },
  {
    path: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/index.html",
    redirect: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/"
  },
  {
    path: "/其他/个人博客/",
    redirect: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/"
  },
  {
    name: "v-0072c96a",
    path: "/%E5%89%8D%E7%AB%AF/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0072c96a").then(next)
    },
  },
  {
    path: "/前端/",
    redirect: "/%E5%89%8D%E7%AB%AF/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/"
  },
  {
    path: "/前端/",
    redirect: "/%E5%89%8D%E7%AB%AF/"
  },
  {
    name: "v-0a79cf33",
    path: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E6%90%AD%E5%BB%BA.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0a79cf33").then(next)
    },
  },
  {
    path: "/其他/个人博客/个人博客的搭建.html",
    redirect: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E6%90%AD%E5%BB%BA.html"
  },
  {
    path: "/其他/个人博客/个人博客的搭建.html",
    redirect: "/%E5%85%B6%E4%BB%96/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E6%90%AD%E5%BB%BA.html"
  },
  {
    name: "v-0b42283a",
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0b42283a").then(next)
    },
  },
  {
    path: "/前端/三大件/css/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/css/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/css/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/css/"
  },
  {
    path: "/前端/三大件/css/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/css/"
  },
  {
    name: "v-cfb29272",
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-cfb29272").then(next)
    },
  },
  {
    path: "/前端/三大件/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/"
  },
  {
    path: "/前端/三大件/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/"
  },
  {
    name: "v-25a05d44",
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/html/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-25a05d44").then(next)
    },
  },
  {
    path: "/前端/三大件/html/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/html/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/html/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/html/"
  },
  {
    path: "/前端/三大件/html/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/html/"
  },
  {
    name: "v-04776200",
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/javascript/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-04776200").then(next)
    },
  },
  {
    path: "/前端/三大件/javascript/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/javascript/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/javascript/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/javascript/"
  },
  {
    path: "/前端/三大件/javascript/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E4%B8%89%E5%A4%A7%E4%BB%B6/javascript/"
  },
  {
    name: "v-3c1ee158",
    path: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3c1ee158").then(next)
    },
  },
  {
    path: "/前端/框架/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/"
  },
  {
    path: "/前端/框架/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/"
  },
  {
    name: "v-1130a8c0",
    path: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1130a8c0").then(next)
    },
  },
  {
    path: "/基础知识/",
    redirect: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/"
  },
  {
    path: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/index.html",
    redirect: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/"
  },
  {
    path: "/基础知识/",
    redirect: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/"
  },
  {
    name: "v-5a985698",
    path: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5a985698").then(next)
    },
  },
  {
    path: "/基础知识/浏览器工作原理/",
    redirect: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/"
  },
  {
    path: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/index.html",
    redirect: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/"
  },
  {
    path: "/基础知识/浏览器工作原理/",
    redirect: "/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/"
  },
  {
    name: "v-6f73afd3",
    path: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6f73afd3").then(next)
    },
  },
  {
    path: "/前端/框架/vue/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/vue/"
  },
  {
    path: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/vue/index.html",
    redirect: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/vue/"
  },
  {
    path: "/前端/框架/vue/",
    redirect: "/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/vue/"
  },
  {
    name: "v-53e0dd51",
    path: "/%E5%A8%B1%E4%B9%90/%E5%8A%A8%E6%BC%AB/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-53e0dd51").then(next)
    },
  },
  {
    path: "/娱乐/动漫/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E5%8A%A8%E6%BC%AB/"
  },
  {
    path: "/%E5%A8%B1%E4%B9%90/%E5%8A%A8%E6%BC%AB/index.html",
    redirect: "/%E5%A8%B1%E4%B9%90/%E5%8A%A8%E6%BC%AB/"
  },
  {
    path: "/娱乐/动漫/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E5%8A%A8%E6%BC%AB/"
  },
  {
    name: "v-243ce748",
    path: "/%E5%A8%B1%E4%B9%90/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-243ce748").then(next)
    },
  },
  {
    path: "/娱乐/",
    redirect: "/%E5%A8%B1%E4%B9%90/"
  },
  {
    path: "/%E5%A8%B1%E4%B9%90/index.html",
    redirect: "/%E5%A8%B1%E4%B9%90/"
  },
  {
    path: "/娱乐/",
    redirect: "/%E5%A8%B1%E4%B9%90/"
  },
  {
    name: "v-3cd2179c",
    path: "/%E5%A8%B1%E4%B9%90/%E5%B0%8F%E8%AF%B4/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3cd2179c").then(next)
    },
  },
  {
    path: "/娱乐/小说/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E5%B0%8F%E8%AF%B4/"
  },
  {
    path: "/%E5%A8%B1%E4%B9%90/%E5%B0%8F%E8%AF%B4/index.html",
    redirect: "/%E5%A8%B1%E4%B9%90/%E5%B0%8F%E8%AF%B4/"
  },
  {
    path: "/娱乐/小说/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E5%B0%8F%E8%AF%B4/"
  },
  {
    name: "v-6a85a07c",
    path: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6a85a07c").then(next)
    },
  },
  {
    path: "/娱乐/游戏/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/"
  },
  {
    path: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/index.html",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/"
  },
  {
    path: "/娱乐/游戏/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/"
  },
  {
    name: "v-6145ba94",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6145ba94").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-65f510ae",
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-65f510ae").then(next)
    },
  },
  {
    path: "/开发工具/git/",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git/"
  },
  {
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git/index.html",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git/"
  },
  {
    path: "/开发工具/git/",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git/"
  },
  {
    name: "v-75ae3032",
    path: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E8%87%AA%E5%88%B6js%E5%B0%8F%E6%B8%B8%E6%88%8F/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-75ae3032").then(next)
    },
  },
  {
    path: "/娱乐/游戏/自制js小游戏/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E8%87%AA%E5%88%B6js%E5%B0%8F%E6%B8%B8%E6%88%8F/"
  },
  {
    path: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E8%87%AA%E5%88%B6js%E5%B0%8F%E6%B8%B8%E6%88%8F/index.html",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E8%87%AA%E5%88%B6js%E5%B0%8F%E6%B8%B8%E6%88%8F/"
  },
  {
    path: "/娱乐/游戏/自制js小游戏/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E8%87%AA%E5%88%B6js%E5%B0%8F%E6%B8%B8%E6%88%8F/"
  },
  {
    name: "v-3b12dc13",
    path: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E7%BD%91%E7%BB%9C%E6%B8%B8%E6%88%8F/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3b12dc13").then(next)
    },
  },
  {
    path: "/娱乐/游戏/网络游戏/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E7%BD%91%E7%BB%9C%E6%B8%B8%E6%88%8F/"
  },
  {
    path: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E7%BD%91%E7%BB%9C%E6%B8%B8%E6%88%8F/index.html",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E7%BD%91%E7%BB%9C%E6%B8%B8%E6%88%8F/"
  },
  {
    path: "/娱乐/游戏/网络游戏/",
    redirect: "/%E5%A8%B1%E4%B9%90/%E6%B8%B8%E6%88%8F/%E7%BD%91%E7%BB%9C%E6%B8%B8%E6%88%8F/"
  },
  {
    name: "v-30bb3e9b",
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-30bb3e9b").then(next)
    },
  },
  {
    path: "/开发工具/",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/"
  },
  {
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/index.html",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/"
  },
  {
    path: "/开发工具/",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/"
  },
  {
    name: "v-9cb14cac",
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/github/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9cb14cac").then(next)
    },
  },
  {
    path: "/开发工具/github/",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/github/"
  },
  {
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/github/index.html",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/github/"
  },
  {
    path: "/开发工具/github/",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/github/"
  },
  {
    name: "v-50594f83",
    path: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/vscode/README%20copy%202.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-50594f83").then(next)
    },
  },
  {
    path: "/开发工具/vscode/README copy 2.html",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/vscode/README%20copy%202.html"
  },
  {
    path: "/开发工具/vscode/README copy 2.html",
    redirect: "/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/vscode/README%20copy%202.html"
  },
  {
    name: "v-1f9a5ad7",
    path: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/%E6%95%B0%E7%BB%84/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1f9a5ad7").then(next)
    },
  },
  {
    path: "/算法/刷题/数组/",
    redirect: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/%E6%95%B0%E7%BB%84/"
  },
  {
    path: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/%E6%95%B0%E7%BB%84/index.html",
    redirect: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/%E6%95%B0%E7%BB%84/"
  },
  {
    path: "/算法/刷题/数组/",
    redirect: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/%E6%95%B0%E7%BB%84/"
  },
  {
    name: "v-4871c61e",
    path: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4871c61e").then(next)
    },
  },
  {
    path: "/算法/刷题/",
    redirect: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/"
  },
  {
    path: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/index.html",
    redirect: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/"
  },
  {
    path: "/算法/刷题/",
    redirect: "/%E7%AE%97%E6%B3%95/%E5%88%B7%E9%A2%98/"
  },
  {
    name: "v-a23ee6dc",
    path: "/%E7%AE%97%E6%B3%95/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a23ee6dc").then(next)
    },
  },
  {
    path: "/算法/",
    redirect: "/%E7%AE%97%E6%B3%95/"
  },
  {
    path: "/%E7%AE%97%E6%B3%95/index.html",
    redirect: "/%E7%AE%97%E6%B3%95/"
  },
  {
    path: "/算法/",
    redirect: "/%E7%AE%97%E6%B3%95/"
  },
  {
    name: "v-9f5bf676",
    path: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9f5bf676").then(next)
    },
  },
  {
    path: "/算法/数据结构/",
    redirect: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/"
  },
  {
    path: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html",
    redirect: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/"
  },
  {
    path: "/算法/数据结构/",
    redirect: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/"
  },
  {
    name: "v-779ccece",
    path: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%8E%92%E5%BA%8F/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-779ccece").then(next)
    },
  },
  {
    path: "/算法/数据结构/排序/",
    redirect: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%8E%92%E5%BA%8F/"
  },
  {
    path: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%8E%92%E5%BA%8F/index.html",
    redirect: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%8E%92%E5%BA%8F/"
  },
  {
    path: "/算法/数据结构/排序/",
    redirect: "/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%8E%92%E5%BA%8F/"
  },
  {
    name: "v-41b68480",
    path: "/%E8%81%94%E7%B3%BB%E6%88%91/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-41b68480").then(next)
    },
  },
  {
    path: "/联系我/",
    redirect: "/%E8%81%94%E7%B3%BB%E6%88%91/"
  },
  {
    path: "/%E8%81%94%E7%B3%BB%E6%88%91/index.html",
    redirect: "/%E8%81%94%E7%B3%BB%E6%88%91/"
  },
  {
    path: "/联系我/",
    redirect: "/%E8%81%94%E7%B3%BB%E6%88%91/"
  },
  {
    name: "v-28721022",
    path: "/%E5%85%B6%E4%BB%96/iconfont%E5%BC%95%E5%85%A5%E5%92%8C%E4%BD%BF%E7%94%A8.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-28721022").then(next)
    },
  },
  {
    path: "/其他/iconfont引入和使用.html",
    redirect: "/%E5%85%B6%E4%BB%96/iconfont%E5%BC%95%E5%85%A5%E5%92%8C%E4%BD%BF%E7%94%A8.html"
  },
  {
    path: "/其他/iconfont引入和使用.html",
    redirect: "/%E5%85%B6%E4%BB%96/iconfont%E5%BC%95%E5%85%A5%E5%92%8C%E4%BD%BF%E7%94%A8.html"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-dfb71430",
    path: "/tag/vuepress/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-dfb71430").then(next)
    },
    meta: {"pid":"tags","id":"vuepress"}
  },
  {
    path: "/tag/vuepress/index.html",
    redirect: "/tag/vuepress/"
  },
  {
    name: "v-6cf72f86",
    path: "/tag/vuepress-theme-reco/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-6cf72f86").then(next)
    },
    meta: {"pid":"tags","id":"vuepress-theme-reco"}
  },
  {
    path: "/tag/vuepress-theme-reco/index.html",
    redirect: "/tag/vuepress-theme-reco/"
  },
  {
    name: "v-628eda6f",
    path: "/categories/blog/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-628eda6f").then(next)
    },
    meta: {"pid":"categories","id":"blog"}
  },
  {
    path: "/categories/blog/index.html",
    redirect: "/categories/blog/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]