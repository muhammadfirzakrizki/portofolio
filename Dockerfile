# === Base Stage ===
FROM node:18-bookworm AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# === Development Stage ===
FROM base AS development
COPY . .
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# === Build Stage (for staging/production) ===
FROM base AS build
COPY . .
RUN npm run build

# === Staging/Production Runner Stage ===
FROM node:18-bookworm AS runner
WORKDIR /app

# Salin hanya build output dan node_modules
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

ENV PORT=3000
EXPOSE 3000

# Gunakan environment yang ditentukan saat run
CMD ["npm", "start"]
