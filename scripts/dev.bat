@echo off
REM Aesthetica Capital Development Script for Windows
REM This script kills any process running on port 3000 and starts the Next.js dev server

echo 🚀 Starting Aesthetica Capital Development Server
echo ================================================

REM Kill any process running on port 3000
echo 🔍 Checking for processes on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    echo ⚠️  Found process running on port 3000, killing it...
    taskkill /F /PID %%a >nul 2>&1
)
echo ✅ Port 3000 cleared

REM Wait a moment for the port to be fully released
timeout /t 2 /nobreak >nul

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Start the development server
echo 🎯 Starting Next.js development server...
echo 📍 Server will be available at: http://localhost:3000
echo 🛑 Press Ctrl+C to stop the server
echo.

npm run dev
