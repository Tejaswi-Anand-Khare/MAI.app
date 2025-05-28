from flask import Flask, render_template, request, redirect, url_for
import random
import os

app = Flask(__name__)

# Home/Login page
@app.route('/')
def index():
    return render_template('index.html')

# Dashboard after login
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

# Upload route for image input
@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        if 'file' not in request.files:
            return "No file uploaded"

        file = request.files['file']
        if file.filename == '':
            return "No selected file"

        # You can save the file or process it here
        # For now, just pick a random gif to display
        gif_name = random.choice(['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif'])
        return render_template('result.html', gif=gif_name)

    return redirect(url_for('dashboard'))

# Text input route
@app.route('/text', methods=['POST'])
def text_input():
    # Placeholder for text input handling logic
    text_filename = request.form.get('filename')
    gif_name = random.choice(['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif'])
    return render_template('result.html', gif=gif_name)

if __name__ == '__main__':
    app.run(debug=True)