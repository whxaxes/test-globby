安装依赖

```bash
$ tnpm i
$ cd .dist/.sff/layer
$ tnpm i
```

再回到根目录测试

不会扫 node_modules 的 case

```bash
$ node test
```

会导致扫 node_modules 的 case

```bash
$ node test2
```
