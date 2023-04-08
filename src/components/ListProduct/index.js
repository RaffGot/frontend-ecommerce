import React from "react";
import ButtonModern from "../ButtonModern";
const ListProduct = (data) => {
  return (
    <div className="bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Our Products
          </h2>
          <div className="mt-6 flex flex-row flex-wrap gap-x-6 gap-y-8 border border-gray-300 shadow-sm p-10 rounded-lg">
            {data?.data?.map((item, key) => (
              <div className="group relative flex-shrink-0" key={key}>
                <div className="w-40 h-64 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity ease-in-out duration-150">
                  <img
                    src={item.image}
                    alt="Product 1"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between gap-y-6">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">{item.name}</a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{`${item.price}$`}</p>
                </div>
                <ButtonModern color="blue" className={"rounded-lg"}>Click me</ButtonModern>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
