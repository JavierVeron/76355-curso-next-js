"use client"
import { useState } from "react"
import MenuList from "./MenuList";
import Image from "next/image";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <>
            <div onClick={handleOpen}>
                <Image src={"https://firebasestorage.googleapis.com/v0/b/coderhouse-76355.firebasestorage.app/o/menu.svg?alt=media&token=99237f1f-b321-494c-8a91-e6360d99da07"} alt={"Menu"} width={32} height={16} style={{height:"auto"}} />
            </div>
            <MenuList open={open} handleClose={handleClose} />
        </>
    )
}

export default Menu