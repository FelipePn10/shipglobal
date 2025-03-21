# Usar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json yarn.lock ./

# Instalar as dependências usando Yarn
RUN yarn install --frozen-lockfile

# Copiar o restante do código
COPY . .

# Gerar o cliente Prisma para ambos os esquemas
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npx prisma generate --schema=./prisma/businessSchema.prisma

# Expor a porta 3000
EXPOSE 3000

# Comando para rodar o app
CMD ["yarn", "dev"]