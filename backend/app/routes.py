"""Flask routes and API endpoints."""
from flask import Blueprint, jsonify, request

bp = Blueprint('api', __name__, url_prefix='/api')


@bp.route('/projects')
def get_projects():
    """Return portfolio projects as JSON."""
    projects = [
        {
            'id': 1,
            'title': 'Portfolio',
            'description': 'Showcasing my work and projects',
            'tech': ['React', 'Flask', 'Tailwind'],
            'link': '/projects/portfolio',
            'github': 'https://github.com/darksightkellar/portfolio'
        },
        {
            'id': 2,
            'title': 'Todo App',
            'description': 'Simple todo with in-memory storage',
            'tech': ['HTML', 'CSS', 'JavaScript'],
            'link': '/projects/todo',
        },
    ]
    return jsonify(projects)


@bp.route('/contact', methods=['POST'])
def contact():
    """Handle contact form submissions."""
    data = request.get_json() if request.is_json else {}
    # TODO: Implement email sending or database storage
    return jsonify({'message': 'Contact form received', 'data': data}), 200
