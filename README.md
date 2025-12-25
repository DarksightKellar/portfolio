# Portfolio Web App

A modern personal portfolio built with **React** (Vite) and **Flask**, designed to be extensible with multiple projects via Git submodules.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7, Tailwind CSS v4, Framer Motion |
| Backend | Flask 3, Flask-CORS |
| Testing | Vitest, pytest |
| CI/CD | GitHub Actions |

---

## Prerequisites

- **Node.js 24** (version locked in `.nvmrc`) via [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm)
- **Python 3.12+** via [Anaconda](https://www.anaconda.com/) or direct install
- **Git**

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/darksightkellar/portfolio.git
cd portfolio
```

### 2. Backend Setup

**Windows (PowerShell with Anaconda):**
```powershell
# Initialize conda (required once per terminal session)
& "$env:USERPROFILE\anaconda3\shell\condabin\conda-hook.ps1"
conda activate base

# Install dependencies
cd backend
pip install -r requirements.txt
```

**macOS/Linux:**
```bash
# Activate conda (or use system Python)
conda activate base  # or: source venv/bin/activate

# Install dependencies
cd backend
pip install -r requirements.txt
```

### 3. Frontend Setup

The project uses `.nvmrc` (in the project root) to lock the Node.js version.

**Windows (PowerShell with fnm):**
```powershell
# Initialize fnm and use project Node version (run from project root)
fnm env | Out-String | Invoke-Expression
fnm use

# Install dependencies
cd frontend
npm install
```

**macOS/Linux (with nvm or fnm):**
```bash
# Initialize and use project Node version (run from project root)
nvm use
# OR with fnm:
# eval "$(fnm env)"
# fnm use

# Install dependencies
cd frontend
npm install
```

---

## Development

### Backend (Flask)

The backend runs on port 5000 by default (configurable in `run.py`).

**Windows (PowerShell):**
```powershell
& "$env:USERPROFILE\anaconda3\shell\condabin\conda-hook.ps1"
conda activate base
cd backend
python run.py
```

**macOS/Linux:**
```bash
conda activate base
cd backend
python run.py
```

### Frontend (Vite Dev Server)

The frontend dev server uses an available port (typically 5173).

**Windows (PowerShell):**
```powershell
fnm env | Out-String | Invoke-Expression
cd frontend
npm run dev
```

**macOS/Linux:**
```bash
eval "$(fnm env)"
cd frontend
npm run dev
```

---

## Production Build

### Build Frontend

```bash
cd frontend
npm run build
```

### Copy to Flask Static Folder

**Windows (PowerShell):**
```powershell
Copy-Item -Path "dist\*" -Destination "..\backend\app\static\" -Recurse -Force
```

**macOS/Linux:**
```bash
cp -r dist/* ../backend/app/static/
```

---

## Testing

### Backend (pytest)

```bash
cd backend
pytest -v
```

### Frontend (Vitest)

```bash
cd frontend
npm run lint    # ESLint
npm test        # Vitest
```

---

## Gotchas & Troubleshooting

### PowerShell Execution Policy (Windows)

**Problem:** `npm.ps1 cannot be loaded because running scripts is disabled`

**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### fnm/conda Not Available

**Problem:** `npm: command not found` or `python: command not found`

**Solution:** You must initialize the version manager in each new terminal session:
- **fnm:** `fnm env | Out-String | Invoke-Expression` (Windows) or `eval "$(fnm env)"` (Unix)
- **conda:** `& "$env:USERPROFILE\anaconda3\shell\condabin\conda-hook.ps1"` (Windows) or `conda activate base` (Unix)

---

## CI/CD

GitHub Actions runs on push/PR to `main`:

| Job | Description |
|-----|-------------|
| `backend-tests` | pytest with Python 3.12 |
| `frontend-tests` | ESLint + Vitest with Node 24 |
| `build` | Vite production build (after tests pass) |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List portfolio projects |
| POST | `/api/contact` | Submit contact form |

---

## License

MIT
