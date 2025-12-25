"""Tests for Flask API endpoints."""
import pytest
from app import create_app


@pytest.fixture
def app():
    """Create application for testing."""
    app = create_app({'TESTING': True})
    yield app


@pytest.fixture
def client(app):
    """Create test client."""
    return app.test_client()


class TestProjectsAPI:
    """Tests for /api/projects endpoint."""

    def test_get_projects_returns_200(self, client):
        """GET /api/projects should return 200."""
        response = client.get('/api/projects')
        assert response.status_code == 200

    def test_get_projects_returns_json(self, client):
        """GET /api/projects should return JSON."""
        response = client.get('/api/projects')
        assert response.content_type == 'application/json'

    def test_get_projects_returns_list(self, client):
        """GET /api/projects should return a list."""
        response = client.get('/api/projects')
        data = response.get_json()
        assert isinstance(data, list)

    def test_project_has_required_fields(self, client):
        """Each project should have required fields."""
        response = client.get('/api/projects')
        data = response.get_json()
        
        if len(data) > 0:
            project = data[0]
            assert 'id' in project
            assert 'title' in project
            assert 'description' in project
            assert 'tech' in project


class TestContactAPI:
    """Tests for /api/contact endpoint."""

    def test_post_contact_returns_200(self, client):
        """POST /api/contact should return 200."""
        response = client.post('/api/contact', json={
            'name': 'Test User',
            'email': 'test@example.com',
            'message': 'Hello!'
        })
        assert response.status_code == 200

    def test_post_contact_returns_json(self, client):
        """POST /api/contact should return JSON."""
        response = client.post('/api/contact', json={
            'name': 'Test User',
            'email': 'test@example.com',
            'message': 'Hello!'
        })
        assert response.content_type == 'application/json'

    def test_post_contact_returns_message(self, client):
        """POST /api/contact should return confirmation message."""
        response = client.post('/api/contact', json={
            'name': 'Test User',
            'email': 'test@example.com',
            'message': 'Hello!'
        })
        data = response.get_json()
        assert 'message' in data
