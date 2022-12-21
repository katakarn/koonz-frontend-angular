FROM nginx:1.23.0-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist/koonz-frontend /usr/share/nginx/html
