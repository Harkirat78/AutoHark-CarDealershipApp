import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-betweem items-center sm:px-16 px-5 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image
                    src="/autohark-high-resolution-logo-transparent copy.png"
                    alt="Car Hub Logo"
                    width={118}
                    height={18}
                    className="object-contain"
                >

                </Image>
            </Link>

            <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles="text-ecab55 rounded-full bg-white min-w-[130px]"
                //handleClick={() => {}}
            />
        </nav>
    </header>
  )
}

export default Navbar