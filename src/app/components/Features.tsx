import { FaShieldAlt, FaBolt, FaCoins } from "react-icons/fa";

export default function Features() {
    const features = [
        {
            icon: <FaShieldAlt size={28} className="text-indigo-400" />,
            title: "Secure & Private",
            desc: "We use advanced encryption and zero-knowledge security to protect your assets."
        },
        {
            icon: <FaBolt size={28} className="text-indigo-400" />,
            title: "Fast Transactions",
            desc: "Our system ensures blazing-fast confirmation times for all operations."
        },
        {
            icon: <FaCoins size={28} className="text-indigo-400" />,
            title: "Multi-Crypto Support",
            desc: "Easily manage BTC, ETH, and many more coins in one place."
        }
    ];

    return (
        <section id="features" className="px-6 md:px-20 py-20 bg-black text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose <span className="text-indigo-400">CryptoPulse?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
