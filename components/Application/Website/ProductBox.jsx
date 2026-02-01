import Link from "next/link";

const ProductBox = ({ product }) => {
    return (
        <div className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
                <img
                    src={product.media?.[0]?.secure_url || product.media?.[0]?.path || "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Link href={`/product/${product.slug || product._id}`} className="bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full hover:bg-white hover:text-accent transition-colors">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                       </svg>
                    </Link>
                    <button 
                        onClick={() => window.location.href = `/product/${product.slug || product._id}`}
                        className="bg-primary/90 backdrop-blur-sm text-white px-4 py-3 rounded-full font-medium text-sm hover:bg-primary transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-widest font-medium text-primary shadow-sm">
                    {product.category?.name || 'Handcrafted'}
                </div>
            </div>
            
            <div className="p-4 text-center">
                <Link href={`/product/${product.slug || product._id}`}>
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-1 cursor-pointer">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-primary-foreground font-medium">${product.sellingPrice || product.mrp}</p>
            </div>
        </div>
    )
}

export default ProductBox