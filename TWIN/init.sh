#!/bin/bash

# Create project directory
mkdir -p twin
cd twin

# Initialize npm project
npm init -y

# Install dependencies
npm install react react-dom @types/react @types/react-dom typescript @vitejs/plugin-react vite
npm install firebase @react-three/fiber @react-three/drei three react-leaflet leaflet @types/leaflet
npm install tailwindcss postcss autoprefixer react-router-dom @headlessui/react @heroicons/react
npm install socket.io-client i18next react-i18next

# Initialize TypeScript
npx tsc --init

# Initialize Tailwind CSS
npx tailwindcss init -p

# Create necessary directories
mkdir -p src/components src/pages src/contexts src/config src/types

# Create .env file
echo "VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_DATABASE_URL=your_database_url" > .env

echo "Project initialized successfully!" 