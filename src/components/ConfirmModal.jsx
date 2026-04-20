export default function ConfirmModal({ 
	show, 
	onConfirm, 
	onCancel, 
	title = "Delete permanently?", 
	message = "This action cannot be undone. The note will be removed forever.", 
	confirmText = "Delete" 
}) {
	if (!show) return null;

	return (
		<div className="fixed inset-0 z-50 bg-slate-900/50 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-colors duration-300">
			<div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-slate-200/70 dark:border-neutral-800 p-6 max-w-sm w-full transition-colors duration-300">
				<div className="w-11 h-11 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 flex items-center justify-center text-xl mb-4">
					!
				</div>
				<p className="text-xl font-bold text-slate-900 dark:text-neutral-100 mb-2">{title}</p>
				<p className="text-sm text-slate-600 dark:text-neutral-400 mb-6">
					{message}
				</p>

				<div className="flex items-center gap-3">
					<button
						onClick={onCancel}
						className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 font-semibold hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
					>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	);
}