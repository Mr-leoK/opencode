export const en = {
  // CLI Help
  "cli.help.title": "OpenCode - AI Coding Assistant",
  "cli.help.usage": "Usage: opencode [command] [options]",
  "cli.help.examples": "Examples:",
  "cli.help.example.run": "  opencode                    Start interactive session",
  "cli.help.example.serve": "  opencode serve              Start server mode",
  "cli.help.example.model": "  opencode -m anthropic/claude-3-5-sonnet-20241022",

  // Commands
  "cmd.run": "Run opencode in the current directory",
  "cmd.serve": "Start a headless opencode server",
  "cmd.tui": "Start the terminal UI",
  "cmd.generate": "Generate code from prompt",
  "cmd.providers": "Manage AI providers",
  "cmd.models": "List available models",
  "cmd.account": "Manage your account",
  "cmd.agent": "Manage agents",
  "cmd.mcp": "Manage MCP servers",
  "cmd.plug": "Manage plugins",
  "cmd.upgrade": "Upgrade opencode",
  "cmd.uninstall": "Uninstall opencode",
  "cmd.debug": "Debug commands",
  "cmd.stats": "Show usage statistics",
  "cmd.db": "Database commands",
  "cmd.web": "Open web interface",
  "cmd.pr": "GitHub PR commands",
  "cmd.session": "Session commands",
  "cmd.import": "Import data",
  "cmd.export": "Export data",

  // Common options
  "opt.model": "Model to use",
  "opt.prompt": "Prompt to use",
  "opt.agent": "Agent to use",
  "opt.continue": "Continue last session",
  "opt.session": "Session ID to continue",
  "opt.fork": "Fork session",
  "opt.pure": "Run without external plugins",
  "opt.printLogs": "Print logs to stderr",
  "opt.logLevel": "Log level",
  "opt.version": "Show version",
  "opt.help": "Show help",

  // TUI Strings
  "tui.welcome": "Welcome to OpenCode",
  "tui.starting": "Starting OpenCode...",
  "tui.loading": "Loading...",
  "tui.thinking": "Thinking...",
  "tui.searching": "Searching...",
  "tui.working": "Working...",
  "tui.done": "Done",
  "tui.error": "Error",
  "tui.success": "Success",
  "tui.warning": "Warning",
  "tui.info": "Info",

  // TUI UI
  "tui.askAnything": "Ask anything",
  "tui.runCommand": "Run a command",
  "tui.build": "Build",
  "tui.miniMax": "MiniMax M2.5 Free",
  "tui.openCodeZen": "OpenCode Zen",
  "tui.agents": "agents",
  "tui.commands": "commands",
  "tui.tab": "tab",
  "tui.ctrlP": "ctrl+p",
  "tui.finishingStartup": "Finishing startup",
  "tui.loadingPlugins": "Loading plugins",

  // Dialog
  "dialog.apiKey": "API key",
  "dialog.enterApiKey": "Enter API key",
  "dialog.zen.description":
    "OpenCode Zen gives you access to all the best coding models at the cheapest prices with a single API key.",
  "dialog.zen.url": "Go to https://opencode.ai/zen to get a key",
  "dialog.go.description":
    "OpenCode Go is a $10 per month subscription that provides reliable access to popular open coding models with generous usage limits.",
  "dialog.go.url": "Go to https://opencode.ai/zen and enable OpenCode Go",

  // Home Tips
  "tips.connect": "Use {highlight}/connect{/highlight} with OpenCode Zen for curated, tested models",
  "tips.oauth": "OpenCode auto-handles OAuth for remote MCP servers requiring auth",
  "tips.format": "OpenCode auto-formats files using prettier, gofmt, ruff, and more",
  "tips.lsp": "OpenCode uses LSP servers for intelligent code analysis",

  // Prompts
  "prompt.selectModel": "Select a model",
  "prompt.selectProvider": "Select a provider",
  "prompt.enterPrompt": "Enter your prompt",
  "prompt.continueSession": "Continue previous session?",
  "prompt.newSession": "Start new session",
  "prompt.confirm": "Confirm",
  "prompt.cancel": "Cancel",
  "prompt.yes": "Yes",
  "prompt.no": "No",
  "prompt.ok": "OK",
  "prompt.okCool": "OK, cool!",
  "prompt.letsGo": "Let's go!",

  // Messages
  "msg.connected": "Connected",
  "msg.disconnected": "Disconnected",
  "msg.connecting": "Connecting...",
  "msg.reconnecting": "Reconnecting...",
  "msg.connectionFailed": "Connection failed",
  "msg.saving": "Saving...",
  "msg.saved": "Saved",
  "msg.loading": "Loading...",
  "msg.processing": "Processing...",
  "msg.waiting": "Waiting...",
  "msg.ready": "Ready",
  "msg.running": "Running...",
  "msg.stopped": "Stopped",
  "msg.completed": "Completed",
  "msg.failed": "Failed",
  "msg.cancelled": "Cancelled",
  "msg.timeout": "Timeout",

  // Errors
  "err.noProvider": "No provider configured",
  "err.noModel": "No model selected",
  "err.invalidModel": "Invalid model",
  "err.apiKey": "API key not set",
  "err.authFailed": "Authentication failed",
  "err.networkError": "Network error",
  "err.unknown": "Unknown error",
  "err.permission": "Permission denied",
  "err.fileNotFound": "File not found",
  "err.dirNotFound": "Directory not found",

  // Server
  "server.listening": "Server listening on",
  "server.starting": "Starting server...",
  "server.stopped": "Server stopped",
  "server.passwordWarning": "Warning: OPENCODE_SERVER_PASSWORD is not set; server is unsecured.",

  // Account
  "account.login": "Login",
  "account.logout": "Logout",
  "account.profile": "Profile",
  "account.settings": "Settings",
  "account.subscription": "Subscription",

  // Providers
  "provider.anthropic": "Anthropic (Claude)",
  "provider.openai": "OpenAI (GPT)",
  "provider.google": "Google (Gemini)",
  "provider.xai": "xAI (Grok)",
  "provider.meta": "Meta (Llama)",
  "provider.openrouter": "OpenRouter",
  "provider.custom": "Custom",

  // Tools
  "tool.read": "Read",
  "tool.edit": "Edit",
  "tool.write": "Write",
  "tool.glob": "Glob",
  "tool.grep": "Grep",
  "tool.list": "List",
  "tool.bash": "Bash",
  "tool.task": "Task",
  "tool.skill": "Skill",
  "tool.lsp": "LSP",
  "tool.webfetch": "Web Fetch",
  "tool.websearch": "Web Search",
  "tool.codesearch": "Code Search",

  // Permissions
  "perm.allow": "Allow",
  "perm.deny": "Deny",
  "perm.ask": "Ask",
  "perm.request": "Permission request",
  "perm.required": "Permission required",

  // Session
  "session.new": "New session",
  "session.continue": "Continue session",
  "session.archive": "Archive session",
  "session.delete": "Delete session",
  "session.share": "Share session",
  "session.export": "Export session",

  // Updates
  "update.available": "Update available",
  "update.downloading": "Downloading update...",
  "update.install": "Install update",
  "update.later": "Later",
  "update.upToDate": "You're up to date",

  // Misc
  "misc.loading": "Loading...",
  "misc.searching": "Searching...",
  "misc.noResults": "No results found",
  "misc.pressEnter": "Press Enter to continue",
  "misc.pressCtrlC": "Press Ctrl+C to exit",
  "misc.loadingDeps": "Loading dependencies...",
  "misc.initComplete": "Initialization complete",
}

export type Dict = typeof en
export type Key = keyof Dict
