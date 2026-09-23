import { useState, useEffect } from 'react';

// ============ ICONS ============
function IconCalculator() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function IconGift() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ============ NAVIGATION ============
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">G</span>
            </div>
            <span className="text-white font-bold text-xl">Granite Billing Pro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">How It Works</a>
            <a href="#pricing" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">FAQ</a>
            <a href="#contact" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/25">
              Get Started
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-amber-400 py-2">Features</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-amber-400 py-2">How It Works</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-amber-400 py-2">Pricing</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-amber-400 py-2">FAQ</a>
            <a href="#contact" className="block bg-amber-500 text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-center">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============ HERO SECTION ============
function Hero() {
  const [currentPiece, setCurrentPiece] = useState(0);
  const pieces = [
    { l: 24, w: 36, sqft: '6.00' },
    { l: 18, w: 42, sqft: '5.25' },
    { l: 12, w: 60, sqft: '5.00' },
    { l: 30, w: 48, sqft: '10.00' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPiece(prev => (prev + 1) % pieces.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/10 via-transparent to-slate-900/50" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">Made for Granite & Marble Shops</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stop Calculating.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Start Billing.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              Enter measurements in inches. Get square feet & bill amount instantly. 
              Generate professional quotations and GST invoices — share via WhatsApp in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/25 text-lg">
                Start Free Trial
                <IconArrowRight />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg">
                See How It Works
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <IconCheck />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck />
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right - Interactive Calculator Preview */}
          <div className="relative">
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-500 text-xs ml-2">Granite Billing Pro — Live Preview</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-900/60 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Customer</div>
                  <div className="text-white font-medium">Sharma Granite Works</div>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Granite Pieces</div>
                  
                  {/* Animated measurement display */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-400 font-mono font-bold">
                          {pieces[currentPiece].l}" × {pieces[currentPiece].w}"
                        </span>
                        <span className="text-slate-500 text-sm">Granite Black</span>
                      </div>
                      <span className="text-white font-medium">{pieces[currentPiece].sqft} sq.ft</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-400 font-mono font-bold">30" × 20"</span>
                        <span className="text-slate-500 text-sm">Absolute Black</span>
                      </div>
                      <span className="text-white font-medium">4.17 sq.ft</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-400 font-mono font-bold">48" × 24"</span>
                        <span className="text-slate-500 text-sm">Kerala Grey</span>
                      </div>
                      <span className="text-white font-medium">8.00 sq.ft</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-amber-400 uppercase tracking-wider">Total Amount</div>
                      <div className="text-2xl font-bold text-white">₹11,285</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400">Rate: ₹620/sq.ft</div>
                      <div className="text-sm text-amber-400 font-medium">18.17 sq.ft total</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
                    <IconWhatsapp />
                    Share on WhatsApp
                  </button>
                  <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
                    <IconFileText />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
              Auto-calculated! ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PROBLEM SECTION ============
function ProblemSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Normal Billing Software <span className="text-red-400">Fails</span> Granite Shops
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Generic invoicing tools weren't built for the unique way granite businesses work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🧮',
              title: 'Manual Sq.Ft Calculation',
              desc: 'You calculate Length × Width ÷ 144 for every single piece — dozens of times a day. One mistake and the whole bill is wrong.',
            },
            {
              icon: '📐',
              title: 'Irregular Cut Sizes',
              desc: 'Every granite piece is different. 24×36, 18×42, 12×60 — normal software can\'t handle these measurement workflows.',
            },
            {
              icon: '📋',
              title: 'No Professional Output',
              desc: 'Handwritten bills look unprofessional. Customers want proper quotations and GST invoices they can trust.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-red-500/30 transition-all group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FEATURES SECTION ============
function Features() {
  const features = [
    {
      icon: <IconCalculator />,
      title: 'Instant Sq.Ft Calculation',
      desc: 'Enter length & width in inches. Software calculates square feet automatically. No mental math needed.',
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: <IconFileText />,
      title: 'Professional Quotations & Invoices',
      desc: 'Generate beautiful quotations and GST-compliant invoices with your shop branding. PDF ready to share.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <IconWhatsapp />,
      title: 'WhatsApp Sharing',
      desc: 'Send quotations and invoices directly to customers via WhatsApp with one tap. No typing needed.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <IconShield />,
      title: 'GST Invoice Ready',
      desc: 'CGST, SGST, taxable amount — everything calculated automatically. Fully GST-compliant invoices.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <IconCloud />,
      title: 'Cloud Backup',
      desc: 'All your data safely stored in the cloud. Access from any device. JSON export for complete backup.',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: <IconMobile />,
      title: 'Works on Any Device',
      desc: 'Use on phone, tablet, or computer. No installation needed — works right in your browser.',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything Your Granite Shop Needs
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built specifically for granite & marble businesses. Not a generic tool — purpose-built for your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-amber-500/30 transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Enter Customer Details',
      desc: 'Add customer name, mobile number, and address. Save for future use.',
      visual: '👤',
    },
    {
      step: '02',
      title: 'Add Granite Measurements',
      desc: 'Enter length × width in inches for each piece. Add multiple pieces with different sizes and rates.',
      visual: '📐',
    },
    {
      step: '03',
      title: 'Auto-Calculate Sq.Ft & Amount',
      desc: 'Software instantly calculates square feet (L × W ÷ 144) and total amount based on your rate per sq.ft.',
      visual: '🧮',
    },
    {
      step: '04',
      title: 'Generate & Share',
      desc: 'Create professional PDF quotation or GST invoice. Share directly via WhatsApp to your customer.',
      visual: '📤',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-medium">Simple Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Measurements to Invoice in 60 Seconds
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No training needed. If you can use WhatsApp, you can use Granite Billing Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent z-0" />
              )}
              <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
                <div className="text-5xl mb-4">{step.visual}</div>
                <div className="text-amber-400 font-bold text-sm mb-2">STEP {step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calculation Demo */}
        <div className="mt-16 bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">See the Magic: Inch to Sq.Ft Conversion</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { l: 24, w: 36, rate: 350 },
              { l: 18, w: 42, rate: 450 },
              { l: 30, w: 48, rate: 620 },
            ].map((item, i) => {
              const sqft = (item.l * item.w) / 144;
              const amount = sqft * item.rate;
              return (
                <div key={i} className="bg-slate-900/60 rounded-xl p-5 text-center">
                  <div className="text-amber-400 font-mono text-2xl font-bold mb-2">{item.l}" × {item.w}"</div>
                  <div className="text-slate-400 text-sm mb-1">= {item.l} × {item.w} ÷ 144</div>
                  <div className="text-white font-bold text-lg mb-2">= {sqft.toFixed(2)} sq.ft</div>
                  <div className="text-slate-500 text-xs">× ₹{item.rate}/sq.ft</div>
                  <div className="text-green-400 font-bold text-xl mt-2">= ₹{amount.toLocaleString('en-IN')}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PRICING SECTION ============
function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      price: '₹299',
      period: '/month',
      desc: 'Perfect for trying out',
      features: [
        'Unlimited quotations',
        'Up to 50 invoices/month',
        'PDF generation',
        'WhatsApp sharing',
        'Cloud backup',
        '1 device',
      ],
      popular: false,
      cta: 'Start Monthly',
    },
    {
      name: 'Yearly',
      price: '₹2,999',
      period: '/year',
      desc: 'Best value — Save ₹589',
      features: [
        'Unlimited quotations',
        'Unlimited invoices',
        'PDF generation',
        'WhatsApp sharing',
        'Cloud backup',
        '2 devices',
        'GST invoice support',
        'Priority support',
      ],
      popular: true,
      cta: 'Start Yearly — Save 16%',
    },
    {
      name: 'Enterprise',
      price: '₹5,999',
      period: '/year',
      desc: 'For growing businesses',
      features: [
        'Everything in Yearly',
        'Unlimited invoices',
        '5 devices',
        'Customer database',
        'Payment tracking',
        'Outstanding report',
        'Sales register',
        'Dedicated support',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-medium">Affordable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built for small granite shops. No hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-8 transition-all ${plan.popular ? 'bg-gradient-to-b from-amber-500/20 to-slate-800/80 border-2 border-amber-500 scale-105 shadow-xl shadow-amber-500/10' : 'bg-slate-800/50 border border-slate-700'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="text-amber-400"><IconCheck /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-amber-500 hover:bg-amber-400 text-slate-900 hover:shadow-lg hover:shadow-amber-500/25' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ REFERRAL SECTION ============
function ReferralSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-800/60 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-10 md:p-14">
          <div className="text-5xl mb-6">🎁</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Refer & Earn <span className="text-amber-400">₹1,000</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Know another granite shop owner? Refer Granite Billing Pro and earn ₹1,000 for every successful yearly subscription.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-slate-900/60 rounded-xl px-6 py-3">
              <span className="text-2xl">👤</span>
              <div className="text-left">
                <div className="text-xs text-slate-400">You refer</div>
                <div className="text-white font-medium">A granite shop owner</div>
              </div>
            </div>
            <div className="text-amber-400 text-2xl">→</div>
            <div className="flex items-center gap-3 bg-slate-900/60 rounded-xl px-6 py-3">
              <span className="text-2xl">💰</span>
              <div className="text-left">
                <div className="text-xs text-slate-400">You earn</div>
                <div className="text-amber-400 font-bold">₹1,000 per referral</div>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">No limit on referrals. Earn more by referring more shops!</p>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const reviews = [
    {
      name: 'Rajesh Patel',
      shop: 'Patel Granite, Ahmedabad',
      text: 'Before this software, I used to spend 30 minutes just calculating measurements for one order. Now it takes 2 minutes. My customers are impressed with the professional invoices.',
      rating: 5,
    },
    {
      name: 'Mohammed Irfan',
      shop: 'Irfan Marble Works, Hyderabad',
      text: 'The WhatsApp sharing feature is a game changer. I send the quotation right in front of the customer. They see the calculation and trust the bill immediately.',
      rating: 5,
    },
    {
      name: 'Suresh Kumar',
      shop: 'Kumar Granite Palace, Bangalore',
      text: 'I was using Excel for billing. So many mistakes. Since I started using Granite Billing Pro, zero calculation errors. Worth every rupee.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-amber-400">500+</span> Granite Shops
          </h2>
          <p className="text-slate-400 text-lg">Real shop owners, real results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/30 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <IconStar key={j} />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 italic">"{review.text}"</p>
              <div>
                <div className="text-white font-semibold">{review.name}</div>
                <div className="text-slate-500 text-sm">{review.shop}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FAQ SECTION ============
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      q: 'How does the square feet calculation work?',
      a: 'Simply enter the length and width in inches for each granite piece. The software automatically calculates: Length × Width ÷ 144 = Square Feet. Then it multiplies by your rate per sq.ft to get the amount. No manual calculation needed!',
    },
    {
      q: 'Can I handle multiple pieces with different sizes in one bill?',
      a: 'Yes! You can add as many pieces as you want — each with different dimensions, quantities, and rates. The software handles all the calculations automatically.',
    },
    {
      q: 'Does it generate GST-compliant invoices?',
      a: 'Absolutely. The software generates proper GST invoices with CGST, SGST, taxable amount, and grand total. You can configure your GST number and tax rates.',
    },
    {
      q: 'Can I share invoices on WhatsApp?',
      a: 'Yes! With one tap, you can share the generated PDF quotation or invoice directly to your customer\'s WhatsApp number. Professional and instant.',
    },
    {
      q: 'Do I need to install anything?',
      a: 'No installation needed. Granite Billing Pro works right in your web browser — on phone, tablet, or computer. Just open the link and start billing.',
    },
    {
      q: 'Is my data safe?',
      a: 'Your data is backed up to the cloud automatically. You can also export everything as a JSON file for your own backup. Your shop data is never lost.',
    },
    {
      q: 'Can I create backdated invoices?',
      a: 'Yes, the software supports backdated invoices for when you need to record past transactions. You can also create blank invoices and complete them later.',
    },
    {
      q: 'How many devices can I use?',
      a: 'Monthly plan supports 1 device, Yearly plan supports 2 devices, and Enterprise plan supports up to 5 devices. All synced with cloud backup.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/80 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA SECTION ============
function CTASection() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Simplify Your Granite Billing?
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Join 500+ granite shop owners who save hours every day with Granite Billing Pro. 
          Start your free trial today — no credit card required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#pricing" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/25 text-lg">
            Start Free Trial
            <IconArrowRight />
          </a>
          <a href="https://wa.me/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg">
            <IconWhatsapp />
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <IconCheck />
            <span>Free 7-day trial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IconCheck />
            <span>No credit card needed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IconCheck />
            <span>Setup in 2 minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IconCheck />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">G</span>
              </div>
              <span className="text-white font-bold text-xl">Granite Billing Pro</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The smartest billing software for granite & marble shops. Convert inch measurements to square feet instantly and generate professional invoices.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">WhatsApp Support</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Granite Billing Pro. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Made with ❤️ for Granite & Marble Shop Owners
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <ReferralSection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
