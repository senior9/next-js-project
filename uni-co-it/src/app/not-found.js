'use client'
export default function NotFound(error, reset) {
  console.log(error);
  return (
    <div className="text-center  mt-10">
      <h1>Something went wrong</h1>
      <button className="bg-[#3FBFEB] mt-10 px-6 py-3 rounded-full  hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
