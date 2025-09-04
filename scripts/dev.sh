#!/bin/bash

# Aesthetica Capital Development Script
# This script kills any process running on port 3000 and starts the Next.js dev server

set -e

echo "🚀 Starting Aesthetica Capital Development Server"
echo "================================================"

# Kill any process running on port 3000
echo "🔍 Checking for processes on port 3000..."
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Found process running on port 3000, killing it..."
    lsof -ti:3000 | xargs kill -9
    echo "✅ Port 3000 cleared"
else
    echo "✅ Port 3000 is available"
fi

# Wait a moment for the port to be fully released
sleep 2

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🎯 Starting Next.js development server..."
echo "📍 Server will be available at: http://localhost:3000"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

npm run dev
