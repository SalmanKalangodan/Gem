import { useParams } from 'react-router-dom';
import Navbar from '../Commen/Navbar';
import Sidebar from './Sidebar';
import LandingPage from './LandingPage';
// import ProductAddComponent from './ProductAddComponent';
import ItemListing from './Items';


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
      {route === "Dashboard"?   <LandingPage /> : route === "Items" ? <ItemListing /> : null }
      </div>
    </div>
    </>
  );
};

export default AccountingDashboard;