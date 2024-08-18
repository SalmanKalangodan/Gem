

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center lg:text-left">
                    <div className="w-full lg:w-6/12 xl:w-3/12 p-6 text-lg">
                        <h5 className="uppercase text-green-500 font-bold mb-2">About Us</h5>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 p-6 text-lg">
                        <h5 className="uppercase text-green-500 font-bold mb-2">Services</h5>
                        <ul>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="#">Accounting</a>
                            </li>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="#">Bookkeeping</a>
                            </li>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="#">Tax Preparation</a>
                            </li>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="#">Financial Planning</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 p-6 text-lg">
                        <h5 className="uppercase text-green-500 font-bold mb-2">Contact Us</h5>
                        <ul>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="#">Phone: 555-555-5555</a>
                            </li>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="mailto:info@example.com">Email: info@example.com</a>
                            </li>
                            <li className="text-gray-600 hover:text-green-500 transition duration-300">
                                <a href="#">Address: 123 Main St, Anytown, USA</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 p-6 text-lg">
                        <h5 className="uppercase text-green-500 font-bold mb-2">Follow Us</h5>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">
                                <i className="fa fa-whatsapp fa-2x"></i> WhatsApp
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">
                                <i className="fa fa-facebook-square fa-2x"></i> Facebook
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">
                                <i className="fa fa-instagram fa-2x"></i> Instagram
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300">
                                <i className="fa fa-linkedin-square fa-2x"></i> Telegram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;