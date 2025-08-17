# TWIN - Human Digital Twin Network (HDTN)

TWIN is a platform that allows users to create and manage their digital twins, interact with other users' avatars in a 3D world, and participate in location-based tasks and events.

## Features

- User authentication with Firebase
- 3D avatar integration with ReadyPlayerMe
- Interactive world map with OpenStreetMap
- Real-time task discovery and application
- Live chat with other users
- Profile management with skills and bio
- Task dashboard for tracking applications

## Prerequisites

- Node.js 16+ and npm
- Firebase account
- ReadyPlayerMe account (for avatar creation)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/twin.git
cd twin
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and enable:
   - Authentication (Email/Password)
   - Realtime Database
   - Storage (for avatars)

4. Create a `.env` file in the root directory with your Firebase configuration:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_DATABASE_URL=your_database_url
```

5. Start the development server:
```bash
npm run dev
```

## Usage

1. Register a new account or log in
2. Create your digital twin by:
   - Creating a ReadyPlayerMe avatar
   - Adding your bio and skills
   - Setting your location
3. Explore the map to find tasks and other users
4. Apply to tasks and track your applications
5. Chat with other users in real-time

## Technologies Used

- React + TypeScript
- Vite
- Firebase (Authentication, Realtime Database)
- Three.js + React Three Fiber
- React Leaflet
- Tailwind CSS
- ReadyPlayerMe

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 