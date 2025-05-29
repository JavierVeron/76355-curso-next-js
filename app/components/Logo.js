import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/coderhouse-76355.firebasestorage.app/o/logo-chevrolet.svg?alt=media&token=1a5310e1-b412-42b3-9bcf-5b66e73f4275" alt="Chevrolet" width={94} height={30} />
        </Link>
    )
}

export default Logo