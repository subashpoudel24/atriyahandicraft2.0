import WebsiteBreadcrumb from "@/components/Application/Website/WebsiteBreadcrumb"
import Link from "next/link";

const breadcrumb = {
  title: "About",
  links: [{ label: "About" }],
}
const AboutUs = () => {
  return (
    <div className="bg-background">
      <WebsiteBreadcrumb props={breadcrumb} />

      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-5 lg:px-40">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">Atriya Handicraft</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Preserving the ancient art of Nepalese pashmina craftsmanship while connecting the world to authentic
              luxury textiles
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Est. in Nepal</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>Global Shipping</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Authentic Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-5 lg:px-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Our Nepalese Heritage</h2>
              <p className="text-muted-foreground mb-6">
                Nestled in the heart of the Himalayas, Nepal has been the birthplace of the world's finest pashmina for
                centuries. Atriya Handicraft was founded with a deep respect for this ancient tradition, working
                directly with local artisans who have passed down their skills through generations.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey began in the textile districts of Kathmandu, where we discovered the unparalleled quality of
                Nepalese craftsmanship. Today, we proudly bridge the gap between these master artisans and discerning
                customers worldwide.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-card-foreground mb-2">From the Himalayas to Your Home</h3>
                <p className="text-sm text-muted-foreground">
                  Each pashmina tells a story of tradition, skill, and the pristine mountain environment where it was
                  created.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="https://i.ibb.co/VYZdSTrY/nepalese-pashmina-weaver.png" alt="Nepalese Artisan" className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">The Art of Pashmina Making</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the meticulous process behind every authentic Nepalese pashmina, from the high-altitude goats to
              the final masterpiece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🐐</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Premium Fiber</h3>
              <p className="text-sm text-muted-foreground">Sourced from high-altitude Himalayan goats</p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Hand Spinning</h3>
              <p className="text-sm text-muted-foreground">Traditional spinning wheels create fine threads</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Master Weaving</h3>
              <p className="text-sm text-muted-foreground">Skilled artisans weave intricate patterns</p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Finish</h3>
              <p className="text-sm text-muted-foreground">Final inspection and luxury packaging</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-5 lg:px-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">Our Commitment to Excellence</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Welcome to Atriya Handicraft, your one-stop destination for quality, convenience, and innovation in
                authentic Nepalese pashmina shopping.
              </p>

              <p className="text-muted-foreground mb-8">
                Founded with a mission to redefine the luxury textile experience, we are passionate about bringing you a
                carefully curated selection of pashmina products that meet your everyday needs—whether it's fashion,
                home essentials, or lifestyle goods. Our goal is to deliver not just products, but value, trust, and a
                seamless shopping journey.
              </p>

              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                What sets us apart is our commitment to:
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Customer Satisfaction</h4>
                  <p className="text-muted-foreground text-sm">
                    Your happiness is our priority. From browsing to checkout, we're here to make your shopping
                    experience effortless and enjoyable.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Quality & Affordability</h4>
                  <p className="text-muted-foreground text-sm">
                    We partner directly with trusted Nepalese artisans and suppliers to offer high-quality products at
                    competitive prices.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Fast & Reliable Shipping</h4>
                  <p className="text-muted-foreground text-sm">
                    We understand the excitement of online shopping, so we work hard to ensure your orders arrive on
                    time, anywhere in the world.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Secure Shopping</h4>
                  <p className="text-muted-foreground text-sm">
                    Your data is safe with us. Our platform uses cutting-edge encryption and payment security
                    technologies.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                As a growing brand rooted in Nepalese tradition, we believe in constantly evolving—adding new products,
                improving our services, and listening to what our customers want. Whether you're shopping for yourself
                or finding the perfect gift, we're here to help you discover something you'll love.
              </p>

              <p className="text-muted-foreground">
                Thank you for choosing Atriya Handicraft. Let's make shopping for authentic luxury textiles smarter,
                simpler, and more enjoyable—together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Reach, Local Roots</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our workshops in Nepal to customers worldwide, we're proud to share authentic Nepalese craftsmanship
              across continents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-card-foreground font-semibold mb-2">Countries</div>
              <div className="text-sm text-muted-foreground">Worldwide shipping and satisfied customers</div>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-card-foreground font-semibold mb-2">Artisans</div>
              <div className="text-sm text-muted-foreground">Skilled craftspeople in our network</div>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-card-foreground font-semibold mb-2">Years</div>
              <div className="text-sm text-muted-foreground">Combined experience in textile craftsmanship</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-5 lg:px-40 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Experience Authentic Nepalese Luxury</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted pashmina products, each piece telling a story of tradition, quality,
            and timeless elegance.
          </p>
          <Link href="/shop">
            <button className="bg-background text-foreground cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
              Explore Our Collection
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
