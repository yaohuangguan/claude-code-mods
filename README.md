# Claude Code Mods

我给 Claude Code 做的 mod 合集（主题、面板等）。这个仓库本身是一个插件 marketplace，每个 mod 放在 `plugins/` 下的一个文件夹里。

## Mods

| Mod | 说明 |
| --- | --- |
| [aurora-night](plugins/aurora-night) | 极光夜主题：深靛蓝配色、翡翠绿强调色，背后是缓缓流动的极光、闪烁的星空和一弯新月 |

## 安装

在 Claude Code 终端会话的输入框里：

```
/plugin install aurora-night --marketplace yaohuangguan/claude-code-mods
```

提示 `Add marketplace?` 时输入 `y`，再选择安装范围（回车选用户范围）。

在 shell 里：

```
claude plugin install aurora-night --marketplace yaohuangguan/claude-code-mods
```

在桌面 app 里（不能用 `/plugin` 的地方）：点输入框旁边的 **+**，选 **Plugins** → **Add marketplace**，填 `yaohuangguan/claude-code-mods`，然后 **Add plugin**。

## 说明

- 主题和背景只在 Claude 桌面 app 和手机 app 里显示，终端和编辑器里看不到。
- 极光夜是暗色主题，启用后界面固定为暗色。

## License

MIT
