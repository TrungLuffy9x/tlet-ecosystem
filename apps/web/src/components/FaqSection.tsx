import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
	q: string;
	a: string;
}

interface FaqSectionProps {
	accentColor?: "rose" | "cyan";
	customFaqs?: FaqItem[];
	title?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ accentColor = "rose", customFaqs, title = "Câu Hỏi Thường Gặp" }) => {
	const [openIdx, setOpenIdx] = useState<number | null>(0);

	const isCyan = accentColor === "cyan";

	// Default Ecosystem FAQs (used when accentColor === "rose")
	const ecosystemFaqs: FaqItem[] = [
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

	// Web Design & Development FAQs (used when accentColor === "cyan")
	const webDesignFaqs: FaqItem[] = [
		{
			q: "Thời gian hoàn thiện và bàn giao một website / web app là bao lâu?",
			a: "Thời gian trung bình từ 3 - 7 ngày đối với trang Landing Page / Web App PWA tiêu chuẩn. Với các hệ thống Full-stack Doanh nghiệp lớn có yêu cầu tùy biến cao, thời gian hoàn thiện từ 10 - 15 ngày."
		},
		{
			q: "Sau khi bàn giao, tôi có tự quản lý và cập nhật nội dung website được không?",
			a: "HOÀN TOÀN ĐƯỢC! Chúng tôi tích hợp trang quản trị CMS Admin trực quan, thân thiện. Bạn có thể tự chỉnh sửa bài viết, hình ảnh, sản phẩm và dịch vụ một cách dễ dàng mà không cần biết lập trình."
		},
		{
			q: "Chính sách bảo hành và hỗ trợ kỹ thuật sau khi bàn giao như thế nào?",
			a: "Chúng tôi cam kết BẢO HÀNH TRỌN ĐỜI đối với tất cả các lỗi kỹ thuật lập trình phát sinh. Đội ngũ tư vấn hỗ trợ 24/7 qua Zalo/Telegram, đảm bảo hệ thống vận hành liên tục 99.9% uptime."
		},
		{
			q: "Tôi có phải trả thêm chi phí phát sinh duy trì hàng năm không?",
			a: "KHÔNG CÓ CHI PHÍ ẨN! Năm đầu tiên bạn được tặng miễn phí 100% Tên miền (.com/.net) và hạ tầng Server Cloudflare Edge CDN. Từ năm thứ 2, bạn chỉ cần thanh toán phí duy trì tên miền gốc theo giá niêm yết."
		},
		{
			q: "Website của tôi có đạt chuẩn SEO Google và hiển thị mượt trên di động không?",
			a: "100% TẤT CẢ sản phẩm đều được tối ưu điểm SEO Google Lighthouse 95+, cấu hình Responsive tương thích hoàn hảo từ điện thoại, iPad đến màn hình 4K và đạt tốc độ tải dưới 0.5s."
		},
		{
			q: "Làm thế nào để bắt đầu đăng ký tư vấn và nhận báo giá làm web?",
			a: "Bạn chỉ cần nhấn nút 'Báo Giá Nhanh 1-1' hoặc điền thông tin vào Form tư vấn. Chuyên viên sẽ liên hệ lại trong 15 phút để trao đổi yêu cầu, phác thảo giao diện demo và thống nhất tiến độ."
		}
	];

	const faqs = customFaqs || (isCyan ? webDesignFaqs : ecosystemFaqs);

	return (
		<section id="faq" className="py-20 relative z-10">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-14 space-y-4">
					<div
						className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
							isCyan
								? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
								: "bg-rose-500/10 border border-rose-500/30 text-primary"
						}`}
					>
						<HelpCircle size={14} />
						<span>Giải Đáp Thắc Mắc</span>
					</div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						{title}
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
									className={`w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg transition-colors ${
										isOpen
											? isCyan ? "text-cyan-400" : "text-primary"
											: isCyan ? "text-slate-200 hover:text-cyan-400" : "text-slate-200 hover:text-primary"
									}`}
								>
									<span>{item.q}</span>
									<div
										className={`p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-300 ${
											isOpen
												? isCyan ? "rotate-180 text-cyan-400 border-cyan-500/40" : "rotate-180 text-primary border-rose-500/40"
												: ""
										}`}
									>
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
