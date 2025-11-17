# Julevibber

A web application built with TypeScript and Node.js that displays a "Julevibber" header.

## Project Structure

```
Julevibber/
├── src/
│   └── server.ts          # Express server written in TypeScript
├── public/
│   └── index.html         # HTML page with Julevibber header
├── dist/                  # Compiled JavaScript files
├── package.json
├── tsconfig.json
└── .gitignore
```

## Prerequisites

- Node.js (v14 or higher)
- npm

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the TypeScript code:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled server
- `npm run dev` - Build and run in one command

## Technologies

- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **Express** - Web framework for serving static files
