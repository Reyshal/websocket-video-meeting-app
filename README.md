# Video Meeting and Chat Server

This project is a simple video meeting and chat server built with TypeScript, Express, and Socket.io. It allows users to join video meetings and communicate via chat in real-time.

## Features

- Real-time chat functionality
- Video meeting support using WebRTC
- Socket.io for real-time communication
- Built with TypeScript for type safety and better maintainability

## Prerequisites

- Node.js (v14 or later)
- npm (Node package manager)

## Getting Started

### Clone the Repository

```
git clone https://github.com/yourusername/video-meeting-app.git
cd video-meeting-app/server
```

### Install Dependencies

```
npm install
```

### Build the TypeScript Code

```
npm run build
```

### Run the Server

```
npm start
```

The server will start on `http://localhost:3001` (or the port specified in your environment).

## Development Mode

If you want to run the server in development mode with automatic TypeScript compilation, you can use:

```
npm run dev
```

### API Endpoints

This server uses WebSocket for real-time communication. The following events are available:

- Chat Messages
  - Event: chat message
  - Payload: string (the message to send)
- Video Signaling
  - Event: video-offer
  - Payload: RTCSessionDescriptionInit (the video offer)
  - Event: video-answer
  - Payload: RTCSessionDescriptionInit (the video answer)
  - Event: ice-candidate
  - Payload: RTCIceCandidateInit (the ICE candidate)
