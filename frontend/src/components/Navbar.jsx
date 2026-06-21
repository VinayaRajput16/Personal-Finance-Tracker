import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">
                    Personal Finance Tracker
                </h2>

                <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-zinc-300 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;