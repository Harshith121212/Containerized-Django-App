FROM python:3.9

WORKDIR /app/backend

# Copy dependencies first for layer caching
COPY requirements.txt /app/backend

# Install required libraries
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y gcc default-libmysqlclient-dev pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install mysqlclient
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . /app/backend

EXPOSE 8000
