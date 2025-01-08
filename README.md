# eslint-config-shaw

一套我个人喜欢的的代码风格Eslint配置。

## 规则

### 代码风格

- 使用`prettier`格式化代码
- 使用`sort-destructure-keys`插件，对解构赋值进行排序
- 使用`sort-keys-fix`插件，对对象属性进行排序
- 使用`unicorn`插件，对代码进行优化
- 使用`unused-imports`插件，对未使用的导入进行警告
- 使用`@typescript-eslint`插件，对TypeScript代码进行检查

## 安装

```bash
npm install eslint-config-shaw --save-dev
```

## 使用

在项目的Eslint配置文件中，使用`extends`字段继承这套配置。

```json
{
  "extends": [...其他配置, "shaw"]
}
```


