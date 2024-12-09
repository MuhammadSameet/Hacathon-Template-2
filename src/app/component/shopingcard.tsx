"use client"
import React from 'react';
import Image from "next/image"
import productdetail from "../assets/Product Details.png"

const ShoppingCart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-center">Quantity</th>
              <th className="py-2 px-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <Image src={productdetail} alt="Graystone Vase" className="w-16 h-16 rounded-md mr-4"/>
                  <div>
                    <p className="font-semibold">Graystone Vase</p>
                    <p className="text-gray-500 text-sm">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-center">1</td>
              <td className="py-4 px-4 text-right">£85</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <Image
                     src={productdetail}
                    alt="Basic White Vase"
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <p className="font-semibold">Basic White Vase</p>
                    <p className="text-gray-500 text-sm">
                      Beautiful and simple, this is one for the classics collections.
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-center">1</td>
              <td className="py-4 px-4 text-right">£125</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className=" col-span-2 py-2 px-4 text-right font-semibold">
                Subtotal
              </td>
              <td className="py-2 px-4 text-right font-semibold">£210</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;