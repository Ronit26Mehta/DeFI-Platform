import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#181918] m-4 flex flex-1 flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-between w-full mb-6 p-2">
          <a href={`https://scan.morpher.com/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://scan.morpher.com/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-50 2xl:h-60 rounded-md shadow-lg object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
        <br></br>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex flex-col items-center 2xl:px-20 gradient-bg-transactions">
      <div className="md:p-12 py-12 px-4">
        {currentAccount ? (
          <div class="text-center">
          <a href="#home" class="text-black text-3xl my-2 hover:text-blue-500">
            <transactions id="transactions"></transactions>
            Latest Transactions
          </a>
        </div>
        
        ) : (
          <div className="flex justify-center items-center">
  <a href="#home" className="text-black text-3xl text-center my-2 hover:text-blue-500">
    <transactions id="transactions"></transactions>
    Connect your account to see the Latest Transactions.
  </a>
</div>

        )}

        <div className="flex flex-wrap justify-center sm:justify-between mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
