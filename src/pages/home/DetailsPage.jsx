import React from "react";
import { useLoaderData, useParams } from "react-router";
import DetailCard from "../../components/DetailCard";
import { toast } from "react-toastify";

function DetailsPage() {
  let { id } = useParams();
  id = parseInt(id);
  const products = useLoaderData();
  const data = products.find((product) => product.toyId === id);

  return (
    <section className="w-11/12 mx-auto grid grid-cols-12 gap-20 py-20">
      <title>{data.toyName}</title>
      <div className="col-span-6">
        <DetailCard data={data} />
      </div>
      <div className="col-span-6 flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.info("Thanks For Try!");
              }}
            >
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                  name="name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Your email"
                  name="email"
                  required
                />

                <button className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white mt-4">
                  Try Now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;
