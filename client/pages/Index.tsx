export default function Index() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-50 px-6 md:px-12 lg:px-24 py-6">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="3" fill="white"/>
              <circle cx="16" cy="8" r="3" fill="white"/>
              <circle cx="12" cy="16" r="3" fill="white"/>
            </svg>
            <span className="text-xl font-bold">Squid</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Home</a>
          </nav>
          <button className="bg-gradient-brand text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
            Get Started Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-20 pb-32 overflow-hidden">
        {/* Multiple Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-purple-500 to-transparent rounded-full blur-[200px] opacity-30 animate-pulse"></div>
        <div className="absolute top-32 -left-48 w-[500px] h-[500px] bg-gradient-to-br from-pink-600 via-pink-500 to-transparent rounded-full blur-[180px] opacity-25 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-32 right-1/3 w-[400px] h-[400px] bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-[150px] opacity-20"></div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1440 800">
            <defs>
              <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1440" height="800" fill="url(#grid-pattern)"/>
          </svg>
        </div>

        {/* Floating Dots */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Beautiful Landing Page<br />Design for You
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A great design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
            <button className="bg-gradient-brand text-white px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition inline-block">
              Login
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced gradient blobs with animation */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-full blur-[120px] opacity-50 -z-10 animate-pulse"></div>
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-full blur-[120px] opacity-50 -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-pink-500 via-purple-600 to-pink-500 rounded-full blur-[200px] opacity-10 -z-10"></div>
            
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <div className="grid grid-cols-3 gap-6">
                {/* Left Panel */}
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 h-32"></div>
                  <div className="bg-gray-800/50 rounded-xl p-4 h-24"></div>
                  <div className="bg-gray-800/50 rounded-xl p-4 h-28"></div>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600"></div>
                  </div>
                </div>

                {/* Center Panels */}
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-center h-40">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="8" fill="none"/>
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          stroke="url(#gradient)" 
                          strokeWidth="8" 
                          fill="none"
                          strokeDasharray="251.2"
                          strokeDashoffset="62.8"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF92C2"/>
                            <stop offset="100%" stopColor="#9747FF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <div className="flex gap-2 justify-center">
                      {[40, 55, 35, 65, 45].map((height, i) => (
                        <div key={i} className="w-8 bg-gradient-brand rounded-t" style={{ height: `${height}px` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 h-32"></div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-32">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z" fill="black"/>
        </svg>
      </div>

      {/* Feature Boxes Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 bg-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Boxes</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📦", title: "Fully Customizable" },
              { icon: "📧", title: "Fully Customizable" },
              { icon: "😊", title: "Fully Customizable", highlight: true },
              { icon: "🎯", title: "Fully Customizable" },
              { icon: "✂️", title: "Fully Customizable" },
              { icon: "📹", title: "Fully Customizable" },
            ].map((feature, i) => (
              <div 
                key={i}
                className={`${
                  feature.highlight 
                    ? 'bg-gradient-brand' 
                    : 'bg-gray-900'
                } rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition`}
              >
                <div className={`${
                  feature.highlight 
                    ? 'bg-white/20' 
                    : 'bg-gray-800'
                } w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl`}>
                  {i === 0 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M9 3v18M3 9h18M3 15h18M15 3v18"/>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  )}
                  {i === 4 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
                    </svg>
                  )}
                  {i === 5 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                      <circle cx="12" cy="12" r="4"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section with Icons */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Animated Icons */}
            <div className="relative h-96">
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center animate-pulse">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">€</span>
              </div>
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="7" r="3" fill="black"/>
                  <circle cx="15" cy="7" r="3" fill="black"/>
                  <circle cx="12" cy="14" r="3" fill="black"/>
                </svg>
              </div>
              <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">W</span>
              </div>
              {/* Small decorative dots */}
              <div className="absolute top-1/3 right-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>

            {/* Right side - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We're here to<br />guide and help<br />you at all times
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
              <button className="bg-gradient-brand text-white px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Companies we Worked<br />With in Since 2015
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40">
            {['Smile', 'Urban', 'natural', 'WAVE', 'yuvy', 'Alka'].map((company, i) => (
              <div key={i} className="text-center text-xl font-light text-white/60">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative bg-gradient-to-r from-pink-400 via-pink-300 to-purple-500 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-12 lg:p-16">
              {/* Left side */}
              <div className="z-10">
                <p className="text-sm text-purple-900 mb-4 font-medium">LOVE WHAT WE DO</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">
                  Fell Free to Join our<br />15 Days Free Trial
                </h2>
                <button className="bg-black text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-900 transition">
                  Download maketo
                </button>
              </div>

              {/* Right side - World Map */}
              <div className="relative">
                <svg className="w-full h-full opacity-30" viewBox="0 0 500 300" fill="none">
                  {/* Simplified world map pattern */}
                  <path d="M100,150 Q150,100 200,150 T300,150" stroke="black" strokeWidth="1" fill="none" opacity="0.3"/>
                  <circle cx="150" cy="130" r="40" stroke="black" strokeWidth="1" fill="none" opacity="0.2"/>
                  <circle cx="150" cy="130" r="60" stroke="black" strokeWidth="1" fill="none" opacity="0.15"/>
                  <circle cx="150" cy="130" r="80" stroke="black" strokeWidth="1" fill="none" opacity="0.1"/>
                  <circle cx="350" cy="140" r="30" stroke="black" strokeWidth="1" fill="none" opacity="0.2"/>
                  <circle cx="350" cy="140" r="50" stroke="black" strokeWidth="1" fill="none" opacity="0.15"/>
                  <path d="M50,100 L450,100 M50,150 L450,150 M50,200 L450,200" stroke="black" strokeWidth="0.5" opacity="0.1"/>
                  <path d="M100,50 L100,250 M200,50 L200,250 M300,50 L300,250 M400,50 L400,250" stroke="black" strokeWidth="0.5" opacity="0.1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24">
        {/* Decorative Grid */}
        <div className="absolute left-0 bottom-0 w-1/3 h-96 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="200" cy="200" r="50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-md mx-auto text-center lg:text-left lg:ml-auto lg:mr-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your email"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
              <textarea
                placeholder="Name"
                rows={5}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
              />
              <button 
                type="submit"
                className="bg-gradient-brand text-white px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition w-full md:w-auto"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="8" cy="8" r="3" fill="white"/>
                  <circle cx="16" cy="8" r="3" fill="white"/>
                  <circle cx="12" cy="16" r="3" fill="white"/>
                </svg>
                <span className="text-xl font-bold">Squid</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Sections */}
            <div>
              <h3 className="font-bold mb-4">Sections</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Items</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Use Cases</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Others</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Condition</a></li>
                <li><a href="#" className="hover:text-white transition">Random Urls</a></li>
                <li><a href="#" className="hover:text-white transition">Random Texts</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">All Right Reserved - WNK GROUP 2020</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="black"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
