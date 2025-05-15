"use client"

const Boton = ({children, className="", ...args}) => {
    return (
        <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-700 font-black focus:outline-none rounded-lg border border-yellow-600 hover:bg-yellow-600 hover:text-gray-900 ${className}`} {...args}>{children}</button>
    )
}

export default Boton