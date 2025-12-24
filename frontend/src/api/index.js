const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

export async function fetchProjects() {
    const response = await fetch(`${API_BASE}/api/projects`);
    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
}

export async function submitContact(data) {
    const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to submit contact form');
    }
    return response.json();
}
