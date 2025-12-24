"""Flask application factory."""
import os
from flask import Flask, send_from_directory
from flask_cors import CORS


def create_app(config=None):
    """Create and configure the Flask application."""
    static_folder = os.path.join(os.path.dirname(__file__), 'static')
    
    app = Flask(__name__, static_folder=static_folder, static_url_path='')
    
    # Enable CORS for React development server
    CORS(app)
    
    # Load configuration
    if config:
        app.config.from_mapping(config)
    
    # Register blueprints
    from app import routes
    app.register_blueprint(routes.bp)
    
    # Serve React app for any non-API route (SPA fallback)
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_react(path):
        if path and os.path.exists(os.path.join(static_folder, path)):
            return send_from_directory(static_folder, path)
        return send_from_directory(static_folder, 'index.html')
    
    return app
