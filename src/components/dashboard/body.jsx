import React from "react";
function Body(){
    return(
        <>
        <section>
            <div className="flex mt-4 justify-between">
                <div className="custom_box rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Your Capital</h4>
                    <h2 className="text-white mt-4 text-4xl">$1, 000</h2>
                </div>
                <div className="custom_box rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Borrowed Funds</h4>
                    <h2 className="text-white mt-4 text-4xl">$10, 000</h2>
                </div>
                <div className="custom_box rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Daily Profit</h4>
                    <h2 className="text-white mt-4 text-4xl">$60</h2>
                </div>
                <div className="custom_box rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Your Capital</h4>
                    <h2 className="text-white mt-4 text-4xl">$1, 000</h2>
                </div>
            </div>
        </section>
        <section className="mt-8">
            <div className="flex justify-between">
                <div className="custom_box2 w-1/2 p-4 rounded-xl">
                    <h1 className="text-white text-xl">Trading Activity</h1>
                    <div className="flex justify-between px-8 mt-4 py-3 border border-gray-800 rounded-xl">
                        <h1 className="text-white">ETH/USDC</h1>
                        <h2 className="text-white">8:24am</h2>
                    </div>
                    <div className="flex justify-between px-8 mt-4 py-3 border border-gray-800 rounded-xl">
                        <h1 className="text-white">ETH/USDT</h1>
                        <h2 className="text-white">7:13am</h2>
                    </div>
                    <div className="flex justify-between px-8 mt-4 py-3 border border-gray-800 rounded-xl">
                        <h1 className="text-white">WBTC/ETH</h1>
                        <h2 className="text-white">3:20am</h2>
                    </div>
                    <div className="text-end mt-4">
                        <button className="text-end cursor-pointer bg-teal-200 px-4 py-2 font-bold rounded-xl">Initiate New Trade</button>
                    </div>
                </div>
                <div>2</div>
            </div>
        </section>
        </>
    )
}
export default Body;