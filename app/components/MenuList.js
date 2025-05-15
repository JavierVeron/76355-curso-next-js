const MenuList = ({open, handleClose}) => {
    return (
        <div className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${open ? "" : "translate-x-50"} transition-all w-48 bg-gray-500`}>
                <div className="text-white p-5" onClick={handleClose}>[ X ]</div>
                <nav className="flex flex-col py-5">
                    <a href="#" className="text-white p-5">Link #1</a>
                    <a href="#" className="text-white p-5">Link #2</a>
                    <a href="#" className="text-white p-5">Link #3</a>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList