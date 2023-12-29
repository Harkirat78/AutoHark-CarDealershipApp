/*
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ea91e6fc8msh5794b3f64993ef2p10d849jsn9851e579199f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/

import { CarProps } from "@/types";
import { FilterProps } from "@/types";


//call API fetching code for both car Images and car Details

export async function fetchCars(filters: FilterProps) {

    //import car features for search
    const {manufacturer, year,model,limit, fuel} = filters;
    const headers = {
        'X-RapidAPI-Key': '6ea91e6fc8msh5794b3f64993ef2p10d849jsn9851e579199f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    });

    const result = await response.json();
    return result;
} 

//not sccurate - made using AI - chatgpt
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
}

//import for all the car images
export const generateCarImageUrl = (car: CarProps, angle?: string ) => {
    //key for images

    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make,year,model} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
     // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
    
    return `${url}`;

}

//for custom fileters
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
}




