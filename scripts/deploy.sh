#!/bin/bash
# PythonAnywhere Deployment Update Script
# Run this from ~/personal-site to update the site after pushing to GitHub

set -e  # Exit on error

echo "🔄 Pulling latest changes..."
cd ~/personal-site
git pull origin main

echo "📦 Updating backend dependencies..."
cd backend
source ~/.virtualenvs/portfolio-env/bin/activate
pip install -r requirements.txt


echo "🔧 Building portfolio module..."
cd ~/personal-site/modules/portfolio
npm install
npm run build

echo "🔧 Building frontend..."
cd ~/personal-site
source ~/.nvm/nvm.sh
nvm use
cd frontend
npm ci
npm run build


echo "📁 Copying assets to Flask static folder..."
cp -r dist/* ../backend/app/static/

echo "✅ Done! Now reload your web app from the PythonAnywhere Web tab."
