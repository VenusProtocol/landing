# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

#----- Build static file -------
FROM node:14 AS builder

WORKDIR /app

# Install depedencies
ADD package.json yarn.lock ./
RUN yarn install

# Build
COPY . .
RUN yarn build

#----- Upload to S3 ------
FROM amazon/aws-cli AS s3_uploader

ARG S3_BUCKET_NAME

RUN mkdir -p /build/statics

COPY --from=builder /app/build /build/statics

RUN aws s3 cp /build/statics s3://${S3_BUCKET_NAME}/ --recursive

#----- Build Docker image -----
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
