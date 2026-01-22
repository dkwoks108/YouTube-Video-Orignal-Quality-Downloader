const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static frontend files

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'YouTube Downloader API is running',
    version: '1.0.0',
    author: 'DKWorks108'
  });
});

// Get video info endpoint
app.get('/api/info', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'Please provide a YouTube URL' });
    if (!ytdl.validateURL(url)) return res.status(400).json({ error: 'Invalid YouTube URL' });

    const info = await ytdl.getInfo(url);
    const formats = ytdl.filterFormats(info.formats, 'videoandaudio');
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');

    const qualities = {};
    formats.forEach(format => {
      const quality = format.qualityLabel;
      if (quality && !qualities[quality]) {
        qualities[quality] = {
          quality: quality,
          container: format.container,
          hasAudio: format.hasAudio,
          hasVideo: format.hasVideo,
          itag: format.itag
        };
      }
    });

    const bestAudio = audioFormats.reduce((best, f) => (f.audioBitrate > (best.audioBitrate || 0) ? f : best), {});
    const videoData = {
      title: info.videoDetails.title,
      author: info.videoDetails.author.name,
      lengthSeconds: info.videoDetails.lengthSeconds,
      viewCount: info.videoDetails.viewCount,
      uploadDate: info.videoDetails.uploadDate,
      thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url,
      description: info.videoDetails.description,
      qualities: Object.values(qualities),
      audioAvailable: audioFormats.length > 0,
      bestAudioBitrate: bestAudio.audioBitrate || 0
    };

    res.json(videoData);
  } catch (error) {
    console.error('Error fetching video info:', error);
    res.status(500).json({ error: 'Failed to fetch video information', message: error.message });
  }
});

// Download video endpoint
app.get('/api/download', async (req, res) => {
  try {
    const { url, quality } = req.query;
    if (!url) return res.status(400).json({ error: 'Please provide a YouTube URL' });
    if (!ytdl.validateURL(url)) return res.status(400).json({ error: 'Invalid YouTube URL' });

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_');

    let format;
    if (quality === 'audio') {
      format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
    } else {
      format = ytdl.chooseFormat(info.formats, { quality: quality || 'highest', filter: 'videoandaudio' });
    }

    res.setHeader('Content-Disposition', `attachment; filename="${title}.${format.container}"`);
    res.setHeader('Content-Type', format.mimeType);

    ytdl(url, { format })
      .on('error', err => {
        console.error('Download error:', err);
        if (!res.headersSent) res.status(500).json({ error: 'Download failed', message: err.message });
      })
      .pipe(res);
  } catch (error) {
    console.error('Error downloading video:', error);
    res.status(500).json({ error: 'Failed to download video', message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n  ╔════════════════════════════════════════════╗\n  ║  YouTube Downloader API - DKWorks108 🎯   ║\n  ╠════════════════════════════════════════════╣\n  ║  Server running on port ${PORT}             ║\n  ║  http://localhost:${PORT}                   ║\n  ║                                            ║\n  ║  Endpoints:                                ║\n  ║  GET  /api/health                          ║\n  ║  GET  /api/info?url=<youtube_url>          ║\n  ║  GET  /api/download?url=<url>&quality=1080p║\n  ╚════════════════════════════════════════════╝\n  `);
});

module.exports = app;