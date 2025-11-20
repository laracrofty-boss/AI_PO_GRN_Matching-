FROM python:3.10

# Set working directory
WORKDIR /app

# Copy everything
COPY . /app

# Install all dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Hugging Face port
EXPOSE 7860

# Start the app
CMD ["python", "app.py"]
