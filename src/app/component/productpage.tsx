"use client"
import Image from "next/image";
import React from 'react';
import productdetail from "../assets/Product Details.png"

const ProductPage = () => {
  return (
    <div className="flex h-screen">
      
      <div className="w-1/2 bg-gray-100">
        <Image src={productdetail} alt="Product Image" className="w-full h-full object-cover" />
      </div>

      
      <div className="w-1/2 p-10">
        <h2 className="text-3xl font-bold mb-4">The Dandy Chair</h2>
        <p className="text-lg mb-4">£250</p>

        <h3 className="text-xl font-bold mb-4">Description</h3>
        <p className="text-lg mb-4">
          A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space, with beech legs and lambskin leather upholstery.
        </p>

        <h3 className="text-xl font-bold mb-4">Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>

        <h3 className="text-xl font-bold mb-4">Dimensions</h3>
        <ul className="list-none">
          <li className="flex justify-between mb-2">
            <span>Height:</span>
            <span>110cm</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Width:</span>
            <span>75cm</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Depth:</span>
            <span>50cm</span>
          </li>
        </ul>

        <div className="flex justify-between items-center mt-4">
          <div>
            <label htmlFor="quantity">Amount:</label>
            <input type="number" id="quantity" className="border border-gray-300 p-2 rounded" defaultValue="1" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;