'use client';

export default function ScrollAnimations({ children }) {
    return (
        <div>
            {/* Example sections with AOS animations */}
            <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h1 data-aos="fade-up">Welcome to Atriya Handicraft</h1>
                <p data-aos="fade-up" data-aos-delay="200">Beautiful handcrafted items</p>
            </section>

            <section style={{ padding: '100px 20px', textAlign: 'center', background: '#f5f5f5' }}>
                <div data-aos="fade-right">
                    <h2>Our Products</h2>
                    <p>Discover amazing handicrafts</p>
                </div>
            </section>

            <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                <div data-aos="fade-left">
                    <h2>About Us</h2>
                    <p>Crafting excellence since years</p>
                </div>
            </section>

            <section style={{ padding: '100px 20px', textAlign: 'center', background: '#f5f5f5' }}>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h2>Contact</h2>
                    <p>Get in touch with us</p>
                </div>
            </section>

            {children}
        </div>
    );
}