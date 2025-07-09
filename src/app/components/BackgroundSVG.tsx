const BackgroundSVG = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    fill="url(#gradient)"
                    fillOpacity="0.4"
                    d="M0,192L60,170.7C120,149,240,107,360,122.7C480,139,600,213,720,213.3C840,213,960,139,1080,122.7C1200,107,1320,149,1380,170.7L1440,192L1440,800L1380,800C1320,800,1200,800,1080,800C960,800,840,800,720,800C600,800,480,800,360,800C240,800,120,800,60,800L0,800Z"
                />
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#6b21a8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default BackgroundSVG;
