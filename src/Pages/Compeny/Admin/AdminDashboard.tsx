import { useParams } from 'react-router-dom';
import Navbar from '../../../Components/Commen/Navbar';
import Sidebar from '../../../Components/Admin/Sidebar';
import LandingPage from '../../../Components/Admin/LandingPage';
// import ProductAddComponent from './ProductAddComponent';
import ItemListing from '../../../Components/Admin/Items';
import Bills from '../../../Components/Admin/Bills';


const AccountingDashboard = () => {
  const {route} = useParams()

  return (
    <>
    <Navbar />
    <div className="flex h-screen">
        <div className='m-0'>
      <Sidebar />
      </div>
      <div className='overflow-scroll m-0 w-full no-scrollbar'>
      {route === "Dashboard"?   <LandingPage /> : route === "Items" ? <ItemListing /> : route === "Bills" ? <Bills /> : null }
      </div>
    </div>
    </>
  );
};

export default AccountingDashboard;