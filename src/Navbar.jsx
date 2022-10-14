
function Navbar() {
    return (  
        <nav className="flex justify-between">
           <div>
                <h2 className="text-[1.5rem] text-blue-400 font-extrabold">Some<span className="text-blue-600">Company</span></h2>
           </div>
           <div>
                <ul className="flex w-[300px] lg:w-[500px] justify-between font-semibold text-white text-lg">
                    <li>Home</li>
                    <li>Products</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
           </div>
        </nav>
    );
}

export default Navbar;