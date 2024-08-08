import Navbar from '../Commen/Navbar';
import Sidebar from './Sidebar';


const AccountingDashboard = () => {
  

  return (
    <>
    <Navbar />
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h1 className="text-2xl font-bold text-green-600">Welcome to Accounting Dashboard</h1>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold text-green-600">Total Invoices</h2>
              <p className="text-3xl font-bold text-gray-600">$10,000</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold text-green-600">Total Payments</h2>
              <p className="text-3xl font-bold text-gray-600">$5,000</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold text-green-600">Total Receipts</h2>
              <p className="text-3xl font-bold text-gray-600">$2,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AccountingDashboard;