import {useState} from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex bg-gray-900 text-white justify-between items-center p-4">
            <h1 className="text-2xl font-bold"> Jad BANI JARID </h1>
            <ul className="hidden md:flex space-x-8">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                    <li key={item} className="cursor-pointer hover:text-indigo-400 transition-colors duration-200 text-xl">{item}</li>
                ))}
            </ul>

            <div className="md:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX size={24}/> : <HiMenu size={24}/>} 
            </div>

            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {["Home", "About", "Projects", "Contact"].map((item) => (
                    <li key={item} className="text-2xl cursor-pointer hover:text-indigo-400 transition-colors duration-200 list-none" 
                        onClick={() => setIsOpen(false)}>{item}</li>
                ))}
            </div>
            
        </nav>    
    )
}

export default Navbar;
