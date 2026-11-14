# aurora-night 极光夜

Claude Code 的暗色主题 mod。

- **配色**：深靛蓝夜色为底，翡翠绿强调色；代码高亮随之变化（关键字绿、字符串浅绿、变量琥珀、名称粉红）。
- **动态背景**：渐变星空、90 颗闪烁的星星、三条缓慢飘动的极光（青绿、蓝紫、粉）、右上角微微发光的新月、底部两层远山剪影。纯 SVG + CSS 动画，不含脚本。
- **毛玻璃**：对话面板半透明加模糊，背景透出来但文字清晰。

只在 Claude 桌面 app 和手机 app 中显示。

## 安装

```
/plugin install aurora-night --marketplace yaohuangguan/claude-code-mods
```

## 文件

- `hooks/register.tsx`：在 `session.start` 设置主题，并画出 `Backdrop` 背景
- `hooks/scene.js`：极光夜空的 SVG 场景
- `hooks/make-colors.js`：Claude Code 自带的配色生成工具（原样复制）
