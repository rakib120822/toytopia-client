import React from "react";
import { useLoaderData, useParams } from "react-router";
import DetailCard from "../../components/DetailCard";

function DetailsPage() {
  let { id } = useParams();
  id = parseInt(id);
  const products = useLoaderData();
  const data = products.find((product) => product.toyId === id);

  return (
    <section className="px-10  grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      <title>{data.toyName}</title>
      <div>
        <DetailCard data={data} />
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <tbody>
              <tr>
                <th>1</th>

                <td>Sub Category</td>
                <td>{data?.subCategory}</td>
              </tr>

              <tr>
                <th>2</th>

                <td>warranty</td>
                <td>{data?.warranty}</td>
              </tr>

              <tr>
                <th>3</th>

                <td>dimensions</td>
                <td>{data?.dimensions}</td>
              </tr>
              <tr>
                <th>4</th>

                <td>weight</td>
                <td>{data?.weight}</td>
              </tr>
              <tr>
                <th>5</th>

                <td>inStock</td>
                <td>{data.inStock ? "available" : "not available"}</td>
              </tr>
              <tr>
                <th>6</th>

                <td>shipping</td>
                <td>{data?.shipping}</td>
              </tr>
              <tr>
                <th>7</th>

                <td>manufacturer</td>
                <td>{data?.manufacturer}</td>
              </tr>
              <tr>
                <th>8</th>

                <td>features</td>
                <td>
                  {data.features?.length > 0
                    ? data.features.map((feature, i) => (
                        <span key={i}>{feature}, </span>
                      ))
                    : "No features available"}
                </td>
              </tr>
              <tr>
                <th>8</th>

                <td>materials</td>
                <td>
                  {data.materials?.length > 0
                    ? data.materials.map((material, i) => (
                        <span key={i}>{material}, </span>
                      ))
                    : "No materials available"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;
