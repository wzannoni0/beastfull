import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-purple-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-purple-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      <div className="scroll-area">
        {/* Hero Card */}
        <Card className="glow-border mb-4 overflow-hidden" style={{ marginTop: '3rem' }}>
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80"
              alt="Hero"
              fill
              className="object-cover"
              style={{ borderRadius: '1rem' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Floating Media Player */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/90 rounded-full px-5 py-3 backdrop-blur-xl border border-purple-500/40 flex items-center gap-4 shadow-xl shadow-black/50">
              <Button size="icon" className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </Button>
              <div>
                <p className="text-white text-sm font-medium">Midnight Dreams</p>
                <p className="text-purple-300/70 text-xs">Ethereal Waves</p>
              </div>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#c084fc" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg">2.4K</p>
                <p className="text-purple-300/60 text-xs">Followers</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#ec4899" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg">18.7K</p>
                <p className="text-pink-300/60 text-xs">Likes</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Featured Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-bold text-lg">Featured</h2>
            <Button variant="ghost" size="sm" className="text-purple-400 text-xs">See all</Button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="w-44 flex-shrink-0 overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
                <div className="relative h-28">
                  <Image
                    src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80`}
                    alt={`Featured ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="text-xs">NEW</Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-white font-semibold text-sm truncate">Cosmic Journey {i}</p>
                  <p className="text-purple-300/60 text-xs">Visual Experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <Card className="p-4 mb-4">
          <div className="flex gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-bold text-lg">Alexandra Chen</h3>
                <Badge variant="default" className="text-xs">PRO</Badge>
              </div>
              <p className="text-purple-300/80 text-sm mb-1">Digital Artist & Designer</p>
              <p className="text-purple-300/50 text-xs">Creating immersive experiences since 2019</p>
            </div>
          </div>
        </Card>

        {/* Large Visual Card */}
        <Card className="glow-border mb-4 overflow-hidden">
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
              <p className="text-purple-300/80 text-sm">Explore the latest artwork</p>
            </div>
          </div>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="p-3 text-center">
            <p className="text-white font-bold text-lg">156</p>
            <p className="text-purple-300/60 text-xs">Projects</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-white font-bold text-lg">4.9</p>
            <p className="text-purple-300/60 text-xs">Rating</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-white font-bold text-lg">89</p>
            <p className="text-purple-300/60 text-xs">Awards</p>
          </Card>
        </div>

        {/* Description Card */}
        <Card className="p-5 mb-4">
          <h3 className="text-white font-bold text-base mb-2">About the Artist</h3>
          <p className="text-purple-200/70 text-sm leading-relaxed mb-4">
            Specializing in futuristic digital art, I blend cyberpunk aesthetics with ethereal 
            dreamscapes. My work explores the intersection of technology and humanity.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">#Cyberpunk</Badge>
            <Badge variant="secondary">#DigitalArt</Badge>
            <Badge variant="secondary">#Neon</Badge>
          </div>
        </Card>

        {/* Gallery */}
        <div className="mb-4">
          <h3 className="text-white font-bold text-base mb-3">Gallery</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {[
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&q=80",
              "https://images.unsplash.com/photo-1558618047-f4b511cc0a08?w=200&q=80",
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
              "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&q=80",
              "https://images.unsplash.com/photo-1614851099511-773084f6911d?w=200&q=80",
            ].map((src, i) => (
              <div 
                key={i} 
                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all hover:scale-105 ${
                  i === 2 ? 'border-purple-500 shadow-lg shadow-purple-500/30' : 'border-white/10 hover:border-purple-500/50'
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <Card className="p-5 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold">Unlock Premium</p>
              <p className="text-purple-300/60 text-sm">Get exclusive access</p>
            </div>
            <Button>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Subscribe
            </Button>
          </div>
        </Card>
      </div>

      {/* Floating Action Button */}
      <div className="floating-btn">
        <Button size="icon" className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}
