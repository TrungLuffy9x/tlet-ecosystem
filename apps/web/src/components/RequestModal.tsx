import React, { useState } from "react";
import { X, Send, Sparkles, Film, BookOpen, CheckCircle } from "lucide-react";

interface RequestModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const RequestModal: React.FC<RequestModalProps> = ({ isOpen, onClose }) => {
	const [type, setType] = useState<"manga" | "movie">("manga");
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");
	const [submitted, setSubmitted] = useState(false);

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim()) return;

		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
			setTitle("");
			setNote("");
			onClose();
		}, 2000);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
			<div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl overflow-hidden">
				{/* Modal Close Button */}
				<button
					onClick={onClose}
					className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 border border-slate-800 transition-colors"
				>
					<X size={18} />
				</button>

				{submitted ? (
					<div className="py-10 text-center space-y-4 animate-in zoom-in-95 duration-300">
						<div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
							<CheckCircle size={32} />
						</div>
						<h3 className="text-2xl font-bold text-white">Yêu Cầu Đã Được Gửi!</h3>
						<p className="text-slate-300 text-sm max-w-xs mx-auto">
							Cảm ơn bạn! Đội ngũ biên tập sẽ cập nhật tựa <strong className="text-primary">{title}</strong> trong thời gian sớm nhất.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Header */}
						<div>
							<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-primary text-xs font-bold mb-2">
								<Sparkles size={14} />
								<span>Gửi Yêu Cầu Cập Nhật</span>
							</div>
							<h3 className="text-2xl font-bold text-white">Request Phim Hoặc Truyện</h3>
							<p className="text-slate-400 text-xs mt-1">
								Điền thông tin tựa phim hoặc truyện bạn muốn đội ngũ Tlét Ecosystem bổ sung.
							</p>
						</div>

						{/* Type Selector Tabs */}
						<div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-950/60 rounded-2xl border border-slate-800">
							<button
								type="button"
								onClick={() => setType("manga")}
								className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
									type === "manga"
										? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
										: "text-slate-400 hover:text-slate-200"
								}`}
							>
								<BookOpen size={16} />
								<span>Truyện Tranh (TlétTruyện)</span>
							</button>
							<button
								type="button"
								onClick={() => setType("movie")}
								className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
									type === "movie"
										? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
										: "text-slate-400 hover:text-slate-200"
								}`}
							>
								<Film size={16} />
								<span>Phim / Anime (Tlétfít)</span>
							</button>
						</div>

						{/* Input Title */}
						<div className="space-y-2">
							<label className="text-xs font-bold text-slate-300 block">
								Tên Tựa {type === "manga" ? "Truyện Tranh" : "Phim / Anime"} <span className="text-rose-500">*</span>
							</label>
							<input
								type="text"
								required
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder={type === "manga" ? "Ví dụ: Solo Leveling, One Piece..." : "Ví dụ: Jujutsu Kaisen Season 3..."}
								className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
							/>
						</div>

						{/* Input Note */}
						<div className="space-y-2">
							<label className="text-xs font-bold text-slate-300 block">
								Ghi Chú Thêm (Không bắt buộc)
							</label>
							<textarea
								rows={3}
								value={note}
								onChange={(e) => setNote(e.target.value)}
								placeholder="Số tập cần tìm, ngôn ngữ dịch hoặc link tham khảo nếu có..."
								className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors resize-none"
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-rose-500/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
						>
							<Send size={16} />
							<span>Gửi Yêu Cầu Ngay</span>
						</button>
					</form>
				)}
			</div>
		</div>
	);
};
