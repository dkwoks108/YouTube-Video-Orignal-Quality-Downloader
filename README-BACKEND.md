# YouTube Downloader Backend API 🚀

A powerful Node.js backend API for downloading YouTube videos in original quality.

Created by **DKWorks108** 🎯

---

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/dkwoks108/YouTube-Video-Orignal-Quality-Downloader.git
cd YouTube-Video-Orignal-Quality-Downloader
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

```bash
cp .env.example .env
```

Edit `.env` if you want to change the port:
```
PORT=3000
NODE_ENV=development
```

---

## 🚀 Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start at: **http://localhost:3000**

---

## 📡 API Endpoints

### 1. Health Check

**GET** `/api/health`

Check if the API is running.

**Response:**
```json
{
  "status": "ok",
  "message": "YouTube Downloader API is running",
  "version": "1.0.0",
  "author": "DKWorks108"
}
```

### 2. Get Video Information

**GET** `/api/info?url=<youtube_url>`

Fetch video metadata and available quality options.

**Parameters:**
- `url` (required): YouTube video URL

**Example:**
```bash
curl "http://localhost:3000/api/info?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

**Response:**
```json
{
  "title": "Video Title",
  "author": "Channel Name",
  "lengthSeconds": 213,
  "viewCount": "1000000",
  "uploadDate": "2020-01-01",
  "thumbnail": "https://...",
  "description": "Video description",
  "qualities": [
    {
      "quality": "1080p",
      "container": "mp4",
      "hasAudio": true,
      "hasVideo": true,
      "itag": 22
    }
  ],
  "audioAvailable": true,
  "bestAudioBitrate": 128
}
```

### 3. Download Video

**GET** `/api/download?url=<youtube_url>&quality=<quality>`

Download video in specified quality.

**Parameters:**
- `url` (required): YouTube video URL
- `quality` (optional): Quality label (1080p, 720p, 480p, 360p) or 'audio' for audio-only. Default: highest available

**Example:**
```bash
curl "http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&quality=1080p" --output video.mp4
```

**For audio only:**
```bash
curl "http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&quality=audio" --output audio.mp4
```

---

## 🎨 Frontend Integration

To use this backend with your frontend, update the API URL in your HTML file:

```javascript
const API_URL = 'http://localhost:3000';

// Fetch video info
fetch(`${API_URL}/api/info?url=${videoUrl}`)
  .then(res => res.json())
  .then(data => console.log(data));

// Download video
window.open(`${API_URL}/api/download?url=${videoUrl}&quality=1080p`);
```

---

## 📦 Dependencies

- **express**: Web framework
- **cors**: Enable CORS
- **ytdl-core**: YouTube video downloader
- **dotenv**: Environment variable management
- **nodemon**: Development auto-reload (dev dependency)

---

## 🌐 Deployment

### Deploy to Heroku

1. Create Heroku app:
```bash
heroku create your-app-name
```

2. Push to Heroku:
```bash
git push heroku main
```

3. Open your app:
```bash
heroku open
```

### Deploy to Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and deploy:
```bash
railway login
railway init
railway up
```

### Deploy to Vercel

Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

Then deploy:
```bash
npm install -g vercel
vercel
```

---

## 🔧 Troubleshooting

### Port already in use
Change the PORT in `.env` file to a different number.

### ytdl-core errors
YouTube sometimes updates their APIs. Update ytdl-core:
```bash
npm update ytdl-core
```

### CORS errors
Make sure CORS is enabled in server.js (already configured).

---

## ⚠️ Legal Notice

This tool is for educational purposes. Always respect:
- YouTube's Terms of Service
- Copyright laws
- Content creator rights

Only download content you have permission to use.

---

## 📄 License

MIT License - Created by DKWorks108

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---

## 📞 Support

For issues or questions:
- GitHub Issues: https://github.com/dkwoks108/YouTube-Video-Orignal-Quality-Downloader/issues
- GitHub Profile: https://github.com/dkwoks108

---

Made with ❤️ by **DKWorks108** 🎯