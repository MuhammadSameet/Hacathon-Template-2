"use client";

import Image from "next/image";
import chair from "../assets/chair.png";
import lamp from "../assets/lamp.png";
import bottle from "../assets/bottle.png";
import ports from "../assets/ports.png";

export default function ProductCard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64">
              <Image
                src={chair}
                alt="The Dandy Chair"
                className="object-cover rounded-t-lg"
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                The Dandy Chair
              </h3>
              <p className="text-gray-500 mt-2">£250</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64">
              <Image
                src={ports}
                alt="Rustic Vase Set"
                className="object-cover rounded-t-lg"
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Rustic Vase Set
              </h3>
              <p className="text-gray-500 mt-2">£155</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64">
              <Image
                src={bottle}
                alt="The Silky Vase"
                className="object-cover rounded-t-lg"
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                The Silky Vase
              </h3>
              <p className="text-gray-500 mt-2">£125</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64">
              <Image
                src={lamp}
                alt="The Lucy Lamp"
                className="object-cover rounded-t-lg"
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                The Lucy Lamp
              </h3>
              <p className="text-gray-500 mt-2">£399</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
}
