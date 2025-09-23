import { useState, useEffect, useRef } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  
  // Danh sách các ảnh trong thư mục public
  const images = [
    '/4.png'
  ];

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging.current) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }
    }, 4000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setCurrentSlide(index);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      setIsTransitioning(true);
      
      if (swipeDistance > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
    
    isDragging.current = false;
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    e.preventDefault();
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      setIsTransitioning(true);
      
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
    
    isDragging.current = false;
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-content">
        <div 
          className="slideshow-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="slideshow-inner">
            <div 
              className="slideshow-track" 
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isTransitioning ? 'transform 0.3s ease' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="slide">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;