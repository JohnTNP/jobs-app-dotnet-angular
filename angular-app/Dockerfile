FROM node:22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25
COPY --from=build /app/dist/angular-app/browser /usr/share/nginx/html
EXPOSE 80