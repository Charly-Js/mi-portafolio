const EnergySwords = () => {
  return (
    <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full filter drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] light:drop-shadow-[0_0_10px_rgba(0,206,209,0.7)]"
      >
        <defs>
          <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: "#7DF9FF", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 0.9 }} />
          </linearGradient>
          <linearGradient id="bladeGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: "#00CED1", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 0.9 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* First Sword */}
        <g transform="translate(50,50) rotate(-45) translate(-50,-50)">
          {/* Handle */}
          <rect x="45" y="60" width="10" height="20" fill="#4a4a4a" />
          <circle cx="50" cy="65" r="3" fill="#7DF9FF" className="animate-pulse light:fill-[#00CED1]" />
          {/* Blade */}
          <path
            d="M40,20 L50,10 L60,20 L50,60 Z"
            fill="url(#bladeGradient)"
            className="light:fill-[url(#bladeGradientLight)] animate-pulse"
            filter="url(#glow)"
          />
        </g>

        {/* Second Sword */}
        <g transform="translate(50,50) rotate(45) translate(-50,-50)">
          {/* Handle */}
          <rect x="45" y="60" width="10" height="20" fill="#4a4a4a" />
          <circle cx="50" cy="65" r="3" fill="#7DF9FF" className="animate-pulse light:fill-[#00CED1]" />
          {/* Blade */}
          <path
            d="M40,20 L50,10 L60,20 L50,60 Z"
            fill="url(#bladeGradient)"
            className="light:fill-[url(#bladeGradientLight)] animate-pulse"
            filter="url(#glow)"
          />
        </g>
      </svg>
    </div>
  )
}

export default EnergySwords

