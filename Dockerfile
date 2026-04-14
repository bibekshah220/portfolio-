FROM node:22
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --production
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]