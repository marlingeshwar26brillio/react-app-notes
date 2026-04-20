import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GridPattern from "../components/GridPattern";

export default function Landing() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <GridPattern
        width={42}
        height={42}
        className="opacity-45 mask-[radial-gradient(ellipse_at_top,white,transparent_70%)]"
      />
      {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 hidden sm:inline">Notely</h1>
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/app"
                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                Notes
              </Link>
              <Link
                to="/trash"
                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
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
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Organize Your Thoughts,<br /> <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Amplify Your Mind</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            A modern, intuitive note-taking application designed for productivity. Capture ideas, organize tasks, and never lose a thought again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={user ? "/app" : "/signup"}
              className="px-8 py-4 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-all transform hover:-translate-y-1 shadow-lg font-semibold text-lg"
            >
              {user ? "Go to Notes" : "Get Started Free"}
            </Link>
            {!user && (
              <Link 
                to="/login"
                className="px-8 py-4 border-2 border-slate-300 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors font-semibold text-lg"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Why Choose Notely?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
            <div className="text-4xl mb-4">✍️</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Fast & Easy</h4>
            <p className="text-slate-600">
              Quickly capture your thoughts and ideas with an intuitive interface that gets out of your way.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
            <div className="text-4xl mb-4">🏷️</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Organize with Tags</h4>
            <p className="text-slate-600">
              Tag your notes and filter by topics. Keep everything organized the way you want.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
            <div className="text-4xl mb-4">🌙</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Dark Mode</h4>
            <p className="text-slate-600">
              Switch between light and dark modes for comfortable viewing anytime, anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
            <div className="text-4xl mb-4">🔍</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Smart Search</h4>
            <p className="text-slate-600">
              Find any note instantly with powerful search across titles, content, and tags.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
            <div className="text-4xl mb-4">🗑️</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Trash & Restore</h4>
            <p className="text-slate-600">
              Delete notes without worry. Restore from trash or permanently remove them.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
            <div className="text-4xl mb-4">💾</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Auto-Save</h4>
            <p className="text-slate-600">
              Your notes are automatically saved as you type. No more losing your work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-3xl p-12 text-center shadow-xl">
          <h3 className="text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already organizing their thoughts with Notely.
          </p>
          <Link 
            to="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg font-semibold text-lg"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-100 border-t border-slate-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Notely</h3>
              </div>
              <p className="text-slate-600 text-sm">
                A modern note-taking application for organizing your thoughts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
                <li><Link to="/login" className="hover:text-slate-900 transition-colors">Login</Link></li>
                <li><Link to="/signup" className="hover:text-slate-900 transition-colors">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; 2026 Notely. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
