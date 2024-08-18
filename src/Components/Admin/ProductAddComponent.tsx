import React, { useEffect, useState } from 'react';
import Sidebar from '../Admin/Sidebar';
import Navbar from '../Commen/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Create_Items, GetPid } from '../../Redux/Thunk/company/ItemsThunk';
import { RootState } from '../../Redux/Store/Store';

interface Product {
  id: string;
  name: string;
  companyName: string;
  distributor: string;
  buyPrice: number;
  sellPrice: number;
  gstIncluded: boolean;
  gstPercentage: string;
  type: string;
  brand: string;
  description: string;
  quantityUnit: string;
  storageLocation: string;
  minimumStockLevel: number;
}

const ProductAddComponent = () => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    companyName: '',
    distributor: '',
    buyPrice: 0,
    sellPrice: 0,
    gstIncluded: false,
    gstPercentage: '0%',
    type: 'goods',
    brand: '',
    description: '',
    quantityUnit: 'kg',
    storageLocation: '',
    minimumStockLevel: 0,
  });

  const dispatch = useDispatch<any>();
  const { pr_id } = useSelector((state: RootState) => state?.ItemsSlice);

  useEffect(() => {
    dispatch(GetPid());
  }, [dispatch]);

  useEffect(() => {
    setProduct({ ...product, id: `pr_id-${pr_id}` });
  }, [pr_id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id } = event.target;
    setProduct({ ...product, [name]: id });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(Create_Items(product)).then(() => {
      setProduct({
        id: `pr_id-${pr_id + 1}`,
        name: '',
        companyName: '',
        distributor: '',
        buyPrice: 0,
        sellPrice: 0,
        gstIncluded: false,
        gstPercentage: '0%',
        type: 'goods',
        brand: '',
        description: '',
        quantityUnit: 'kg',
        storageLocation: '',
        minimumStockLevel: 0,
      });
    });
  };

  return (
    <>
      <Navbar />
      <div className='flex h-screen'>
        <Sidebar />
        <div className="w-full p-8 bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-4 gap-6">
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="type">
                  Type
                </label>
                <div className="flex items-center">
                  <label className="text-gray-600 text-sm font-bold mr-2" htmlFor="goods">
                    Goods
                  </label>
                  <input
                    className="mr-2"
                    id="goods"
                    type="radio"
                    name="type"
                    value="goods"
                    checked={product.type === 'goods'}
                    onChange={handleRadioChange}
                  />
                  <label className="text-gray-600 text-sm font-bold mr-2" htmlFor="services">
                    Services
                  </label>
                  <input
                    className="mr-2"
                    id="services"
                    type="radio"
                    name="type"
                    value="services"
                    checked={product.type === 'services'}
                    onChange={handleRadioChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="id">
                  Product ID
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="id"
                  type="text"
                  name="id"
                  value={product.id}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">
                  Product Name
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="name"
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="companyName">
                  Manufacturer
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={product.companyName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="brand">
                  Brand
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="brand"
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="distributor">
                  Distributor
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="distributor"
                  type="text"
                  name="distributor"
                  value={product.distributor}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="description"
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="buyPrice">
                  Buy Price
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="buyPrice"
                  type="number"
                  name="buyPrice"
                  value={product.buyPrice}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="sellPrice">
                  Sell Price
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="sellPrice"
                  type="number"
                  name="sellPrice"
                  value={product.sellPrice}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="gstPercentage">
                  GST%
                </label>
                <select
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="gstPercentage"
                  name="gstPercentage"
                  value={product.gstPercentage}
                  onChange={handleSelectChange}
                >
                  <option value="0%">0%</option>
                  <option value="5%">5%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                  <option value="28% + CESS">28% + CESS</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="quantityUnit">
                  Quantity Unit
                </label>
                <select
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="quantityUnit"
                  name="quantityUnit"
                  value={product.quantityUnit}
                  onChange={handleSelectChange}
                >
                  <option value="kg">kg</option>
                  <option value="pcs">pcs</option>
                  <option value="liter">liter</option>
                  <option value="meter">meter</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="storageLocation">
                  Storage Location
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="storageLocation"
                  type="text"
                  name="storageLocation"
                  value={product.storageLocation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="minimumStockLevel">
                  Minimum Stock Level
                </label>
                <input
                  className="w-full p-2 border border-green-300 text-sm rounded-lg"
                  id="minimumStockLevel"
                  type="number"
                  name="minimumStockLevel"
                  value={product.minimumStockLevel}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductAddComponent;
