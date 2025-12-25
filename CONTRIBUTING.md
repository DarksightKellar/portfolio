# Contributing

## Development Workflow

1. **Create a branch** from `main`
2. **Make changes** and add tests
3. **Run tests locally** before pushing
4. **Push** to trigger CI
5. **Create PR** to merge into `main`

---

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs automatically on:
- Push to `main`
- Pull requests to `main`

### Jobs

#### 1. `backend-tests`
- **Runs on:** GitHub-hosted runner (ubuntu-latest)
- **Python:** 3.12
- **Steps:** Install deps → Run pytest

#### 2. `frontend-tests`
- **Runs on:** GitHub-hosted runner (ubuntu-latest)
- **Node.js:** 20
- **Steps:** Install deps → ESLint → Vitest

#### 3. `build`
- **Depends on:** `backend-tests` and `frontend-tests` passing
- **Steps:** Install deps → Build production bundle → Upload artifact

---

## Adding Tests

### Backend (pytest)

Add tests to `backend/tests/`:

```python
def test_something(client):
    response = client.get('/api/endpoint')
    assert response.status_code == 200
```

### Frontend (Vitest)

Add tests to `frontend/src/test/`:

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Component from '../components/Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

---

## Code Style

- **Python:** PEP 8
- **JavaScript/React:** ESLint
- **CSS:** Tailwind utility classes
