// Importing the Hero component from the components directory
//import { Hero } from '@/components'

// Importing the Image component from the next.js library
//"use client" to show on browser

import Image from 'next/image'

import {CustomFilter, Hero, SearchBar, LoadMore} from '@/components'
import { fetchCars } from '@/utils';
import { CarCard } from '@/components';
import { fuels, yearsOfProduction } from '@/constants'; // index/constants
// This is the default export of the file, a functional component named Home
export default async function Home({searchParams}) {

  const allCars = await fetchCars({manufacturer: searchParams.manufacturer || '', year: searchParams.year, fuel: searchParams.fuel || '', limit: searchParams.limit || 10, model: searchParams.model || ''});

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;



  return (
    // The main HTML tag is used to wrap the main content of the document
    // The className attribute is used to apply CSS styles
    // In this case, 'overflow-hidden' is a utility class provided by Tailwind CSS to hide any child content that is outside the parent's box
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-wdith" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Vechile Catalogue</h1>
          <p>Explore through a wide range of choices</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard car={car}/> )}
            </div>

            <LoadMore 
                pageNumber={(searchParams.pageNumber || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
            />

          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
              
      </div>
    </main>
  )
}