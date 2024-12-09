

"use client";
export default function fleximage(){
    return (
        <>

<div className="flex items-center justify-center h-screen w-full bg-amber-300 p-8">
  <div className="rounded-lg shadow-lg p-8 w-full max-w-xl">
    <h2 className="text-3xl font-semibold text-black mb-4 text-center">Join the club and get the benefits</h2>
    <p className="text-lg text-black mb-6 text-center">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more</p>
    <form action="#" method="POST">
      <div className="flex flex-col mb-4">
        <input type="email" className="p-2 rounded-md w-full text-black" placeholder="your@email.com" required />
      </div>
      <div className="flex space-x-4 mb-6">
        <label className="text-black flex items-center">
          <input type="checkbox" className="mr-2" /> Exclusive offers
        </label>
        <label className="text-black flex items-center">
          <input type="checkbox" className="mr-2" /> Free events
        </label>
        <label className="text-black flex items-center">
          <input type="checkbox" className="mr-2" /> Large discounts
        </label>
      </div>
      <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md shadow-lg hover:bg-purple-700">
        Sign up
      </button>
    </form>
  </div>
</div>




        </>
    )
}
