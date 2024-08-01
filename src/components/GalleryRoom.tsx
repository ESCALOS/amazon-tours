import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function GalleryRoom({ images }: { images: string[] }) {
  const galleryID = "gallery-tours"
  const options = {
    gallery: '#' + galleryID,
    children: 'a',
    pswpModule: () => import('photoswipe'),
  }
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox(options);
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
            data-pswp-width={831}
            data-pswp-height={552}
            key={galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
            aria-label="Imagen de Iquitos, Amazon Irapay, Cumaceba Lodge"
            className='shadow-sm'
          >
            <div className='relative group cursor-pointer'>
              <img loading='eager' src={image} alt="Irapay Amazon" className='object-cover object-top w-full h-full rounded-md' />
              <p className='flex text-white bg-black bg-opacity-80 text-2xl absolute font-bold w-full gap-2 items-center top-0 h-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
                Iquitos Expedition
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
