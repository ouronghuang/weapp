## 部署项目

1. 克隆源代码

```
git clone git@gitee.com:orh/weapp.git
```

2. 安装扩展包依赖

```
yarn
```

3. 配置 API 路径

```
// utils/request.js

const baseURL = env === 'prod' ? 'https://example.com/api' : 'http://example.test/api';
```

4. 构建 npm

* 打开微信开发者工具
* 导入项目
* 点击 `详情` -> `本地设置` -> 勾选 `使用 npm 模块`
* 点击 `工具` -> `构建 npm`
* 在根目录看见 `miniprogram_npm` 即可

## 说明

* 设置 Bootstrap4 样式 [app.wxss](./app.wxss)
* API 请求 [utils/request.js](./utils/request.js)
* TOKEN 验证 [utils/auth.js](./utils/auth.js)
* 环境变量 [utils/auth.js](./utils/auth.js)
