# Etapa 1: Construcción del proyecto React/Vite
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servir frontend con nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
