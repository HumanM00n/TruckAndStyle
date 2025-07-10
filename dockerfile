# Utilise une image officielle Node.js comme base
FROM node:20-alpine

# Crée un dossier de travail
WORKDIR /app

# Copie les fichiers package pour installer les dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste du code
COPY . .

# Build de l'application (Next.js App Router)
RUN npm run build

# Expose le port sur lequel Next.js tourne
EXPOSE 3000

# Commande pour lancer l'app
CMD ["npm", "start"]
