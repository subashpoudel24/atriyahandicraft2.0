"use client"
import WebsiteBreadcrumb from "@/components/Application/Website/WebsiteBreadcrumb"
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const breadcrumb = {
  title: "Our Story",
  links: [{ label: "About Us" }],
}

const AboutUs = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 80%",
        }
      });

      gsap.from(".premium-card", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".premium-card",
          start: "top 85%",
        }
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#FAF9F6] selection:bg-primary/20">
      <WebsiteBreadcrumb props={breadcrumb} />

      {/* Hero Manifesto */}
      <section className="relative py-32 overflow-hidden border-b border-primary/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <img src="/assets/home/texture.png" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-8 inline-block reveal-text">Since 1985 • Kathmandu</span>
          <h1 className="text-5xl md:text-8xl font-serif text-foreground mb-12 leading-[1.05] reveal-text">
            The Soul of <br />
            <span className="italic font-normal text-primary/80">Nepalese Artistry</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed reveal-text">
            At Atriya, we believe that luxury is not just a price point—it's a story of patience,
            purity, and the preservation of generational wisdom.
          </p>
        </div>
      </section>

      {/* The Heritage Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
              <img
                src="/assets/home/weaving.png"
                alt="Master Weaving"
                className="relative rounded-xl shadow-2xl w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-2xl shadow-2xl hidden md:block border border-primary/5">
                <div className="text-5xl font-serif text-primary mb-1">5.2k</div>
                <div className="text-xs uppercase tracking-widest font-black text-muted-foreground">Artisan Hours <br /> Per Collection</div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">Born in the <br /> Himalayan Silence</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Our origins lie in the shadow of the world's highest peaks. Here, the Chyangra goats
                  endure extreme winters, producing a fiber so fine it's known as "Soft Gold."
                  This is where the Atriya legacy begins.
                </p>
                <p>
                  Every thread is hand-combed, hand-spun, and hand-woven on traditional looms that
                  have hummed in the valleys of Kathmandu for centuries. We don't just sell shawls;
                  we preserve a heartbeat.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="border-l-2 border-primary/20 pl-6">
                  <h4 className="font-bold text-foreground mb-1">Authenticity</h4>
                  <p className="text-sm text-muted-foreground leading-snug">Grievance-free sourcing & 100% purity certified.</p>
                </div>
                <div className="border-l-2 border-primary/20 pl-6">
                  <h4 className="font-bold text-foreground mb-1">Welfare</h4>
                  <p className="text-sm text-muted-foreground leading-snug">Supporting over 100 weaver families directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Craftsmanship Grid */}
      <section className="py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Four Pillars</h2>
            <p className="text-muted-foreground text-lg font-light tracking-wide max-w-xl mx-auto">The meticulous standard of Atriya Pashmina.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: "🐐", title: "Fiber Purity", desc: "15.5 micron grade Chyangra wool from the highest altitudes." },
              { step: "02", icon: "🧵", title: "Human Touch", desc: "No machines touch our threads during the spinning process." },
              { step: "03", icon: "🎨", title: "Natural Dye", desc: "Eco-friendly, AZO-free dyes that protect the fiber integrity." },
              { step: "04", icon: "✨", title: "Final Polish", desc: "Hand-finished tassels and steam-softening for ultimate luxury." }
            ].map((pillar, i) => (
              <div key={i} className="premium-card bg-white p-10 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="text-primary/10 font-serif text-6xl absolute top-4 right-8 pointer-events-none group-hover:text-primary/5 transition-colors">{pillar.step}</div>
                <div className="text-4xl mb-6 relative z-10">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed relative z-10">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-16">Global Reach, Himalayan Heart</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-primary/10 py-16">
            {[
              { val: "50+", label: "Countries Served" },
              { val: "120+", label: "Master Artisans" },
              { val: "38", label: "Years of Heritage" },
              { val: "100%", label: "Lab Certified" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-serif text-primary">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-24 bg-primary p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 relative z-10">Own a piece of the <br /> Himalayan legacy.</h2>
            <Link href="/shop" className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all hover:scale-105 relative z-10">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
