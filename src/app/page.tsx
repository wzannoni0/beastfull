import Image from "next/image";

export default function Home() {
  return (
    <div className="app-container">
      {/* Top Navigation */}
      <nav className="nav-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">NEXUS</p>
              <p className="text-purple-300/70 text-xs">Premium</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-icon w-10 h-10">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </button>
            <button className="btn-icon w-10 h-10">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="scroll-area">
        {/* Hero Card */}
        <div className="card glow-border mb-6" style={{ marginTop: 60 }}>
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80"
              alt="Hero"
              fill
              className="object-cover"
              style={{ borderRadius: '24px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[24px]" />
            
            {/* Floating Media Player */}
            <div className="media-player">
              <button className="btn-icon w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <div>
                <p className="text-white text-sm font-medium">Midnight Dreams</p>
                <p className="text-purple-300/70 text-xs">Ethereal Waves</p>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="card-soft p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#c084fc" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg">2.4K</p>
                <p className="text-purple-300/60 text-xs">Followers</p>
              </div>
            </div>
          </div>
          <div className="card-soft p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#c084fc" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg">18.7K</p>
                <p className="text-purple-300/60 text-xs">Likes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-lg">Featured</h2>
            <button className="text-purple-400 text-sm font-medium">See all</button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="card flex-shrink-0 w-48 overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
                <div className="relative h-28">
                  <Image
                    src={`https://images.unsplash.com/photo-${1510000000000 + i * 10000000}?w=400&q=80`}
                    alt={`Featured ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="badge text-xs">NEW</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-white font-semibold text-sm truncate">Cosmic Journey {i}</p>
                  <p className="text-purple-300/60 text-xs">Visual Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card with Image */}
        <div className="card p-4 mb-6">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
              alt="Profile"
              className="avatar-large"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-bold text-lg">Alexandra Chen</h3>
                <span className="badge text-xs">PRO</span>
              </div>
              <p className="text-purple-300/80 text-sm mb-2">Digital Artist & Designer</p>
              <p className="text-purple-300/50 text-xs">Creating immersive visual experiences since 2019</p>
            </div>
          </div>
        </div>

        {/* Large Visual Card */}
        <div className="card glow-border mb-6 overflow-hidden">
          <div className="relative h-52">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Visual"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-xl mb-1">Neon Dreams Collection</p>
              <p className="text-purple-300/80 text-sm">Explore the latest cyberpunk-inspired artwork</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="card-soft p-3 text-center">
            <p className="text-white font-bold text-lg">156</p>
            <p className="text-purple-300/60 text-xs">Projects</p>
          </div>
          <div className="card-soft p-3 text-center">
            <p className="text-white font-bold text-lg">4.9</p>
            <p className="text-purple-300/60 text-xs">Rating</p>
          </div>
          <div className="card-soft p-3 text-center">
            <p className="text-white font-bold text-lg">89</p>
            <p className="text-purple-300/60 text-xs">Awards</p>
          </div>
        </div>

        {/* Description Card */}
        <div className="card p-5 mb-6">
          <h3 className="text-white font-bold text-base mb-2">About the Artist</h3>
          <p className="text-purple-200/70 text-sm leading-relaxed mb-4">
            Specializing in futuristic digital art, I blend cyberpunk aesthetics with ethereal 
            dreamscapes. My work explores the intersection of technology and humanity.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">#Cyberpunk</span>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">#DigitalArt</span>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">#Neon</span>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-base mb-4">Gallery</h3>
          <div className="gallery-scroll">
            {[
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&q=80",
              "https://images.unsplash.com/photo-1558618047-f4b511cc0a08?w=200&q=80",
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
              "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&q=80",
              "https://images.unsplash.com/photo-1614851099511-773084f6911d?w=200&q=80",
            ].map((src, i) => (
              <div key={i} className={`thumbnail cursor-pointer ${i === 2 ? 'active' : ''}`}>
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={80}
                  height={80}
                  className="rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="card p-5 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold">Unlock Premium</p>
              <p className="text-purple-300/60 text-sm">Get exclusive access</p>
            </div>
            <button className="btn-glass">
              <span className="flex items-center gap-2">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="floating-btn">
        <button className="btn-icon w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
