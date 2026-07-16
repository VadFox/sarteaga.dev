# --- Etapa 1: Compilación ---
FROM node:22-alpine AS build

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --only-built-dependencies

COPY . .

RUN pnpm build

# --- Etapa 2: Servidor de producción (Nginx) ---
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html 

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]