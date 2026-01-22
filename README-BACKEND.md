# YouTube Downloader Backend API 🎯

Backend API for YouTube Video Original Quality Downloader by **DKWorks108**

---

## 📋 Features

- **Video Information Retrieval** - Fetch video metadata, thumbnails, and available qualities
- **Multi-Quality Downloads** - Support for 4K, 1440p, 1080p, 720p, 480p, and lower
- **Audio Extraction** - Download audio-only files in highest quality
- **RESTful API** - Clean and simple API endpoints
- **CORS Enabled** - Works with any frontend
- **Error Handling** - Comprehensive error messages

---

## 🚀 Quick Start

### Prerequisites

- Node.js v16 or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/dkwoks108/YouTube-Video-Orignal-Quality-Downloader.git
cd YouTube-Video-Orignal-Quality-Downloader
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env
```

4. **Start the server**

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start at `http://localhost:3000`

---

## 📡 API Endpoints

### 1. Health Check

Check if the API is running.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "ok",
  "message": "YouTube Downloader API is running",
  "version": "1.0.0",
  "author": "DKWorks108"
}
```

**Example:**
```bash
curl http://localhost:3000/api/health
```

---

### 2. Get Video Information

Fetch video metadata and available quality options.

**Endpoint:** `GET /api/info`

**Query Parameters:**
- `url` (required) - YouTube video URL

**Response:**
```json
{
  "title": "Video Title",
  "author": "Channel Name",
  "lengthSeconds": 300,
  "viewCount": "1000000",
  "uploadDate": "2024-01-01",
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
  "bestAudioBitrate": 160
}
```

**Example:**
```bash
curl "http://localhost:3000/api/info?url=https://www.youtube.com/watch?v=VIDEO_ID"
```

---

### 3. Download Video

Download a video in specified quality.

**Endpoint:** `GET /api/download`

**Query Parameters:**
- `url` (required) - YouTube video URL
- `quality` (optional) - Quality preference (e.g., "1080p", "720p", "audio")
  - Use "audio" for audio-only download
  - Defaults to "highest" if not specified

**Response:**
- File stream with appropriate headers for download

**Example:**
```bash
# Download 1080p video
curl "http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=VIDEO_ID&quality=1080p" --output video.mp4

# Download audio only
curl "http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=VIDEO_ID&quality=audio" --output audio.mp4

# Download highest quality available
curl "http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=VIDEO_ID" --output video.mp4
```

---

## 🛠️ Technology Stack

- **Express.js** - Web framework
- **ytdl-core** - YouTube video downloader
- **cors** - CORS middleware
- **dotenv** - Environment variables

---

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

---

## 🚢 Deployment

### Deploy to Heroku

1. Install Heroku CLI
2. Login to Heroku:
```bash
heroku login
```

3. Create a new app:
```bash
heroku create your-app-name
```

4. Deploy:
```bash
git push heroku main
```

5. Open your app:
```bash
heroku open
```

### Deploy to Railway

1. Install Railway CLI
2. Login:
```bash
railway login
```

3. Initialize project:
```bash
railway init
```

4. Deploy:
```bash
railway up
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

---

## 📝 Usage Examples

### JavaScript/Fetch API

```javascript
// Get video info
fetch('http://localhost:3000/api/info?url=https://www.youtube.com/watch?v=VIDEO_ID')
  .then(res => res.json())
  .then(data => console.log(data));

// Download video
window.location.href = 'http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=VIDEO_ID&quality=1080p';
```

### Python

```python
import requests

# Get video info
url = "http://localhost:3000/api/info"
params = {"url": "https://www.youtube.com/watch?v=VIDEO_ID"}
response = requests.get(url, params=params)
print(response.json())

# Download video
download_url = "http://localhost:3000/api/download"
params = {"url": "https://www.youtube.com/watch?v=VIDEO_ID", "quality": "1080p"}
response = requests.get(download_url, params=params, stream=True)
with open("video.mp4", "wb") as f:
    for chunk in response.iter_content(chunk_size=8192):
        f.write(chunk)
```

### cURL

```bash
# Get video info
curl "http://localhost:3000/api/info?url=https://www.youtube.com/watch?v=VIDEO_ID"

# Download video
curl "http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=VIDEO_ID&quality=1080p" -o video.mp4
```

---

## 🔧 Troubleshooting

### Common Issues

**Issue:** `Error: Cannot find module 'ytdl-core'`
**Solution:** Run `npm install` to install dependencies

**Issue:** `Port already in use`
**Solution:** Change PORT in `.env` file or kill the process using the port

**Issue:** `Invalid YouTube URL`
**Solution:** Ensure the URL is a valid YouTube video URL

**Issue:** `Video unavailable`
**Solution:** The video might be private, age-restricted, or region-locked

---

## ⚠️ Legal Notice

This tool is for educational purposes only. Please respect:
- YouTube's Terms of Service
- Copyright laws
- Content creators' rights

Only download content you have permission to use.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👨‍💻 Author

**DKWorks108** 🎯
- GitHub: [@dkwoks108](https://github.com/dkwoks108)

---

## 🌟 Support

If you find this project helpful, please give it a star! ⭐

---

Made with ❤️ by DKWorks108