# Build stage
FROM gcc:13 as builder

WORKDIR /app
COPY . .

RUN apt-get update && apt-get install -y \
    cmake \
    libmongoc-dev \
    libbson-dev

RUN mkdir build && cd build && \
    cmake .. && \
    make

# Runtime stage
FROM ubuntu:22.04

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libmongoc-1.0-0 \
    libbson-1.0-0

COPY --from=builder /app/build/backend .

CMD ["./backend"]