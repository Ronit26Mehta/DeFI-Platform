import React, { useState } from "react";
import { FaInstagram, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook, FaClipboard } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackMessage = encodeURIComponent(feedback);

    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let mailUrl;

    if (isMobile) {
      // Open the mail link directly in the mailbox app
      mailUrl = `mailto:kryptonoxfeedback@gmail.com?subject=Feedback&body=${feedbackMessage}`;
    } else {
      // Open the mail link in the mail website
      mailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kryptonoxfeedback@gmail.com&subject=Feedback&body=${feedbackMessage}`;
    }

    window.open(mailUrl, '_blank');
  };

  const handleCopy = () => {
    const hashLabel = document.getElementById('hash-label');
    navigator.clipboard.writeText('0x414D081cDDbBc420A2069D2A4da10E61285D93Ff');
    window.alert('Hash has been copied!');
  }


  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex flex-col justify-center items-center my-4">
        <div class="flex flex-col sm:flex-row justify-center items-start sm:items-center w-full sm:w-3/4 mx-auto">
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="sm:w-[90%] w-full h-[2px] bg-gray-400 mt-5"></div>
          <footer id="about-us"></footer>
          <br />
          <a href="#home" className="text-xl font-bold text-black hover:text-blue-500">Contact Us</a>
          <br />
          <p className="text-black text-sm text-center">
            Feel free to reach out to us with any questions or concerns!
          </p>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <a href="#home">

            <img src={logo} alt="logo" className="w-64 cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5  w-full">
          <span title="Follow us on Instagram">
            <a href="https://www.instagram.com/kryptonox.tech/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-3xl cursor-pointer mx- hover:text-gray-400 transition-colors" />
            </a>
          </span>
          <span title="Follow us on Twitter">
            <a href="https://twitter.com/kryptonox_tech/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-500 text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>
          <span title="Mail Us">
            <a href="mailto:contactkryptonox@gmail.com?subject=Hello Krytonox">
              <FaEnvelope className="text-white text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>

          <span title="Connect with us on LinkedIn">
            <a href="https://www.linkedin.com/in/kryptonox-tech-4b46b5270/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>
          <span title="Follow us on Facebook">
            <a href="https://www.facebook.com/profile.php?id=100091355902704" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-500 text-3xl cursor-pointer mx-2 hover:text-gray-400 transition-colors" />
            </a>
          </span>

        </div>
      </div>

      <div className="sm:w-[90%] w-full h-[2px] bg-gray-400 mt-5"></div>

      <div className="w-full flex flex-col justify-center items-center my-4">
        <div className="w-full sm:w-3/4">

          <a href="#home" class="text-xl font-bold text-black block text-center hover:text-blue-500">About Us</a>
          <br></br>
          <p className="text-black text-sm text-center">
            At Syndicate, our goal is to make sending cryptocurrencies as fast, easy, and affordable as possible. Our platform is designed to be user-friendly and intuitive, allowing you to send cryptocurrencies to anyone, anywhere in the world with just a few clicks. Our team is dedicated to providing you with a seamless and hassle-free experience, and we are always looking for ways to improve. If you have any feedback or suggestions, please feel free to share them with us using the form below.
          </p>
        </div>

        <form className="w-full sm:w-3/4 mt-4" onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <label htmlFor="feedback" className="text-black font-medium">
              Have feedback or questions? We'd love to hear from you!
            </label>
          </div>
          <textarea id="feedback" className="w-full h-24 p-2 border border-gray-400 rounded-md mt-2" value={feedback} onChange={handleFeedbackChange} required></textarea>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-black font-medium rounded-md px-4 py-2 mt-2 hover:bg-blue-600 transition-colors">Submit</button>
          </div>
        </form>
        {feedbackList.length > 0 && (
          <div className="w-full sm:w-3/4 mt-4">
            <h3 className="text-lg font-bold text-black text-center">Feedback Received</h3>
            {feedbackList.map((feedback, index) => (
              <p key={index} className="text-black text-sm mt-2">{feedback}</p>
            ))}
          </div>
        )}



      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-black text-sm text-center">Come join us and hear for the unexpected miracle</p>
        <p className="text-black text-sm text-center font-medium mt-2">@Syndicate.tech</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-black text-arial font-bold text-left text-xs">© 2023 Syndicate</p>
        <p className="text-black text-arial font-bold text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
