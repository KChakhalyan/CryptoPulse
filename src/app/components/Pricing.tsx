export default function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: ["Basic wallet", "Limited support", "Single device"],
        },
        {
            name: "Pro",
            price: "$9/mo",
            features: ["Multi-device sync", "Priority support", "Advanced tools"],
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "$29/mo",
            features: ["Unlimited access", "Custom integrations", "Dedicated support"],
        },
    ];

    return (
        <section id="pricing" className="px-6 md:px-20 py-20 bg-gray-950 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Choose Your <span className="text-indigo-400">Plan</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg border ${plan.highlight ? "border-indigo-500 bg-gray-900 shadow-xl scale-105" : "border-gray-700"
                            } transition`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-4">{plan.price}</p>
                        <ul className="text-gray-300 text-sm space-y-2 mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i}>• {feature}</li>
                            ))}
                        </ul>
                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
