import React from "react";

export default function Hero() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
            {/* Текстовая часть */}
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Your Crypto Journey <span className="text-indigo-400">Starts Here</span>
                </h1>
                <p className="text-gray-300">
                    Discover a secure and powerful platform to manage, buy and trade your digital assets.
                </p>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded transition">
                    Get Started
                </button>
            </div>

            {/* Картинка / заглушка */}
            <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                <div className="w-full h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg" />
            </div>
        </section>
    );
}
