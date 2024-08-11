import { useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate = useNavigate()
const token  = localStorage.getItem("accessToken")


  return (
    <nav className="bg-white py-4">
    <div className="container mx-auto flex justify-between items-center p-2">
      <a href="#" className="text-lg font-bold text-green-500 p-2">Gem</a>
      <ul className="flex items-center space-x-8">
        <li>
          <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Services</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">Contact</a>
        </li>
      </ul>
      { !token ?<button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 " onClick={()=>navigate('/companies/login')}>
        Login
      </button> : <div className="px-4 py-2"></div>}
    </div>
  </nav>
  );
};

export default Navbar;
