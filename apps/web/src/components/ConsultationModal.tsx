import React, { useState } from "react";
import { X, Send, CheckCircle, PhoneCall } from "lucide-react";

interface ConsultationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [serviceType, setServiceType] = useState("Web App PWA");
	const [note, setNote] = useState("");
	const [submitted, setSubmitted] = useState(false);

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim() || !contact.trim()) return;

		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
			setName("");
			setContact("");
			setNote("");
			onClose();
		}, 2200);
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
						<h3 className="text-2xl font-bold text-white">Yêu Cầu Đã Được Tiếp Nhận!</h3>
						<p className="text-slate-300 text-sm max-w-xs mx-auto">
							Cảm ơn <strong className="text-cyan-400">{name}</strong>! Chuyên viên tư vấn sẽ liên hệ lại qua thông tin <strong className="text-cyan-400">{contact}</strong> trong vòng 15 phút.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Header */}
						<div>
							<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-2">
								<PhoneCall size={14} />
								<span>Đăng Ký Nhận Báo Giá 1-1</span>
							</div>
							<h3 className="text-2xl font-bold text-white">Tư Vấn Thiết Kế Website</h3>
							<p className="text-slate-400 text-xs mt-1">
								Điền thông tin của bạn để nhận bản tư vấn giải pháp & báo giá chi tiết hoàn toàn miễn phí.
							</p>
						</div>

						{/* Input Name */}
						<div className="space-y-1.5">
							<label className="text-xs font-bold text-slate-300 block">
								Họ & Tên / Tên Thương Hiệu <span className="text-rose-500">*</span>
							</label>
							<input
								type="text"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Ví dụ: Nguyễn Văn A..."
								className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
							/>
						</div>

						{/* Input Contact */}
						<div className="space-y-1.5">
							<label className="text-xs font-bold text-slate-300 block">
								Số Điện Thoại / Zalo / Telegram <span className="text-rose-500">*</span>
							</label>
							<input
								type="text"
								required
								value={contact}
								onChange={(e) => setContact(e.target.value)}
								placeholder="Ví dụ: 0912xxxxxx hoặc @telegram_user..."
								className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
							/>
						</div>

						{/* Select Service Type */}
						<div className="space-y-1.5">
							<label className="text-xs font-bold text-slate-300 block">
								Gói Dịch Vụ Mối Quan Tâm
							</label>
							<select
								value={serviceType}
								onChange={(e) => setServiceType(e.target.value)}
								className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
							>
								<option value="Landing Page">Gói Landing Page Tiết Kiệm (3.5M)</option>
								<option value="Web App PWA">Gói Web App PWA Chuyên Nghiệp (7.9M - Hot)</option>
								<option value="Fullstack Custom">Gói System Doanh Nghiệp Custom</option>
								<option value="Tư vấn khác">Tư vấn dự toán ngân sách riêng</option>
							</select>
						</div>

						{/* Input Note */}
						<div className="space-y-1.5">
							<label className="text-xs font-bold text-slate-300 block">
								Yêu Cầu Chi Tiết (Không bắt buộc)
							</label>
							<textarea
								rows={2}
								value={note}
								onChange={(e) => setNote(e.target.value)}
								placeholder="Mô tả ngành nghề, ý tưởng hoặc tính năng cần thiết..."
								className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
						>
							<Send size={15} />
							<span>Gửi Yêu Cầu Nhận Báo Giá 1-1</span>
						</button>
					</form>
				)}
			</div>
		</div>
	);
};
