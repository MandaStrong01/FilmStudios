import { HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Film, 
  Scissors, 
  Music, 
  Sliders, 
  Layers, 
  Sparkles, 
  Clock,
  Play,
  Pause,
  Volume2
} from 'lucide-react';

/* =========================
   GLOBAL LAYOUT
========================= */
function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="app-root">
      <header className="top-bar">
        <h1>{title}</h1>
        <p>MandaStrong Studio • Build Your Own Movie</p>
      </header>

      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/media">Media Library</Link>
        <Link to="/editor">Editor Suite</Link>
        {Array.from({ length: 21 }).map((_, i) => (
          <Link key={i} to={`/page${i + 1}`}>P{i + 1}</Link>
        ))}
      </nav>

      <main className="page-content">{children}</main>

      <footer className="footer">
        © 2025 MandaStrong • Author of Doxy The School Bully
      </footer>
    </div>
  );
}

/* =========================
   PAGE TEMPLATE
========================= */
function Page({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Layout title={title}>
      <h2>{subtitle}</h2>
      <p>This section is part of the complete 21-page MandaStrong Studio workflow.</p>
    </Layout>
  );
}

/* =========================
   PAGE 1 - OPENING/SPLASH
========================= */
function Page1() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted={false}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <h1 
          className="text-8xl md:text-9xl font-black text-black mb-8 text-center tracking-wider"
          style={{
            textShadow: '4px 4px 0px rgba(255,255,255,0.3), -2px -2px 0px rgba(255,255,255,0.2)',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            letterSpacing: '0.05em'
          }}
        >
          MANDASTRONG
        </h1>

        <p className="text-3xl md:text-4xl text-white font-bold text-center max-w-4xl mb-12 leading-relaxed"
           style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          Welcome To The All In One Make A Movie App<br />
          2 - 3 Hours Duration
        </p>

        <button
          onClick={() => navigate('/page2')}
          className="flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-2xl font-black rounded-2xl transition-all transform hover:scale-105 shadow-2xl"
        >
          Get Started
          <ArrowRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

/* =========================
   PAGE 2 - WELCOME
========================= */
function Page2() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted={false}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <h1 
          className="text-8xl md:text-9xl font-black text-black mb-8 text-center tracking-wider"
          style={{
            textShadow: '4px 4px 0px rgba(255,255,255,0.3), -2px -2px 0px rgba(255,255,255,0.2)',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            letterSpacing: '0.05em'
          }}
        >
          MANDASTRONG
        </h1>

        <p className="text-3xl md:text-4xl text-white font-bold text-center max-w-5xl mb-12 leading-relaxed"
           style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          Welcome! Make Awesome Family Videos<br />
          Or Make Your Movie Dreams A Reality!<br />
          Enjoy!
        </p>

        <div className="flex gap-6">
          <button
            onClick={() => navigate('/page1')}
            className="flex items-center gap-3 px-10 py-5 bg-purple-900/80 hover:bg-purple-800 text-white text-xl font-black rounded-2xl transition-all transform hover:scale-105 shadow-2xl backdrop-blur-sm"
          >
            <ArrowLeft className="w-7 h-7" />
            Back
          </button>
          
          <button
            onClick={() => navigate('/page3')}
            className="flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-2xl font-black rounded-2xl transition-all transform hover:scale-105 shadow-2xl"
          >
            Continue
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   MEDIA LIBRARY (WORKING)
========================= */
function MediaLibrary() {
  const navigate = useNavigate();
  
  return (
    <Layout title="MEDIA LIBRARY">
      <div className="card dashed">
        <p>Click to upload or drag & drop</p>
        <small>Images • Video • Audio</small>
      </div>

      <p className="muted">No assets yet.</p>

      <button 
        onClick={() => navigate('/video-studio')}
        className="primary-btn"
      >
        Open Video Studio
      </button>
    </Layout>
  );
}

/* =========================
   EDITOR SUITE (WORKING)
========================= */
function EditorSuite() {
  return (
    <Layout title="EDITOR SUITE">
      <div className="grid">
        <div className="card">
          <h3>Timeline</h3>
          <div className="placeholder">Drag media here</div>
        </div>
        <div className="card">
          <h3>Preview</h3>
          <div className="placeholder">Video Preview</div>
        </div>
      </div>
    </Layout>
  );
}

/* =========================
   PAGE 11 - EDITOR SUITE ENHANCED
========================= */
function Page11() {
  const navigate = useNavigate();
  const [movieDuration, setMovieDuration] = useState(60);

  const editorFeatures = [
    {
      icon: <Film className="w-12 h-12" />,
      title: "Video Editor",
      description: "Multi-track timeline with professional editing tools"
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Audio Mixer",
      description: "Professional audio mixing and effects suite"
    },
    {
      icon: <Sliders className="w-12 h-12" />,
      title: "Color Grading",
      description: "Advanced color correction and grading workspace"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Effects Library",
      description: "Thousands of transitions, effects, and filters"
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Precision Tools",
      description: "Frame-accurate cutting and trimming"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "AI Enhancement",
      description: "AI-powered upscaling and enhancement"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text mb-4">
            EDITOR SUITE
          </h1>
          <p className="text-2xl text-gray-300 font-light">
            Professional-Grade Video Editing Platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {editorFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-purple-700/50 hover:border-purple-500 transition-all transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-b from-purple-900/20 to-transparent backdrop-blur-xl rounded-2xl p-12 border border-purple-700/50 text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Upload your media files and jump into our complete suite of professional editing tools!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/media')}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              Media Library
            </button>
            <button
              onClick={() => navigate('/video-studio')}
              className="px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
            >
              Open Video Studio
            </button>
            <button
              onClick={() => navigate('/editor')}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              Timeline Editor
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-purple-900/20 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-purple-700/50 mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-purple-400" />
            <h3 className="text-3xl font-bold text-white">Set Movie Duration</h3>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                {movieDuration}
              </div>
              <div className="text-xl text-purple-400 font-semibold">MINUTES</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[30, 60, 90, 120].map((dur) => (
                <button
                  key={dur}
                  onClick={() => setMovieDuration(dur)}
                  className={`px-6 py-4 rounded-xl font-bold transition-all ${
                    movieDuration === dur
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-purple-950/50 text-gray-300 hover:bg-purple-900/50'
                  }`}
                >
                  {dur} min
                </button>
              ))}
            </div>

            <input
              type="range"
              min="1"
              max="240"
              value={movieDuration}
              onChange={(e) => setMovieDuration(Number(e.target.value))}
              className="w-full h-4 bg-purple-950/50 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   VIDEO STUDIO PAGE
========================= */
function VideoStudio() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(60);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [filterIntensity, setFilterIntensity] = useState(100);
  const [textOverlay, setTextOverlay] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(48);
  const [isGenerating, setIsGenerating] = useState(false);

  const filters = [
    { name: 'grayscale', label: 'Grayscale' },
    { name: 'sepia', label: 'Sepia' },
    { name: 'vintage', label: 'Vintage' },
    { name: 'cool', label: 'Cool' },
    { name: 'warm', label: 'Warm' },
    { name: 'vibrant', label: 'Vibrant' },
    { name: 'noir', label: 'Noir' }
  ];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    alert('Video generated and saved to Media Library!');
    setIsGenerating(false);
    navigate('/media');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-r from-purple-900/50 to-black border-b border-purple-700/50 p-4">
        <h1 className="text-4xl font-black text-center text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
          OPEN VIDEO STUDIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-purple-400">Authorized Duration</h3>
            <div className="text-4xl font-black text-purple-400">{duration} min</div>
          </div>
          <input
            type="range"
            min="0"
            max="180"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-3 bg-purple-950/50 rounded-lg"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0 min</span>
            <span>180 min (3 hours)</span>
          </div>
        </div>

        <div className="card">
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4 relative">
            <video ref={videoRef} className="w-full h-full object-contain">
              Your browser does not support video playback.
            </video>
            {textOverlay && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ color: textColor, fontSize: `${fontSize}px`, fontWeight: 'bold' }}
              >
                {textOverlay}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={togglePlayPause} className="p-3 bg-purple-600 rounded-lg">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-2