import { FaBars, FaArrowLeft } from "react-icons/fa"

function NavMobile({isToggled, toggleNav}) {

    return (  
        <nav>
            <div className="flex justify-between items-center">
                <h2 className="text-blue-400 text-[1.5rem] font-bold">Some<span className="text-blue-600">Company</span></h2>
                { isToggled 
                    ? 
                    <i className="text-[1.5rem] font-bold text-white" onClick={()=>toggleNav()}><FaArrowLeft /></i> 
                    : 
                    <i className="text-[1.5rem] font-bold text-white" onClick={()=>toggleNav()}><FaBars /></i>
                }
            </div>
            <div className={isToggled ? "flex justify-start mt-4 text-md font-semibold text-yellow-200" : "hidden"}>
                <ul>
                    <li className="pt-4">Home</li>
                    <li className="pt-4">Products</li>
                    <li className="pt-4">FAQ</li>
                    <li className="pt-4">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavMobile;