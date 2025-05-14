
import React from 'react';

const categories = [
  {
    id: 1,
    name: "Silk Sarees",
    image: "https://media-hosting.imagekit.io/7e7489ec837845a2/saree%2012.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xt9C9LF-QIFdGrgYn-7rU-KEfCcxvxZGPNlUKctj0WtzafKz5mQTV3hbO3QkMBMNZUZ9Z1-vB9AsN3qXBV4npcBVYk55ydhkv3GZVKNohT6RBe~cVzzlvsqwuAMSUbW4HB4jsBOpuD4w0dahCRm~GYdhQJLoHAoPD-VFMdztxr4mp35m7kq0~GH-y9Yjksday3-40n1P0Gq9UCf96DDaTT5pcXgy6cY-KN47tLHCSNhc40~nHjvdDbkNuVhuQbLeECmMRfPWzO-7VFi-yGAI52qYOcrOfqyOM2CJuVAXIY-zmXecGZCnqvePMmk8kt73zMtCoLvvx5T7ykmYdLz53w__",
    count: 126,
    slug: "silk"
  },
  {
    id: 2,
    name: "Cotton Sarees",
    image: "https://media-hosting.imagekit.io/a030b2a806604b55/saree%2010.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0-cgegnnfsCqf67Qq9xVk5SOxwbMNX9vJM3ynnjZ-8DyPsEDXbZPuBbTxv2LLipbEjsNwH71mDKX2wn5AXaERVJc-AH4sOmNaq8IlTEcI7Ed2PhkZrWk1c2Jt5A-KnBZV01BMpCPpz81RfYMwuvAEkEC9ErjQPL6CQziJiJi5TzH5o9dHb96mXxVaOjKd4CSbrj3OVv12H9QfmKUi5YUgubG3LFqGfR0zieusQWPjIKEyAb7hXssIrnQIF5Sz7fAYvPEmDPTxEhwpU~H9jzKZwfAQXrE1iGl5GEbI05Fhzo1iMRkzBFdDwlaR77qZjZr4XcqNt4R84p319EhsRxUUA__",
    count: 84,
    slug: "cotton"
  },
  {
    id: 3,
    name: "Designer Sarees",
    image: "https://media-hosting.imagekit.io/2310f1d6da7747c2/saree%2013.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eQIDd-hQt57haLQjpyhDFYfR7PPwevm6eESKwayj0eGZ1dG1oObHnEJbv0JAh9mmqaFk63Wc71bfDPy1POhsz7FhWg~tO9Eie3uoB9hTpyhW4j6YWzw~0qBdTPqIGEgxI60WgKQxSZSSrnxzkMWuFeg1yrjtIdP8Zl4G18caHuDkWcF9~3C1mOotxvhQD~cDVJEusqpY8tXVzC5FcRnslcHT1NCEYcJ-eXbZTSrJaXPOZukBvPTPBbWY90GMg~QvloypphmyJZNXZFC8k2rsjDnPGmk9VCJuDqBdS0H6BmjTOvmg6NVMFcSBYJsWvsJEpymjXbddnciVDnlocMXUTQ__",
    count: 58,
    slug: "designer"
  },
  {
    id: 4,
    name: "Bridal Sarees",
    image: "https://media-hosting.imagekit.io/df3708ea97ae4232/saree%207.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=B~mkk2znV0SzecatbRirFhScORkwOGA7OYPX5OBZHiWL5ZrO8sqLNnw6AGK3LD0qE6g5n71UI4Yx-qC5tHYnBYq3V-WgBvMN8j3Hgac3Nz6W4jfrldvuUL6TqexSVdqBRx2lS2N2i4zisgiLnOHU7USbHhadtYx73JasvaGzFDtOQsqsi15JlCx62jTWj36i-~D2tUTORr16fhxOzEMgSJwWHMV3beo4uqMBXCMWaiPj~4Z9KhpYd5zGQhHlhkq4tEov0IrofFlqD6UEi-s3nUSi7gpMq7VuvTxP2urDykgirKayymPIqlMrB5DJ1oEGia4kEV3JjgYKJZRaKOSDuQ__",
    count: 32,
    slug: "bridal"
  },
  {
    id: 5,
    name: "Casual Sarees",
    image: "https://media-hosting.imagekit.io/e48f5b713ef042a9/saree%208.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s9i0M7MVuWGlZOiIbHFubWos~f3~ibcI8aEY8p5rDDtfmcwG054TZ1HL4NF3EnqwEH5S38KH5ZQuS8C1ru0kyEyM1i3dQNExJzh6lvFm8ksjSXIJUhjz9ZLV7oLJ1pjoFdl5srqUwPdbUctrzjdMhj~59WHk~BmlVndPXI2wEeP2VLs~nNOhTzk-lekyxUwfxdN72KlqL76nJSjOVkxhVS5MZvKjsPZsOzeSmFrklP0rN3qmJX6hFeG4z7MU04yA-e9Elrx68v3uv4nnanxd~d5fK4uMng~9LaUQbo88EMMY-p-6zqN56gXLIEnsiYZj-j60Gybaqs2PQ74YodQkrQ__",
    count: 47,
    slug: "casual"
  }
];

const CategoriesSection = () => {
  return (
    <section id="collections" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Collections</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
          Explore our diverse range of sarees crafted with love and tradition, showcasing the rich heritage of Indian craftsmanship.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              id={category.slug}
              className={`relative overflow-hidden rounded-lg group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              style={{ height: index === 0 ? '600px' : '300px' }}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-playfair text-xl md:text-2xl font-semibold">{category.name}</h3>
                <p className="text-gray-200 text-sm mt-2">{category.count} Products</p>
                <a 
                  href={`#${category.slug}`} 
                  className="inline-block mt-4 text-white border-b-2 border-saree-gold hover:border-white transition-colors duration-300"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
