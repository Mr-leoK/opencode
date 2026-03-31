#!/bin/bash
# OpenCode 中文版一键启动脚本

BUN="/home/wula/.bun/bin/bun"
cd "$(dirname "$0")/packages/opencode"

echo "============================================"
echo "   OpenCode 中文版一键启动"
echo "============================================"

# 杀掉可能存在的旧进程
pkill -f "opencode.*serve" 2>/dev/null
pkill -f "vite.*4444" 2>/dev/null
sleep 1

# 设置中文环境
export OPENCODE_LANG=zh
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8

echo ""
echo "正在启动 OpenCode..."

# 启动
$BUN run dev "$@"