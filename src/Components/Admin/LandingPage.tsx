import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
// import { ReactComponent as SalesIcon } from './icons/sales.svg';
// import { ReactComponent as PurchasesIcon } from './icons/purchases.svg';
// import { ReactComponent as PaymentsIcon } from './icons/payments.svg';
// import { ReactComponent as InvoicesIcon } from './icons/invoices.svg';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const LandingPage: React.FC = () => {
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Invoices',
                data: [3000, 4000, 3200, 5000, 6000, 7000],
                backgroundColor: 'rgba(34, 197, 94, 0.5)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(34, 197, 94, 0.7)',
                hoverBorderColor: 'rgba(34, 197, 94, 1)',
            },
            {
                label: 'Payments',
                data: [2000, 2500, 2200, 3000, 4000, 4500],
                backgroundColor: 'rgba(234, 88, 12, 0.5)',
                borderColor: 'rgba(234, 88, 12, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(234, 88, 12, 0.7)',
                hoverBorderColor: 'rgba(234, 88, 12, 1)',
            },
        ],
    };

    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Receipts',
                data: [1000, 1500, 1200, 2000, 3000, 3500],
                fill: false,
                backgroundColor: 'rgba(14, 165, 233, 1)',
                borderColor: 'rgba(14, 165, 233, 1)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 8,
            },
        ],
    };

    const pieChartData = {
        labels: ['Sales', 'Expenses', 'Profit'],
        datasets: [
            {
                data: [6000, 3000, 1000],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.5)',
                    'rgba(234, 88, 12, 0.5)',
                    'rgba(14, 165, 233, 0.5)',
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(234, 88, 12, 1)',
                    'rgba(14, 165, 233, 1)',
                ],
                borderWidth: 1,
                hoverBackgroundColor: [
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(234, 88, 12, 0.7)',
                    'rgba(14, 165, 233, 0.7)',
                ],
                hoverBorderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(234, 88, 12, 1)',
                    'rgba(14, 165, 233, 1)',
                ],
            },
        ],
    };

    const recentPayments = [
        { date: '2024-08-01', amount: '$1,000', customer: 'John Doe' },
        { date: '2024-08-02', amount: '$1,500', customer: 'Jane Smith' },
        { date: '2024-08-03', amount: '$2,000', customer: 'Robert Brown' },
        { date: '2024-08-04', amount: '$2,500', customer: 'Emily Johnson' },
        { date: '2024-08-05', amount: '$3,000', customer: 'Michael Williams' },
    ];

    const topCustomers = [
        { name: 'John Doe', totalSpent: '$10,000' },
        { name: 'Jane Smith', totalSpent: '$8,500' },
        { name: 'Robert Brown', totalSpent: '$7,200' },
        { name: 'Emily Johnson', totalSpent: '$6,800' },
        { name: 'Michael Williams', totalSpent: '$6,000' },
    ];

    return (
        <div className="flex flex-col items-center w-full mx-auto p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-green-700 mb-6">
                Welcome to Accounting Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-4">
    <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-4 flex items-center transform hover:scale-105 transition-transform duration-300">
        <div>
            <h2 className="text-md font-bold text-white">Total Sales</h2>
            <p className="text-2xl font-bold text-white mt-1">$20,000</p>
        </div>
    </div>
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg p-4 flex items-center transform hover:scale-105 transition-transform duration-300">
        <div>
            <h2 className="text-md font-bold text-white">Today's Sales</h2>
            <p className="text-2xl font-bold text-white mt-1">$3,000</p>
        </div>
    </div>
    <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-lg p-4 flex items-center transform hover:scale-105 transition-transform duration-300">
        <div>
            <h2 className="text-md font-bold text-white">Today's Purchases</h2>
            <p className="text-2xl font-bold text-white mt-1">$1,500</p>
        </div>
    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg p-4 flex items-center transform hover:scale-105 transition-transform duration-300">
        <div>
            <h2 className="text-md font-bold text-white">Today's Invoices</h2>
            <p className="text-2xl font-bold text-white mt-1">$2,500</p>
        </div>
    </div>
    <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-lg p-4 flex items-center transform hover:scale-105 transition-transform duration-300">
        <div>
            <h2 className="text-md font-bold text-white">Today's Payments</h2>
            <p className="text-2xl font-bold text-white mt-1">$2,000</p>
        </div>
    </div>
</div>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
                <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
                    <h2 className="text-lg font-bold text-green-600">Total Invoices</h2>
                    <p className="text-4xl font-bold text-gray-700 mt-2">$10,000</p>
                    <Bar data={barChartData} options={{ responsive: true }} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold text-green-600">Total Receipts</h2>
                    <p className="text-4xl font-bold text-gray-700 mt-2">$2,000</p>
                    <Line data={lineChartData} options={{ responsive: true }} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold text-green
-600">Total Payments</h2>
                    <p className="text-4xl font-bold text-gray-700 mt-2">$5,000</p>
                    <Pie data={pieChartData} options={{ responsive: true }} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
                    <h2 className="text-lg font-bold text-green-600">Financial Overview</h2>
                    <Pie data={pieChartData} options={{ responsive: true }} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold text-green-600">Recent Payments</h2>
                    <table className="w-full mt-4">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2">Date</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentPayments.map((payment, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2">{payment.date}</td>
                                    <td className="py-2">{payment.amount}</td>
                                    <td className="py-2">{payment.customer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold text-green-600">Top Customers</h2>
                    <table className="w-full mt-4">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2">Customer</th>
                                <th className="py-2">Total Spent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topCustomers.map((customer, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2">{customer.name}</td>
                                    <td className="py-2">{customer.totalSpent}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;