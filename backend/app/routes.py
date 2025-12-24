"""Flask routes and API endpoints."""
from flask import Blueprint, jsonify, request

bp = Blueprint('api', __name__, url_prefix='/api')


@bp.route('/projects')
def get_projects():
    """Return portfolio projects as JSON."""
    projects = [
        {
            'id': 1,
            'title': 'Portfolio Website',
            'description': 'A modern portfolio built with React and Flask',
            'tech': ['React', 'Flask', 'Tailwind CSS'],
            'github': 'https://github.com/darksightkellar/portfolio',
            'demo': 'https://lkelvin.pythonanywhere.com'
        },
        # Add more projects here
    ]
    return jsonify(projects)


@bp.route('/contact', methods=['POST'])
def contact():
    """Handle contact form submissions."""
    data = request.get_json() if request.is_json else {}
    # TODO: Implement email sending or database storage
    return jsonify({'message': 'Contact form received', 'data': data}), 200
