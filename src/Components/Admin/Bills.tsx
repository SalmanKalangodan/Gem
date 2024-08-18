import React, { useState } from 'react';

interface Item {
  itemName: string;
  quantity: string;
  price: string;
  totalQuantityPrice: string;
}

const Bills: React.FC = () => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (`0${today.getMonth() + 1}`).slice(-2); // Months are 0-based
    const day = (`0${today.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const [billNumber, setBillNumber] = useState('');
  const [billDate, setBillDate] = useState(getTodayDate());
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [items, setItems] = useState<Item[]>([
    { itemName: '', quantity: '', price: '', totalQuantityPrice: '' },
  ]);
  const [gst, setGst] = useState('');
  const [totalBillAmount, setTotalBillAmount] = useState('');
  const [customerBalance, setCustomerBalance] = useState('');
  const [payment, setPayment] = useState('');
  const [description, setDescription] = useState('');

  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    // Automatically update total quantity price when quantity or price changes
    if (field === 'quantity' || field === 'price') {
      const quantity = parseFloat(updatedItems[index].quantity) || 0;
      const price = parseFloat(updatedItems[index].price) || 0;
      updatedItems[index].totalQuantityPrice = (quantity * price).toFixed(2);
    }

    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { itemName: '', quantity: '', price: '', totalQuantityPrice: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      billNumber,
      billDate,
      customerName,
      address,
      items,
      gst,
      totalBillAmount,
      customerBalance,
      payment,
      description,
    });
  };

  return (
    <div className="bg-white p-4 rounded-md mx-auto">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Create Bill</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Left Column for Items and Inline Bill Details */}
        <div className="md:col-span-2 lg:col-span-2">
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="billNumber">
                Bill Number
              </label>
              <input
                type="text"
                id="billNumber"
                className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                value={billNumber}
                onChange={(e) => setBillNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="billDate">
                Bill Date
              </label>
              <input
                type="date"
                id="billDate"
                className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                value={billDate}
                onChange={(e) => setBillDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="customerName">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1">Items</label>
            {items.map((item, index) => (
              <div key={index} className="mb-4 border-b border-green-300 pb-2">
                <div className="grid grid-cols-4 gap-2 mb-2">
                  <div>
                    <label className="block text-green-600 text-xs font-medium mb-1" htmlFor={`itemName-${index}`}>
                      Item Name
                    </label>
                    <input
                      type="text"
                      id={`itemName-${index}`}
                      className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      value={item.itemName}
                      onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-600 text-xs font-medium mb-1" htmlFor={`quantity-${index}`}>
                      Quantity
                    </label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-600 text-xs font-medium mb-1" htmlFor={`price-${index}`}>
                      Price
                    </label>
                    <input
                      type="number"
                      id={`price-${index}`}
                      className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-600 text-xs font-medium mb-1" htmlFor={`totalQuantityPrice-${index}`}>
                      Total Price
                    </label>
                    <input
                      type="number"
                      id={`totalQuantityPrice-${index}`}
                      className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      value={item.totalQuantityPrice}
                      onChange={(e) => handleItemChange(index, 'totalQuantityPrice', e.target.value)}
                      readOnly
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="text-red-600 text-xs hover:text-red-800 transition duration-150"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove Item
                </button>
              </div>
            ))}
            <button
              type="button"
              className="w-full bg-green-600 text-white py-1 rounded-sm shadow-sm hover:bg-green-700 transition duration-150 mt-2"
              onClick={handleAddItem}
            >
              Add Another Item
            </button>
          </div>
        </div>

        {/* Right Column for Additional Details */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="gst">
              GST
            </label>
            <input
              type="number"
              id="gst"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="totalBillAmount">
              Total Bill Amount
            </label>
            <input
              type="number"
              id="totalBillAmount"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={totalBillAmount}
              onChange={(e) => setTotalBillAmount(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="customerBalance">
              Customer Balance
            </label>
            <input
              type="number"
              id="customerBalance"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={customerBalance}
              onChange={(e) => setCustomerBalance(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="payment">
              Payment
            </label>
            <input
              type="number"
              id="payment"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-green-600 text-xs font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-2 py-1 border border-green-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>
        </div>

        {/* Centered Submit Button */}
        <div className="col-span-full flex justify-center">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-1 rounded-sm shadow-sm hover:bg-green-700 transition duration-150"
          >
            Submit Bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bills;
