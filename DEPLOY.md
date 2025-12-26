# PythonAnywhere Deployment Guide

## Prerequisites
- PythonAnywhere account with web app already created
- GitHub repo: `https://github.com/darksightkellar/portfolio.git`

---

## Step 1: Clone Repository (First Time Only)

Open a **Bash console** on PythonAnywhere:

```bash
cd ~
git clone https://github.com/darksightkellar/portfolio.git
```

---

## Step 2: Install nvm (First Time Only)

PythonAnywhere doesn't have nvm pre-installed. Install it:

```bash
git clone https://github.com/nvm-sh/nvm.git ~/.nvm --depth 1
source ~/.nvm/nvm.sh
```

Add to your `~/.bashrc` so it loads on every console:

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
```

Install the project's Node version:

```bash
cd ~/portfolio
nvm install
```

---

## Step 3: Set Up Python Virtual Environment

```bash
cd ~/portfolio/backend
mkvirtualenv --python=/usr/bin/python3.12 portfolio-env
pip install -r requirements.txt
```

---

## Step 4: Build Frontend

```bash
cd ~/portfolio
nvm use
cd frontend
npm ci
npm run build
```

Copy built assets to Flask static folder:

```bash
cp -r dist/* ../backend/app/static/
```

---

## Step 5: Configure WSGI

In the PythonAnywhere **Web** tab, edit the **WSGI configuration file** and replace its contents with:

```python
import sys
import os

# Add project to path
project_home = '/home/YOUR_USERNAME/portfolio/backend'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

os.chdir(project_home)

# Import Flask app
from app import create_app
application = create_app()
```

Replace `YOUR_USERNAME` with your PythonAnywhere username.

---

## Step 6: Set Static Files

In the **Web** tab under **Static files**, add:

| URL | Directory |
|-----|-----------|
| `/static` | `/home/YOUR_USERNAME/portfolio/backend/app/static` |
| `/modules` | `/home/YOUR_USERNAME/portfolio/modules` |

---

## Step 7: Reload

Click **Reload** on the Web tab to apply changes.

---

## Updating the Site

When you push updates to GitHub:

```bash
cd ~/portfolio
git pull origin main

# Update backend
cd backend
workon portfolio-env
pip install -r requirements.txt

# Update frontend
cd ../
source ~/.nvm/nvm.sh
nvm use
cd frontend && npm ci && npm run build
cp -r dist/* ../backend/app/static/
```

Then click **Reload** on the Web tab.
