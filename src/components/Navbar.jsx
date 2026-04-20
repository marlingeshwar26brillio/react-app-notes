import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
	const { logout } = useAuth();
	const { theme, toggleTheme } = useTheme();

	return (
		<nav className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-slate-200 dark:border-neutral-800 shadow-sm transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center gap-2">
						<div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
							<span className="text-white font-bold text-lg">N</span>
						</div>
						<h1 className="text-2xl font-bold text-slate-900 dark:text-neutral-100 hidden sm:inline">Notely</h1>
					</Link>

					<div className="flex items-center gap-3">
						<button 
							onClick={toggleTheme}
							className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
							aria-label="Toggle dark mode"
						>
							{theme === 'dark' ? '☀️' : '🌙'}
						</button>
						<Link to="/app" className="px-4 py-2 rounded-lg text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors font-medium">
							Notes
						</Link>
						<Link to="/trash" className="px-4 py-2 rounded-lg text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors font-medium">
							Trash
						</Link>
						<button
							onClick={logout}
							className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
						>
							<span className="hidden sm:inline">Logout</span>
							<span className="sm:hidden">✕</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}