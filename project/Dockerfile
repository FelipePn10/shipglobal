# Usar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "run", "dev"]