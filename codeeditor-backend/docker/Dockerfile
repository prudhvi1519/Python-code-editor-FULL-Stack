FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y gcc build-essential && apt-get clean

# Copy and install Python dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files
COPY . /app/

# Make code runner script executable
RUN chmod +x /app/run_code.sh

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the port
EXPOSE 8000

# Run the app with Gunicorn
CMD ["gunicorn", "codeeditor.wsgi:application", "--bind", "0.0.0.0:8000"]
