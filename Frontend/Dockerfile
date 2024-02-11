FROM node:14-alpine as node
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html
EXPOSE 4200