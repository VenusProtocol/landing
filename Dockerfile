#----- Build static file -------
FROM node:16.14.2-alpine3.14 as builder

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
