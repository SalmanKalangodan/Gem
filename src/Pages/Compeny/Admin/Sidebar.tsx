import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTachometerAlt, faFileInvoiceDollar, faFileInvoice, faExchangeAlt, faChartBar, faCreditCard, faReceipt } from '@fortawesome/free-solid-svg-icons';

interface SidebarItem {
  name: string;
  icon: any;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: faTachometerAlt },
  { name: 'Bills', icon: faFileInvoiceDollar },
  { name: 'Invoices', icon: faFileInvoice },
  { name: 'Transactions', icon: faExchangeAlt },
  { name: 'Reports', icon: faChartBar },
  { name: 'Payments', icon: faCreditCard },
  { name: 'Receipts', icon: faReceipt },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`bg-green-100 w-64 p-6 fixed top-0 left-0 h-screen z-10 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-green-600">Accounting Dashboard</h2>
          <button
            className="text-green-600 hover:text-green-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4">
              <a
                href="#"
                className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={item.icon} size="lg" className="mr-3" />
                <span className="text-lg">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Sidebar overlay when closed */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-5 transition-opacity duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
