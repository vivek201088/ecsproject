# ---------- STAGE 1: Chai Banana ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Sab install karo, chahe dev ho ya prod
COPY package*.json ./
COPY nest-cli.json ./
COPY tsconfig*.json ./
RUN npm install

# Poora code copy karke build karo
COPY . .
RUN npm run build
# Ab /app/dist/apps/auth/main.js ban gaya

# ---------- STAGE 2: Sirf Chai Pack Karna ----------
FROM node:20-alpine AS final
WORKDIR /app

# Sirf production ke package install karo. typescript/jest nahi chahiye
COPY package*.json ./
RUN npm install --omit=dev

# Stage 1 "builder" se sirf bana hua code uthao
COPY --from=builder /app/dist ./dist

EXPOSE 5000
CMD ["node", "dist/apps/auth/src/main.js"]