"""Flask application factory."""
import os
from flask import Flask, send_from_directory
from flask_cors import CORS


def create_app(config=None):
    """Create and configure the Flask application."""
    static_folder = os.path.join(os.path.dirname(__file__), 'static')
    # Modules folder is at project root (two levels up from app/)
    modules_folder = os.path.join(os.path.dirname(__file__), '..', '..', 'modules')
    
    app = Flask(__name__, static_folder=static_folder, static_url_path='')
    
    # Enable CORS for React development server
    CORS(app)
    
    # Load configuration
    if config:
        app.config.from_mapping(config)
    
    # Register blueprints
    from app import routes
    app.register_blueprint(routes.bp)
    
    # Serve modules directory
    @app.route('/modules/<path:path>')
    def serve_modules(path):
        return send_from_directory(modules_folder, path)
    
    # SPA routes - explicitly handle client-side routing paths
    @app.route('/projects')
    @app.route('/projects/')
    @app.route('/projects/<path:path>')
    @app.route('/about')
    @app.route('/contact')
    def serve_spa_routes(path=None):
        return send_from_directory(static_folder, 'index.html')
    
    # Serve React app for root and any other non-API route
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_react(path):
        # Check if file exists in static folder
        if path and os.path.exists(os.path.join(static_folder, path)):
            return send_from_directory(static_folder, path)
        # Return index.html for SPA routing
        return send_from_directory(static_folder, 'index.html')
    
    return app
