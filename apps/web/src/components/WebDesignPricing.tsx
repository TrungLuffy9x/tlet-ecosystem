import React from "react";
import { Check, Sparkles, Zap } from "lucide-react";

interface WebDesignPricingProps {
	onConsultationOpen: () => void;
}

export const WebDesignPricing: React.FC<WebDesignPricingProps> = ({ onConsultationOpen }) => {
	const packages = [
		{
			name: "Gói Landing Page Tiết Kiệm",
			price: "3.500.000đ",
			period: "Trọn gói (Không phí ẩn)",
			recommended: false,
			description: "Hoàn hảo cho sản phẩm đơn lẻ, chiến dịch quảng cáo hoặc giới thiệu công ty.",
			badge: "Tiết Kiệm",
			features: [
				"1 Trang Landing Page chuẩn conversion",
				"Giao diện Responsive Mobile & PC",
				"Tốc độ tải trang < 1 giây",
				"Tặng Tên miền .com / .net 1 năm",
				"Tặng Hosting & CDN Server 1 năm",
				"Bảo hành kỹ thuật 12 tháng"
			],
			btnStyle: "bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200"
		},
		{
			name: "Gói Web App PWA Chuyên Nghiệp",
			price: "7.900.000đ",
			period: "Trọn gói (Nhiều ưu đãi)",
			recommended: true,
			description: "Dành cho thương hiệu muốn sở hữu ứng dụng di động PWA & giao diện đọc/xem phim mượt mà.",
			badge: "Phổ Biến Nhất",
			features: [
				"Hệ thống Web App PWA thế hệ mới",
				"Cài đặt trực tiếp 1-Click vào di động",
				"Đồng bộ tài khoản & Bookmark",
				"Tích hợp Chế độ Dark/Light mode",
				"Tặng Tên miền & Hosting Edge CDN 1 năm",
				"Cấu hình SEO Google Audit 95+",
				"Bảo hành trọn đời lỗi phát sinh"
			],
			btnStyle: "bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-lg shadow-cyan-500/25"
		},
		{
			name: "Gói System Doanh Nghiệp Custom",
			price: "Liên hệ báo giá",
			period: "Theo quy mô dự án",
			recommended: false,
			description: "Giải pháp thiết kế độc quyền Full-stack, hệ thống API & Admin Dashboard CMS quy mô lớn.",
			badge: "Doanh Nghiệp",
			features: [
				"Mã nguồn Monorepo Full-stack riêng biệt",
				"Trang quản trị CMS Admin linh hoạt",
				"Hệ thống RESTful API kết nối app di động",
				"Hạ tầng Cloudflare Edge CDN không giới hạn",
				"Hỗ trợ tích hợp cổng thanh toán / SSO",
				"Cam kết SLA Uptime 99.99%",
				"Hỗ trợ kỹ thuật ưu tiên 24/7"
			],
			btnStyle: "bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200"
		}
	];

	return (
		<section id="web-pricing" className="py-16 relative z-10">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs inline-flex items-center gap-1.5">
						<Zap size={14} />
						<span>Bảng Giá Minh Bạch</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Bảng Giá & Gói Chi Phí Dịch Vụ
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Cam kết không phát sinh bất kỳ chi phí ngầm nào. Tối ưu ngân sách theo đúng nhu cầu sử dụng thực tế.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{packages.map((pkg, idx) => (
						<div
							key={idx}
							className={`p-8 rounded-3xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between relative group ${
								pkg.recommended
									? "bg-slate-950/80 border-2 border-cyan-500/60 shadow-2xl shadow-cyan-500/10 scale-105"
									: "bg-slate-950/60 border border-slate-800 hover:border-slate-700 shadow-xl"
							}`}
						>
							{pkg.recommended && (
								<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[11px] font-bold shadow-md uppercase tracking-wider flex items-center gap-1">
									<Sparkles size={12} />
									<span>Khuyên Dùng</span>
								</div>
							)}

							<div>
								<div className="flex items-center justify-between mb-4">
									<span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
										{pkg.badge}
									</span>
								</div>

								<h3 className="text-xl font-bold text-slate-100 mb-2">{pkg.name}</h3>
								<p className="text-slate-400 text-xs leading-relaxed mb-6 min-h-[36px]">
									{pkg.description}
								</p>

								{/* Price */}
								<div className="mb-6 pb-6 border-b border-slate-800">
									<div className="text-3xl font-extrabold text-white tracking-tight">{pkg.price}</div>
									<div className="text-xs text-slate-400 font-medium mt-0.5">{pkg.period}</div>
								</div>

								{/* Features list */}
								<div className="space-y-3 mb-8">
									{pkg.features.map((feat, fIdx) => (
										<div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
											<div className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
												<Check size={12} />
											</div>
											<span>{feat}</span>
										</div>
									))}
								</div>
							</div>

							<button
								onClick={onConsultationOpen}
								className={`w-full py-3.5 text-sm font-semibold rounded-full transition-all active:scale-95 text-center ${pkg.btnStyle}`}
							>
								Đăng ký nhận báo giá
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
