export default function Header() {
    return (
        <header className="w-full py-4 px-6 flex justify-between items-center bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white">
            <div className="text-2xl font-bold">CryptoPulse</div>
            <nav className="hidden md:flex space-x-6">
                <a href="#features" className="hover:text-indigo-300 transition">Features</a>
                <a href="#pricing" className="hover:text-indigo-300 transition">Pricing</a>
                <a href="#about" className="hover:text-indigo-300 transition">About</a>
            </nav>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition">
                Launch App
            </button>
        </header>
    );
}
