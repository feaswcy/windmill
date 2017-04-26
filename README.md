# 风机管理系统

使用vue2.0 + vue-router + vuex 以及服务端渲染搭建的组态软件上层系统

<p align="center">
  <a href="https://vue-hn.now.sh" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/499550/17546273/5aabc5fc-5eaf-11e6-8d6a-ad00937e8bd6.png" width="700px">
    <br>
    样例
  </a>
</p>

> Note: 一段时间没有启动过编译可能会比较慢.

## Features

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Real-time List Updates with FLIP Animation

## Architecture Overview

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

## Build Setup

**Requires Node.js 6+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```


## windwill system

描述：工业自动化以具体项目为背景完成一站点为基础完成服务器端的数据汇总，具体功能，实现：远程监控、双层架构（服务器端）、数据实时采集、数据报警、运行日志、公网发布、动态ip主动上报

具体任务：
1. 外网配置、监控
2. 下层画面整合
3. 报警摘要，报警日志，报警查询
4. 运行日志

