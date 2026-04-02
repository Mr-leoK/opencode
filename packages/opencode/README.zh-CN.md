# OpenCode 中文版部署指南

## 简介

OpenCode 是一个 AI 编程助手，支持中文界面。本文档详细介绍如何部署和使用中文版 OpenCode。

## 系统要求

- **操作系统**: Linux, macOS, Windows
- **运行时**: Node.js 18+ 或 Bun 1.0+
- **依赖**: 请参考 `package.json`

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/Mr-leoK/opencode.git
cd opencode
```

### 2. 安装依赖

```bash
# 使用 Bun (推荐)
bun install

# 或使用 npm
npm install
```

### 3. 运行中文版

```bash
# 方式一: 设置环境变量
OPENCODE_LANG=zh bun run dev

# 方式二: 使用 opencodezh 命令 (需要安装)
cd packages/opencode
npm link  # 或 bun link
opencodezh --help
```

## 详细部署

### 本地开发部署

```bash
# 1. 进入 opencode 包目录
cd packages/opencode

# 2. 安装依赖
bun install

# 3. 运行开发服务器
bun run dev

# 4. 中文帮助
OPENCODE_LANG=zh bun run dev --help
```

### 生产环境构建

```bash
# 进入包目录
cd packages/opencode

# 构建
bun run build

# 或使用 npm
npm run build
```

> 注意: 构建需要 Node.js 20+ 或 22+

### 系统级安装

```bash
cd packages/opencode

# 使用 npm 全局安装
npm install -g .

# 或使用 bun
bun add -g .

# 现在可以使用 opencodezh 命令
opencodezh --help
```

## 使用方法

### 基本命令

```bash
# 启动交互式会话 (中文版)
opencodezh

# 指定模型
opencodezh -m anthropic/claude-3-5-sonnet-20241022

# 继续上次会话
opencodezh -c

# 指定会话
opencodezh -s <session-id>
```

### 服务器模式

```bash
# 启动无头服务器
opencodezh serve

# 指定端口
opencodezh serve --port 8080
```

### 模型管理

```bash
# 列出可用模型
opencodezh models

# 查看特定提供商的模型
opencodezh models anthropic
```

### 提供商管理

```bash
# 管理 AI 提供商
opencodezh providers
```

### 其他命令

| 命令 | 说明 |
|------|------|
| `opencodezh upgrade` | 升级 OpenCode |
| `opencodezh stats` | 查看使用统计 |
| `opencodezh session` | 会话管理 |
| `opencodezh plugin` | 插件管理 |
| `opencodezh db` | 数据库工具 |

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `OPENCODE_LANG` | 语言设置 (`zh` 或 `en`) | `en` |
| `OPENCODE_PURE` | 不加载外部插件 | `0` |
| `OPENCODE_SERVER_PASSWORD` | 服务器密码 | - |
| `OPENCODE_BIN_PATH` | 指定二进制路径 | - |

## 中文界面示例

```bash
$ opencodezh --help

Commands:
  opencodezh completion          generate shell completion script
  opencodezh acp                 start ACP server
  opencodezh mcp                 manage MCP servers
  opencodezh [project]           start opencode tui
  opencodezh attach <url>        attach to running server
  opencodezh run [message..]     run with a message
  ...

Options:
  -h, --help         显示帮助
  -v, --version      显示版本号
      --print-logs   打印日志到 stderr
      --log-level    日志级别
      --pure         不加载外部插件运行
```

## 常见问题

### Q: 如何切换回英文界面?

```bash
# 使用原始 opencode 命令
opencode --help

# 或设置语言
OPENCODE_LANG=en opencode
```

### Q: 构建失败怎么办?

确保 Node.js 版本 >= 20:

```bash
node --version  # 应该是 20.x 或 22.x
```

### Q: opencodezh 命令找不到?

```bash
# 重新链接
cd packages/opencode
npm link
```

## 目录结构

```
opencode/
├── packages/
│   ├── opencode/          # CLI 应用程序
│   │   ├── bin/           # 可执行脚本
│   │   ├── src/
│   │   │   ├── cli/       # CLI 源代码
│   │   │   │   ├── i18n/  # 国际化文件
│   │   │   │   │   ├── en.ts    # 英文翻译
│   │   │   │   │   ├── zh.ts    # 中文翻译
│   │   │   │   │   └── index.ts # i18n 加载器
│   │   │   └── index.ts   # 入口文件
│   │   └── package.json
│   ├── app/               # Web UI
│   ├── console/           # 控制台网站
│   └── ...
└── README.zh-CN.md         # 本文档
```

## 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/xxx`)
3. 提交更改 (`git commit -am 'Add xxx'`)
4. 推送分支 (`git push origin feature/xxx`)
5. 创建 Pull Request

## 许可证

MIT License

## 联系方式

- GitHub: https://github.com/Mr-leoK/opencode
- 问题反馈: https://github.com/Mr-leoK/opencode/issues
