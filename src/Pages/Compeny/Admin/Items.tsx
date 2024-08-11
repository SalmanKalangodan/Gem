import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
  type: string;
  productID: string;
  manufacturer: string;
  brand: string;
  description: string;
  buyPrice: number;
  sellPrice: number;
  gstPercentage: number;
  image: string;
}

const mockData: Item[] = [
  {
    type: 'Electronics',
    productID: 'E123',
    manufacturer: 'Sony',
    brand: 'PlayStation',
    description: 'Gaming Console',
    buyPrice: 300,
    sellPrice: 450,
    gstPercentage: 18,
    image: 'https://via.placeholder.com/32',
  },
  {
    type: 'Home Appliance',
    productID: 'H456',
    manufacturer: 'Samsung',
    brand: 'Smart TV',
    description: '55 inch 4K TV',
    buyPrice: 600,
    sellPrice: 900,
    gstPercentage: 18,
    image: 'https://via.placeholder.com/32',
  },
];

const ItemListing = () => {
  const [items, setItems] = useState<Item[]>(mockData);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()

  const handleAddItem = () => {
    navigate("/companies/dashboard/items/add")
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleAdd = (item: Item) => {
    setItems([...items, item]);
    setShowModal(false);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Item Listing</h2>
        <button
          className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          onClick={handleAddItem}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          New
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-gray-50 rounded-lg">
          <thead className="bg-green-100 text-green-700">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Product ID</th>
              <th className="px-4 py-2 text-left">Manufacturer</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Buy Price</th>
              <th className="px-4 py-2 text-left">Sell Price</th>
              <th className="px-4 py-2 text-left">GST %</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-green-50 transition duration-200">
                <td className="px-4 py-2 border-b">
                  <img src={item.image} alt="Item" className="w-10 h-10 rounded-full" />
                </td>
                <td className="px-4 py-2 border-b">{item.type}</td>
                <td className="px-4 py-2 border-b">{item.productID}</td>
                <td className="px-4 py-2 border-b">{item.manufacturer}</td>
                <td className="px-4 py-2 border-b">{item.brand}</td>
                <td className="px-4 py-2 border-b">{item.description}</td>
                <td className="px-4 py-2 border-b">{item.buyPrice}</td>
                <td className="px-4 py-2 border-b">{item.sellPrice}</td>
                <td className="px-4 py-2 border-b">{item.gstPercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Item</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Type:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Product ID:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Manufacturer:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Brand:</label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Description:</label>
                <textarea
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Buy Price:</label>
                <input
                  type="number"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Sell Price:</label>
                <input
                  type="number"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">GST Percentage:</label>
                <input
                  type="number"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Image:</label>
                <input
                  type="file"
                  className="block w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                  onClick={() => handleAdd({
                    type: '',
                    productID: '',
                    manufacturer: '',
                    brand: '',
                    description: '',
                    buyPrice: 0,
                    sellPrice: 0,
                    gstPercentage: 0,
                    image: '',
                  })}
                >
                  Add
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-200"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListing;
