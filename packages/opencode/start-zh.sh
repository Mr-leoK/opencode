#!/bin/bash
# OpenCode 中文版一键启动器 - 完整版

# bun 路径
BUN="/home/wula/.bun/bin/bun"

# 杀掉可能存在的旧进程
pkill -f "opencode.*serve" 2>/dev/null
pkill -f "vite.*4444" 2>/dev/null
sleep 1

# 端口设置
BACKEND_PORT=4096
FRONTEND_PORT=4444

cd "$(dirname "$0")"

echo "============================================"
echo "   OpenCode 中文版一键启动"
echo "============================================"
echo ""

# 设置中文环境变量
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8
export OPENCODE_LANG=zh

# 预设语言到 localStorage (让前端启动时自动检测到中文)
echo "[预设] 设置浏览器语言为中文..."

# 创建预设语言脚本 (前端会读取这个)
cat > /tmp/set-zh-language.js << 'EOF'
// 预设语言为中文
localStorage.setItem('opencode.global.dat:language', JSON.stringify({ locale: 'zh' }));
localStorage.setItem('opencode.settings.dat:language', JSON.stringify({ locale: 'zh' }));
console.log('Language set to zh');
EOF

echo "[1/2] 启动后端服务 (端口 $BACKEND_PORT)..."

$BUN run --conditions=browser ./src/index.ts serve --port $BACKEND_PORT > /tmp/opencode-backend.log 2>&1 &
BACKEND_PID=$!

for i in {1..15}; do
    if curl -s http://localhost:$BACKEND_PORT > /dev/null 2>&1; then
        echo "       ✅ 后端已就绪!"
        break
    fi
    if [ $i -eq 15 ]; then
        echo "       ❌ 后端启动失败"
    fi
    sleep 1
done

echo "[2/2] 启动前端界面 (端口 $FRONTEND_PORT)..."

cd ../app
$BUN dev -- --port $FRONTEND_PORT > /tmp/opencode-frontend.log 2>&1 &
FRONTEND_PID=$!

sleep 4

echo ""
echo "============================================"
echo "✅ 启动成功!"
echo ""
echo "   后端 API: http://localhost:$BACKEND_PORT"
echo "   前端界面: http://localhost:$FRONTEND_PORT"
echo ""
echo "   首次访问时，浏览器应自动显示中文"
echo "   如需手动切换: 左下角设置 -> 语言 -> 简体中文"
echo ""
echo "   按 Ctrl+C 停止所有服务"
echo "============================================"

cleanup() {
    echo ""
    echo "正在停止服务..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    pkill -f "opencode.*serve" 2>/dev/null
    pkill -f "vite.*4444" 2>/dev/null
    exit 0
}
trap cleanup INT TERM

wait