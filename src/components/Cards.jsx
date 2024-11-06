import React from 'react'
import photon3 from "../image/alexa-west-OOTEpsO2eV0-unsplash.jpg"
import photon4 from "../image/christoph-schulz-7tb-b37yHx4-unsplash.jpg"
import photon5 from "../image/daniel-burka-oR9ZisoF_NE-unsplash.jpg"
import photon6 from "../image/fahrul-azmi-BCEexmxL9EQ-unsplash.jpg"

import photon7 from "../image/heather-shevlin-3B_NrzTjajc-unsplash.jpg"
import photon8 from "../image/kevin-et-laurianne-langlais-QveJH1hA2sI-unsplash.jpg"

import photon9 from "../image/fahrul-azmi-gyKmF0vnfBs-unsplash.jpg"
import photon10 from "../image/gaddafi-rusli-2ueUnL4CkV8-unsplash.jpg"


export default function Cards() {

  const products = [
    {
      id: 1,
      name: 'Bali',
      href: '#',
      price: '$4800',
      imageSrc: photon3,
      imageAlt: 'Bali',
    },
    {
      id: 2,
      name: 'Dubai',
      href: '#',
      price: '$6500',
      imageSrc: photon4,
      imageAlt: 'Dubai',
    },
    {
      id: 3,
      name: 'Turkey',
      href: '#',
      price: '$5500',
      imageSrc: photon5,
      imageAlt: 'Turkey',
    },
    {
      id: 4,
      name: 'India',
      href: '#',
      price: '$4500',
      imageSrc: photon6,
      imageAlt: 'India',
    },
    {
      id: 4,
      name: 'Malaysia',
      href: '#',
      price: '$4500',
      imageSrc: photon9,
      imageAlt: 'India',
    },
    {
      id: 3,
      name: 'Arabia',
      href: '#',
      price: '$6500',
      imageSrc: photon7,
      imageAlt: 'Turkey',
    },
    {
      id: 2,
      name: 'Egypt',
      href: '#',
      price: '$7500',
      imageSrc: photon8,
      imageAlt: 'Dubai',
    },
    {
      id: 1,
      name: 'Srilanka',
      href: '#',
      price: '$4800',
      imageSrc: photon10,
      imageAlt: 'Bali',
    },

  ]
  
  return (
    <>
      <div className="bg-white" id="popular">
      <h3 className='text-[40px] font-semibold font-serif mt-20'>Popular Destinations</h3>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className=" h-[26.25rem] aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h1 className="mt-4 text-sm text-gray-700 font-semibold">
                  {product.name}
                </h1>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>;

    </>
  )
}

