# features


<a id="orgf1bf9ac"></a>

## hot code reloading

使用

```shell
npm run start
```

命令持续将 rescript 编译成 js

再开一个命令行执行

```shell
npm run build
```

自动将 Main.res 打包成 main.js. 只需要将 main.js 文件放到 screeps 的本地目录中(在 mac 系统中是/Library/Application\\ Support/ screeps/scripts/screeps.com/default/), 就能实现代码自动更新.

因此建议把该项目放到 &#x2026;/screeps.com/rescript/ 目录中, 运行 npm run start 和 npm run build. 游戏中的 rescript 分支就会根据本地的 rescript 代码实时更新.


<a id="org849f395"></a>

## 自动上传到任意 screeps 账号

在 <https://docs.screeps.com/auth-tokens.html> 获取 screeps 账号的 api token. 填写 token 到 .secret.json 文件的对应位置, 然后执行

```shell
npm run start
npm run push
```

就会自动热更新代码到对应的 screeps 账号


<a id="org0092bf2"></a>