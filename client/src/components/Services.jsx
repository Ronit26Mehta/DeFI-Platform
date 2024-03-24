import React, { useState, useEffect } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const data = await response.json();
      setRates(data);
    };
    const interval = setInterval(() => {
      fetchData();
    }, 10000); // change the interval to 10 seconds

    // Clean up the interval when the component unmounts or the dependency array changes
    return () => clearInterval(interval);
  }, []); // empty dependency array to run the effect only once when the component mounts

  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <div className="flex flex-col items-center justify-center p-6 md:p-20">
        <div className="flex-1 flex flex-col justify-start items-start mb-6 text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we continue to improve
          </h1>
          <p className="text-white font-light md:w-9/12 w-11/12 text-base">
            Experience fast, secure and affordable global transactions with our exchange.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center md:flex-row">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="At Syndicate, security is a top priority and we guarantee that all our products and services are designed with the utmost care to maintain privacy and protect sensitive data. We follow the latest industry standards and use state-of-the-art technology to ensure that our customers can trust us with their valuable information."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best transfer rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Experience lightning-fast and secure global transactions with our exchange while enjoying the best transfer rates in the market. Our cutting-edge technology and expert team ensure that you get the most value for your money, making us the top choice for anyone looking to send money across borders."
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fast transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="We understand the importance of speed when it comes to global Syndicate. That's why we have optimized our processes and technology to offer fast and reliable transactions to our customers. With Kryptonox, you can send and receive money quickly and easily, without any delays or complications."
          />
        </div>
        <div className="sm:w-[90%] w-full h-[1px] bg-gray-400 mt-5 " />
        <div className="flex flex-col justify-center items-center mb-6">
          <br />
          <services id="market"></services>
          <a href="#home">
            <h2 class="text-black text-4xl hover:text-blue-500">Market Rate</h2>
          </a>

          <br />
          <div className="table-container overflow-x-auto">
            <table className="mt-2 border-collapse border-2 border-black" style={{ width: "100%" }}>
              <thead>
                <tr>

                  <th className="px-10 py-6 text-black">Name</th>
                  <th className="px-7 py-6 text-black">Symbol</th>
                  <th className="px-5 py-6 text-black">Price ($)</th>
                  <th className="px-10 py-6 text-black hidden md:table-cell">Market Cap ($)</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate, index) => (
                  <tr key={rate.id}>

                    <td className="border border-black text-center">{rate.name}</td>
                    <td className="border border-black text-center">{rate.symbol.toUpperCase()}</td>
                    <td className="border border-black text-center">{rate.current_price.toLocaleString("en-IN")}</td>
                    <td className="border border-black text-center hidden md:table-cell">{rate.market_cap.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
