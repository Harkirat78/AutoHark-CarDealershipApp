"use client"

import { useRouter } from "next/navigation"
import { LoadMoreProps } from "@/types"
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const LoadMore = ( {pageNumber, isNext}: LoadMoreProps) => {

    const router = useRouter();
    const handleNavigation = () => {
        
        const newLimit = (pageNumber +1)*10; //maximum amount of cars allowed on 1 page
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);
    }

  return (
    <div className="w-full flex-center gap-6 mt-11">
        {!isNext && (
            <CustomButton 
                title="Load More Cars"
                btnType="button"
                containerStyles="bg-gold rounded-full text-white"
                handleClick={handleNavigation}
            />
        )}

    </div>
  )
}

export default LoadMore