import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src="/images/logo-chevrolet.svg" alt="Chevrolet" width={94} height={30} />
        </Link>
    )
}

export default Logo