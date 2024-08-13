import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Commen/Navbar';
import nextId from "react-id-generator"

interface Product {
  id: string;
  name: string;
  companyName: string;
  distributor: string;
  buyPrice: number;
  sellPrice: number;
  gstIncluded: boolean;
  gstPercentage: string;
  type : string
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
    type : "goods"
  });

  useEffect(()=>{
    setProduct({...product,["id"]:nextId("pr-id-")})
  },[])

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
    console.log(event.target.id);
    
    setProduct({ ...product, [name]: id });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(product);
  };

  return (
    <>
    <Navbar />
    <div className='flex h-screen'>
    <Sidebar />
    <div className="w-full  p-8 bg-white rounded-lg ">
      <h2 className="text-2xl font-bold text-green-500 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="gstIncluded">
             type
            </label>
          
          </div>
          <div>
          <label className=" text-gray-600 text-sm font-bold" htmlFor="gstIncluded">
             Goods
            </label>
          <input
              className="ml-2 mr-2 "
              id="goods"
              type="radio"
              name="type"
              defaultChecked
              onChange={handleRadioChange}
            />
            <label className=" text-gray-600 text-sm font-bold" htmlFor="gstIncluded">
             Servies
            </label>
             <input
              className="ml-2 mr-2 "
              id="servies"
              type="radio"
              name="type"
              onChange={handleRadioChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="id">
              Product ID
            </label>
            <input
              className="w-full p-2 pl-10 text-sm border text-gray-700 rounded-lg  "
              id="id"
              type="text"
              name="id"
              value={product.id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">
              Product Name
            </label>
            <input
              className="block w-full p-2 pl-10 border text-sm text-gray-700 rounded-lg "
              id="name"
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="companyName">
            Manufacturer
            </label>
            <input
              className="block w-full p-2 pl-10 border text-sm text-gray-700 rounded-lg "
              id="companyName"
              type="text"
              name="companyName"
              value={product.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="companyName">
            Brand
            </label>
            <input
              className="block w-full p-2 pl-10 border text-sm text-gray-700 rounded-lg "
              id="companyName"
              type="text"
              name="companyName"
              value={product.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-600  text-sm font-bold mb-2" htmlFor="distributor">
              Distributor
            </label>
            <input
              className="block w-full p-2 pl-10 text-sm border text-gray-700 rounded-lg "
              id="distributor"
              type="text"
              name="distributor"
              value={product.distributor}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="companyName">
            Description
            </label>
            <input
              className="block w-full p-2 pl-10 border text-sm text-gray-700 rounded-lg "
              id="companyName"
              type="text"
              name="companyName"
              value={product.companyName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="buyPrice">
              Buy Price
            </label>
            <input
              className="block w-full p-2 pl-10 text-sm border text-gray-700 rounded-lg "
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
              className="block w-full p-2 pl-10 text-sm border text-gray-700 rounded-lg"
              id="sellPrice"
              type="number"
              name="sellPrice"
              value={product.sellPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="gstPercentage">
                GST%
              </label>
              <select
                className="block w-full p-2 pl-10 border text-sm text-gray-700 rounded-lg "
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
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="gstIncluded">
              Image
            </label>
            <input
              className="mr-2 "
              id=""
              type="file"
              name=""
            />
          </div>
        </div>
        <div className='flex justify-center'>
        <button
          className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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