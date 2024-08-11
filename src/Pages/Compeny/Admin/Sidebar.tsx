import { Link } from 'react-router-dom';

interface SidebarItem {
  name: string;
  icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1.5a6.5 6.5 0 11-6.36 8.133l.23-.413a5.522 5.522 0 001.36-.275l.42.727a6.5 6.5 0 014.34-11.5zm-5.83 8.18l1.47-1.47 3.54 3.54-1.47 1.47a6.504 6.504 0 01-3.54-3.54z"/></svg> },
  { name: 'Bills', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-4-4m0 0l4-4m-4 4h12.5m-12.5 0H15m0 0L9 7m0 8l6-6" /></svg> },
  { name: 'Invoices', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6.5 2.5A1.5 1.5 0 005 4v12a1.5 1.5 0 001.5 1.5h7A1.5 1.5 0 0015 16V4a1.5 1.5 0 00-1.5-1.5h-7zm4 12a.5.5 0 010-1h3a.5.5 0 010 1h-3zm-4-1.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm4-3a.5.5 0 010-1h3a.5.5 0 010 1h-3zm-4-1.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z"/></svg> },
  { name: 'Items', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 11h18M3 15h18M3 19h18" /></svg> },
  { name: 'Transactions', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8m10 7h-4v-2h4v2zm-8 0H6v-2h4v2zM5 7h14V5H5v2zm3-2v2h2V5H8zm2 0v2h2V5h-2zM6 5v2h2V5H6zm10 12h2v2h-2v-2z"/></svg> },
  { name: 'Reports', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-4-4-7 7M19 3v6h-6" /></svg> },
  { name: 'Payments', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11H3m0 0l3.65-3.65a2.5 2.5 0 013.54 0L12 9m0 0l2.86-2.85a2.5 2.5 0 013.54 0L21 11m0 0h-7a2 2 0 00-4 0H3m0 0h7a2 2 0 004 0h7" /></svg> },
  { name: 'Receipts', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8m-8 4h8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg> },
];

const Sidebar = () => {
  return (
    <div className="bg-white border-r border-green-200 max-w-56 p-6 h-fit sticky top-1 z-10 transition-transform duration-300">
      {/* <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-green-700">Dashboard</h2>
      </div> */}
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className="mb-4">
            <Link to={`/companies/dashboard/${item.name}`}>
              <div className="flex items-center p-2 text-green-600 hover:text-white hover:bg-green-500 rounded-lg transition-colors duration-200">
                {item.icon}
                <span className="ml-3 text-sm font-medium">{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
