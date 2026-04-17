export default function ConfirmModal({ show, onConfirm, onCancel }) {
	if (!show) return null;

	return (
		<div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
			<div className="bg-white rounded-3xl shadow-2xl border border-slate-200/70 p-6 max-w-sm w-full">
				<div className="w-11 h-11 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xl mb-4">
					!
				</div>
				<p className="text-xl font-bold text-slate-900 mb-2">Delete permanently?</p>
				<p className="text-sm text-slate-600 mb-6">
					This action cannot be undone. The note will be removed forever.
				</p>

				<div className="flex items-center gap-3">
					<button
						onClick={onCancel}
						className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}