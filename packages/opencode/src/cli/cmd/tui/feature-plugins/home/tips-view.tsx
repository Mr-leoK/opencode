import { For } from "solid-js"
import { DEFAULT_THEMES, useTheme } from "@tui/context/theme"
import { t } from "../../../../i18n"

type TipPart = { text: string; highlight: boolean }

function parse(tip: string): TipPart[] {
  const parts: TipPart[] = []
  const regex = /\{highlight\}(.*?)\{\/highlight\}/g
  const found = Array.from(tip.matchAll(regex))
  const state = found.reduce(
    (acc, match) => {
      const start = match.index ?? 0
      if (start > acc.index) {
        acc.parts.push({ text: tip.slice(acc.index, start), highlight: false })
      }
      acc.parts.push({ text: match[1], highlight: true })
      acc.index = start + match[0].length
      return acc
    },
    { parts, index: 0 },
  )

  if (state.index < tip.length) {
    parts.push({ text: tip.slice(state.index), highlight: false })
  }

  return parts
}

export function Tips() {
  const theme = useTheme().theme
  const parts = parse(TIPS[Math.floor(Math.random() * TIPS.length)])

  return (
    <box flexDirection="row" maxWidth="100%">
      <text flexShrink={0} style={{ fg: theme.warning }}>
        ● {t("tui.tip")}{" "}
      </text>
      <text flexShrink={1}>
        <For each={parts}>
          {(part) => <span style={{ fg: part.highlight ? theme.text : theme.textMuted }}>{part.text}</span>}
        </For>
      </text>
    </box>
  )
}

const TIPS = [
  t("tui.tipAtFile"),
  t("tui.tipShellCommand"),
  t("tui.tipTabAgent"),
  t("tui.tipUndo"),
  t("tui.tipRedo"),
  t("tui.tipShare"),
  t("tui.tipDragDrop"),
  t("tui.tipPasteImage"),
  t("tui.tipEditor"),
  t("tui.tipThemes"),
  t("tui.tipInit"),
  t("tui.tipModels"),
  t("tui.tipNew"),
  t("tui.tipSessions"),
  t("tui.tipCompact"),
  t("tui.tipExport"),
  t("tui.tipCopyMessage"),
  t("tui.tipCommandPalette"),
  t("tui.tipConnect"),
  t("tui.tipLeaderKey"),
  t("tui.tipF2Model"),
  t("tui.tipSidebar"),
  t("tui.tipPageNav"),
  t("tui.tipJumpStart"),
  t("tui.tipJumpEnd"),
  t("tui.tipNewline"),
  t("tui.tipClearInput"),
  t("tui.tipStopResponse"),
  t("tui.tipPlanAgent"),
  t("tui.tipSubagent"),
  t("tui.tipSessionNav"),
  t("tui.tipConfigFiles"),
  t("tui.tipGlobalConfig"),
  t("tui.tipSchema"),
  t("tui.tipDefaultModel"),
  t("tui.tipKeybind"),
  t("tui.tipDisableKeybind"),
  t("tui.tipMcpConfig"),
  t("tui.tipMcpOAuth"),
  t("tui.tipCustomCommand"),
  t("tui.tipCommandArgs"),
  t("tui.tipShellOutput"),
  t("tui.tipCustomAgent"),
  t("tui.tipAgentPerms"),
  t("tui.tipAutoFormat"),
  t("tui.tipCustomFormatter"),
  t("tui.tipLsp"),
  t("tui.tipCustomTool"),
  t("tui.tipToolScript"),
  t("tui.tipCustomPlugin"),
  t("tui.tipPluginNotify"),
  t("tui.tipPluginSensitive"),
  t("tui.tipNonInteractive"),
  t("tui.tipContinueSession"),
  t("tui.tipAttachFile"),
  t("tui.tipJsonOutput"),
  t("tui.tipServe"),
  t("tui.tipAttachServer"),
  t("tui.tipUpgrade"),
  t("tui.tipAuthList"),
  t("tui.tipAgentCreate"),
  t("tui.tipOpencodeCmd"),
  t("tui.tipGithubInstall"),
  t("tui.tipGithubFix"),
  t("tui.tipCodeReview"),
  t("tui.tipThemeFile"),
  t("tui.tipThemeDarkLight"),
  t("tui.tipAnsiColors"),
  t("tui.tipEnvVar"),
  t("tui.tipFileInclude"),
  t("tui.tipInstructions"),
  t("tui.tipTemperature"),
  t("tui.tipSteps"),
  t("tui.tipToolOverride"),
  t("tui.tipUnshare"),
  t("tui.tipDoomLoop"),
  t("tui.tipExtDir"),
  t("tui.tipDebugConfig"),
  t("tui.tipPrintLogs"),
  t("tui.tipTimeline"),
  t("tui.tipCodeBlock"),
  t("tui.tipStatus"),
  t("tui.tipScrollAccel"),
  t("tui.tipUsernameDisplay"),
  t("tui.tipDocker"),
  t("tui.tipConnectZen"),
  t("tui.tipAgentsMd"),
  t("tui.tipReview"),
  t("tui.tipHelp"),
  t("tui.tipRename"),
  t("tui.tipSuspend"),
]
