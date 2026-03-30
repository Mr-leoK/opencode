import type { Dict, Key } from "./en"

export const zh: Dict = {
  // CLI Help
  "cli.help.title": "OpenCode - AI 编程助手",
  "cli.help.usage": "用法: opencodezh [命令] [选项]",
  "cli.help.examples": "示例:",
  "cli.help.example.run": "  opencodezh                  启动交互式会话",
  "cli.help.example.serve": "  opencodezh serve            启动服务器模式",
  "cli.help.example.model": "  opencodezh -m anthropic/claude-3-5-sonnet-20241022",

  // Commands
  "cmd.run": "在当前目录运行 opencode",
  "cmd.serve": "启动无头 opencode 服务器",
  "cmd.tui": "启动终端界面",
  "cmd.generate": "根据提示生成代码",
  "cmd.providers": "管理 AI 提供商",
  "cmd.models": "列出可用模型",
  "cmd.account": "管理账户",
  "cmd.agent": "管理智能体",
  "cmd.mcp": "管理 MCP 服务器",
  "cmd.plug": "管理插件",
  "cmd.upgrade": "升级 opencode",
  "cmd.uninstall": "卸载 opencode",
  "cmd.debug": "调试命令",
  "cmd.stats": "显示使用统计",
  "cmd.db": "数据库命令",
  "cmd.web": "打开网页界面",
  "cmd.pr": "GitHub PR 命令",
  "cmd.session": "会话命令",
  "cmd.import": "导入数据",
  "cmd.export": "导出数据",

  // Common options
  "opt.model": "使用的模型",
  "opt.prompt": "使用的提示词",
  "opt.agent": "使用的智能体",
  "opt.continue": "继续上一个会话",
  "opt.session": "继续的会话 ID",
  "opt.fork": "分叉会话",
  "opt.pure": "不加载外部插件运行",
  "opt.printLogs": "打印日志到 stderr",
  "opt.logLevel": "日志级别",
  "opt.version": "显示版本",
  "opt.help": "显示帮助",

  // TUI Strings
  "tui.welcome": "欢迎使用 OpenCode",
  "tui.starting": "正在启动 OpenCode...",
  "tui.loading": "加载中...",
  "tui.thinking": "思考中...",
  "tui.searching": "搜索中...",
  "tui.working": "工作中...",
  "tui.done": "完成",
  "tui.error": "错误",
  "tui.success": "成功",
  "tui.warning": "警告",
  "tui.info": "信息",

  // Prompts
  "prompt.selectModel": "选择模型",
  "prompt.selectProvider": "选择提供商",
  "prompt.enterPrompt": "输入您的提示",
  "prompt.continueSession": "继续上一个会话？",
  "prompt.newSession": "开始新会话",
  "prompt.confirm": "确认",
  "prompt.cancel": "取消",
  "prompt.yes": "是",
  "prompt.no": "否",
  "prompt.ok": "确定",

  // Messages
  "msg.connected": "已连接",
  "msg.disconnected": "已断开",
  "msg.connecting": "连接中...",
  "msg.reconnecting": "重新连接中...",
  "msg.connectionFailed": "连接失败",
  "msg.saving": "保存中...",
  "msg.saved": "已保存",
  "msg.loading": "加载中...",
  "msg.processing": "处理中...",
  "msg.waiting": "等待中...",
  "msg.ready": "就绪",
  "msg.running": "运行中...",
  "msg.stopped": "已停止",
  "msg.completed": "已完成",
  "msg.failed": "失败",
  "msg.cancelled": "已取消",
  "msg.timeout": "超时",

  // Errors
  "err.noProvider": "未配置提供商",
  "err.noModel": "未选择模型",
  "err.invalidModel": "无效的模型",
  "err.apiKey": "未设置 API 密钥",
  "err.authFailed": "认证失败",
  "err.networkError": "网络错误",
  "err.unknown": "未知错误",
  "err.permission": "权限被拒绝",
  "err.fileNotFound": "文件未找到",
  "err.dirNotFound": "目录未找到",

  // Server
  "server.listening": "服务器监听于",
  "server.starting": "启动服务器...",
  "server.stopped": "服务器已停止",
  "server.passwordWarning": "警告: 未设置 OPENCODE_SERVER_PASSWORD；服务器不安全。",

  // Account
  "account.login": "登录",
  "account.logout": "登出",
  "account.profile": "个人资料",
  "account.settings": "设置",
  "account.subscription": "订阅",

  // Providers
  "provider.anthropic": "Anthropic (Claude)",
  "provider.openai": "OpenAI (GPT)",
  "provider.google": "Google (Gemini)",
  "provider.xai": "xAI (Grok)",
  "provider.meta": "Meta (Llama)",
  "provider.openrouter": "OpenRouter",
  "provider.custom": "自定义",

  // Tools
  "tool.read": "读取",
  "tool.edit": "编辑",
  "tool.write": "写入",
  "tool.glob": "Glob",
  "tool.grep": "Grep",
  "tool.list": "列表",
  "tool.bash": "Bash",
  "tool.task": "任务",
  "tool.skill": "技能",
  "tool.lsp": "LSP",
  "tool.webfetch": "网页获取",
  "tool.websearch": "网页搜索",
  "tool.codesearch": "代码搜索",

  // Permissions
  "perm.allow": "允许",
  "perm.deny": "拒绝",
  "perm.ask": "询问",
  "perm.request": "权限请求",
  "perm.required": "需要权限",

  // Session
  "session.new": "新会话",
  "session.continue": "继续会话",
  "session.archive": "归档会话",
  "session.delete": "删除会话",
  "session.share": "分享会话",
  "session.export": "导出会话",

  // Updates
  "update.available": "有可用更新",
  "update.downloading": "正在下载更新...",
  "update.install": "安装更新",
  "update.later": "稍后",
  "update.upToDate": "已是最新版本",

  // Misc
  "misc.loading": "加载中...",
  "misc.searching": "搜索中...",
  "misc.noResults": "未找到结果",
  "misc.pressEnter": "按回车继续",
  "misc.pressCtrlC": "按 Ctrl+C 退出",
  "misc.loadingDeps": "正在加载依赖...",
  "misc.initComplete": "初始化完成",
}

export function t(key: Key): string {
  return zh[key] || key
}
