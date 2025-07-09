
export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-10 px-6 md:px-20 mt-20 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xl font-semibold text-white">CryptoPulse</div>

                <nav className="flex space-x-6 text-sm">
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#pricing" className="hover:text-white">Pricing</a>
                </nav>
            </div>

            <div className="text-center text-xs text-gray-600 mt-6">
                © {new Date().getFullYear()} CryptoPulse. All rights reserved.
            </div>
        </footer>
    );
}
