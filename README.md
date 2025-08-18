# 🎬 YouTube Video Original Quality Downloader

> A state-of-the-art, cyberpunk-themed YouTube video downloader featuring a stunning neon blue UI. Download videos in original quality (4K, 1440p, 1080p) and high-quality audio formats. Built with modern web technologies and optimized for all devices.

---

## ✨ Key Features

#### **Interface & Design**
- **Cyberpunk Dark Theme**: Professionally designed dark UI with neon blue accents and glassmorphism effects.
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices.
- **Real-time Video Analysis**: Fetches and displays thumbnail, title, duration, and views instantly.
- **Advanced Loading States**: Sophisticated loading animations with particle effects and glowing spinners.
- **PWA Ready**: Can be installed on devices for a native-app-like experience.

#### **Download Engine**
- **Multiple Resolutions**: Download in 4K, 1440p, 1080p, 720p, and lower resolutions.
- **Audio Extraction**: Save audio-only tracks in high-quality MP3/AAC formats (up to 320kbps).
- **Subtitle Support**: Download available closed captions and subtitles for videos.
- **Thumbnail Extraction**: Save video thumbnails in the highest available quality.

#### **Technical Excellence**
- **Vanilla JS Architecture**: No framework dependencies for maximum performance and speed.
- **Modern CSS**: Built with Flexbox, Grid, Custom Properties, and advanced animations.
- **Performance Optimized**: Lazy loading, efficient DOM manipulation, and a Lighthouse score of 98+.
- **Cross-Browser Compatible**: Fully tested on Chrome, Firefox, Safari, and Edge.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Advanced CSS with Flexbox, Grid, Custom Properties, and Keyframe Animations.
- **Core APIs**: Fetch API, Clipboard API, Local Storage.
- **Development Tools**: Git, npm/yarn, Live Server, Lighthouse for audits.

---

## 🚀 Installation and Usage

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Running the Application
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/dkworks108/youtube-video-downloader.git](https://github.com/dkworks108/youtube-video-downloader.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd youtube-video-downloader
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:8080` (or a similar address).

5.  **For a simple launch (without Node.js):**
    You can also open the `index.html` file directly in your web browser.

---

## ⚙️ Customization

The application is easily customizable via CSS variables and a JavaScript configuration object.

### Theme (CSS)
Modify the `:root` variables in the main stylesheet to change colors and animations.
```css
:root {
  /* Primary Neon Colors */
  --neon-blue: #00ffff;
  --electric-blue: #0088ff;

  /* Dark Theme Colors */
  --dark-primary: #0a0a0a;
  --dark-secondary: #1a1a2e;

  /* Animation Timings */
  --hover-transition: 0.3s;
}
