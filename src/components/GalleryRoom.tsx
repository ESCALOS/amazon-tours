import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function GalleryRoom({ images }: { images: string[] }) {
  const galleryID = "gallery-room"
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-24" id={galleryID}>
      <h2 className='pb-16 text-4xl text-center font-semibold'>Galería</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <a
            href={image}
            data-pswp-width={840}
            data-pswp-height={400}
            key={galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
            aria-label='M&K House Room'
            className='shadow-sm'
          >
            <img loading='eager' src={image} alt="M&K House Room" className='object-cover object-top w-full h-full transition-all duration-500 rounded-md brightness-75 hover:brightness-100 cursor-zoom-in' />
          </a>
        ))}
      </div>
    </section>
  );
}
