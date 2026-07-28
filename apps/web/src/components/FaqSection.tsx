import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(0);

	const faqs = [
		{
			q: "Hệ sinh thái Tlét Ecosystem có hoàn toàn miễn phí không?",
			a: "ĐÚNG VẬY! 100% tất cả các dịch vụ trong hệ sinh thái (bao gồm TlétTruyện và Tlétfít) đều phục vụ cộng đồng phi thương mại. Chúng tôi không thu bất kỳ chi phí nạp tiền, VIP hay giới hạn tính năng nào."
		},
		{
			q: "Tại sao Tlét Ecosystem lại cam kết không quảng cáo popup?",
			a: "Chúng tôi thấu hiểu cảm giác khó chịu của người dùng khi đọc truyện hoặc xem phim bị gián đoạn bởi quảng cáo rác, lừa đảo hoặc popup tự động nhảy tab. Hệ sinh thái cam kết duy trì giao diện sạch sẽ, an toàn 100% cho mọi lứa tuổi."
		},
		{
			q: "Làm thế nào để cài đặt TlétTruyện / Tlétfít thành ứng dụng trên điện thoại?",
			a: "Cả 2 dịch vụ đều chuẩn bị công nghệ Progressive Web App (PWA). Bạn chỉ cần mở website trên trình duyệt di động (Chrome, Safari, Edge...), nhấn vào nút 'Thêm vào màn hình chính' (Add to Home Screen) là có ngay app mượt mà không cần qua App Store hay Google Play."
		},
		{
			q: "Lịch sử xem phim và đọc truyện của tôi có bị mất khi đổi thiết bị không?",
			a: "Không! Bạn có thể sử dụng tính năng đồng bộ tài khoản để lưu trữ Bookmark truyện yêu thích và tiến trình xem phim trực tuyến ở bất kỳ đâu."
		},
		{
			q: "Tôi có thể tham gia đóng góp nội dung hoặc hỗ trợ hệ sinh thái bằng cách nào?",
			a: "Bạn có thể tham gia nhóm cộng đồng Telegram chính thức của chúng tôi để báo lỗi, gửi đề xuất tựa truyện/phim mới hoặc đóng góp ý kiến xây dựng giao diện ngày một hoàn thiện hơn."
		}
	];

	return (
		<section id="faq" className="py-20 relative z-10">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-14 space-y-4">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-primary text-xs font-bold uppercase tracking-wider">
						<HelpCircle size={14} />
						<span>Giải Đáp Thắc Mắc</span>
					</div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Câu Hỏi Thường Gặp
					</h2>
				</div>

				{/* Accordion List */}
				<div className="space-y-4">
					{faqs.map((item, idx) => {
						const isOpen = openIdx === idx;
						return (
							<div
								key={idx}
								className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
							>
								<button
									onClick={() => setOpenIdx(isOpen ? null : idx)}
									className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-200 text-base sm:text-lg hover:text-primary transition-colors"
								>
									<span>{item.q}</span>
									<div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}>
										<ChevronDown size={18} />
									</div>
								</button>
								{isOpen && (
									<div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-in fade-in-50 duration-200">
										{item.a}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
