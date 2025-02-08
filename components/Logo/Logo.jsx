import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/icons/logo.svg"
          alt="Protocol"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  )
}
