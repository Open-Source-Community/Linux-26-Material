FROM nginx:alpine

# Copy static frontend files to Nginx default html directory
COPY index.html /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
