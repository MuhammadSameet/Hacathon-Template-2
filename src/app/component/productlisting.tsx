"use client"

import Image from "next/image";
import chair from "../assets/chair.png";
import lamp from "../assets/lamp.png";
import bottle from "../assets/bottle.png";
import ports from "../assets/ports.png";
import down from "../assets/down.png"
import allproduct from "../assets/all product.png"

export default function Productlisting() {
    return (
     <><div className="py-[20px]">
       <Image className="all-product" src={allproduct} alt={"all product banner"}/>

        <div className="w-full h-auto bg-pink flex flex-col px-4 py-3 sm:flex-row sm:h-[10vh] sm:justify-between sm:items-center">
  
        <ul className="flex flex-wrap w-full sm:w-2/5 justify-around items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <li className="flex items-center space-x-1">
            <span>Category</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Product type</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Price</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Brand</span>
            <Image src={down} alt="down arrow" className="w-4" />
          </li>
        </ul>
      
  
        <div className="w-full mt-3 sm:mt-0 sm:w-1/5 flex justify-center sm:justify-end">
            <ul className="flex items-center space-x-2 border border-black px-4 py-2">
              <li className="flex items-center space-x-1">
                <p>Sorting by:</p>
                <span>Category</span>
                <Image src={down} alt="down arrow" className="w-4" />
              </li>
            </ul>
          </div>
        </div>


        <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-[40px]">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-[20px]">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-[20px]">
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
          <button className="px-6 py-3 bg-white text-#F9F9F9 font-semibold text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:#white focus:ring-opacity-50">
            View Collection
          </button>
        </div>
      </div>
    </div>

    </div>
     </>
    )
}