import React from "react";
import DonutChart from "./donutChart";
import LineChartComponent from "./lineChart";
function Body(){
    return(
        <>
        <section>
            <div className="flex flex-col md:flex-row mt-4 justify-between gap-4">
                <div className="custom_box md:w-[280px] w-full rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Your Capital</h4>
                    <h2 className="text-white mt-4 text-4xl">$1,000</h2>
                </div>
                <div className="custom_box md:w-[280px] w-full rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Borrowed Funds</h4>
                    <h2 className="text-white mt-4 text-4xl">$10,000</h2>
                </div>
                <div className="custom_box md:w-[280px] w-full rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Daily Profit</h4>
                    <h2 className="text-white mt-4 text-4xl">$60</h2>
                </div>
                <div className="custom_box md:w-[280px] w-full rounded-xl py-8 pr-20 pl-4">
                    <h4 className="text-gray-400 text-xl">Your Capital</h4>
                    <h2 className="text-white mt-4 text-4xl">$1,000</h2>
                </div>
            </div>
        </section>
        <section className="mt-8">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="custom_box2 md:w-1/2 w-full p-4 rounded-xl md:m-3">
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
                <div className="custom_box2 md:w-1/2 w-full p-4 rounded-xl m-3">
                    <h1 className="text-white text-xl">Liquidity Pools</h1>
                    <div className="flex justify-between items-center flex-col md:flex-row">
                        <div className="">
                            <table className="min-w-full border border-gray-800 mt-4">
                                <thead>
                                    <tr className="border border-gray-800">
                                        <th className="px-4 py-2 text-left text-gray-400">APY</th>
                                        <th className="px-4 py-2 text-left text-gray-400">Volume</th>
                                        <th className="px-4 py-2 text-left text-gray-400">Share</th>
                                        <th className="px-4 py-2 text-left text-gray-400">Usrs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-800">
                                        <td className="px-4 py-2 text-white font-bold">USDC/DAI</td>
                                        <td className="px-4 py-2 text-teal-200">4,5 %</td>
                                        <td className="px-4 py-2 text-white font-bold text-[13px]">1,25 %</td>
                                        <td className="px-4 py-2 text-teal-200">3,5 %</td>
                                    </tr>
                                    <tr className="border border-gray-800">
                                        <td className="px-4 py-2 text-white font-bold">ETH/USDT</td>
                                        <td className="px-4 py-2 text-teal-200">4,5 %</td>
                                        <td className="px-4 py-2 text-white font-bold text-[13px]">1,25 %</td>
                                        <td className="px-4 py-2 text-teal-200 text-[13px]">0,44 %</td>
                                    </tr>
                                    <tr className="border border-gray-800">
                                        <td className="px-4 py-2 text-white font-bold">WBTC/ETC</td>
                                        <td className="px-4 py-2 text-teal-200">4,5 %</td>
                                        <td className="px-4 py-2 text-white font-bold text-[13px]">1,25 %</td>
                                        {/* <td className="px-4 py-2 text-teal-200">3,5 %</td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <DonutChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pb-18">
            <div className="flex justify-between custom_box2 rounded-2xl mt-4 flex-col md:flex-row">
                <div className="p-4">
                    <h1 className="text-white text-xl">Liquidity Pool</h1>
                    <h1 className="text-white text-3xl font-bold mt-3">50.000.000 USDT</h1>
                    <div className="text-end mt-4">
                        <button className="text-center cursor-pointer bg-teal-200 px-4 py-2 font-bold rounded-xl w-full">Borrow</button>
                    </div>
                    <div className="text-end mt-4">
                        <button className="text-center cursor-pointer bg-teal-200 px-4 py-2 font-bold rounded-xl w-full">Supply Liquidity Earn</button>
                    </div>
                </div>
                <div className="w-full h-[300px] p-3">
                    <LineChartComponent />
                </div>
            </div>
        </section>
        </>
    )
}
export default Body;