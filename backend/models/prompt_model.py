from datetime import datetime
from backend.models.file_model import db

class Prompt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    system_message = db.Column(db.Text, nullable=False)
    user_message = db.Column(db.Text, nullable=False)
    prompt_type = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)