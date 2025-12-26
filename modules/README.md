# Modules

This directory contains project modules for the personal site.

## Adding a New Module

### Option 1: Built-in Module (same repo)
1. Create a folder: `modules/my-module/`
2. Add your module files (can be React components or standalone HTML/JS/CSS)
3. Add route in `frontend/src/App.jsx`
4. Add entry in `backend/app/routes.py` (`/api/projects`)

### Option 2: External Module (separate repo)
```bash
cd modules
git submodule add https://github.com/username/my-module.git my-module
```

Then add route and API entry as above.

## Current Modules

| Module | Type | Description |
|--------|------|-------------|
| portfolio | TBD | Personal portfolio showcase |
| todo | Built-in | Simple todo app demo |
