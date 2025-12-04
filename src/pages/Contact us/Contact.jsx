import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Thanks for your feedback");
  };
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h2 className="text-center text-4xl font-bold text-[#61D2E8]">
              Contact <span className="text-black">ToyTopia</span>
            </h2>
            <p className="py-6 ">
              We’re here to make your shopping experience smooth and enjoyable.
              Reach out to us anytime! Our friendly support team is always ready
              to assist you—whether you have questions about a product, need
              help with an order, or want guidance in choosing the perfect toy.
              We believe great customer service is just as important as great
              toys, so we make sure every message is answered with care and
              attention.
            </p>
            <div>
              <p>
                Email: support@toytopia.com <br />
                📞 Phone: +880 9876 543 210 <br />
                📍 Location: Dhaka, Bangladesh
              </p>
              <div className="flex gap-5">
                <div className="tooltip">
                  <div className="tooltip-content">
                    <div className="animate-bounce -rotate-10 text-2xl font-black">
                      01883860565
                    </div>
                  </div>
                  <FaWhatsapp size={30} color="green" />
                </div>

                <div className="tooltip">
                  <div className="tooltip-content">
                    <div className="animate-bounce -rotate-10 text-2xl font-black">
                      Wow!
                    </div>
                  </div>
                  <FaFacebook size={30} color="#297BE6" />
                </div>
                <div className="tooltip">
                  <div className="tooltip-content">
                    <div className="animate-bounce  -rotate-10 text-2xl font-black">
                      Wow!
                    </div>
                  </div>
                  <FaTwitter size={30} color="#61D2E8" />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                  <label className="floating-label">
                    <span>Name</span>
                    <input
                      type="text"
                      className="input input-info"
                      placeholder="Name"
                    />
                  </label>
                  <label className="floating-label my-2">
                    <span>Email</span>
                    <input
                      type="email"
                      className="input input-info"
                      placeholder="Email"
                    />
                  </label>
                  <label className="floating-label ">
                    <span>Message</span>
                    <textarea
                      placeholder="Message"
                      className="textarea textarea-info"
                    ></textarea>
                  </label>

                  <button className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
