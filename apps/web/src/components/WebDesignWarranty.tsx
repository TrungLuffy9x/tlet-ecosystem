import React from "react";
import { ShieldCheck, Gift, Clock, RefreshCw, Headset, CheckCircle2 } from "lucide-react";

export const WebDesignWarranty: React.FC = () => {
	const offers = [
		{
			icon: <Gift className="w-6 h-6 text-cyan-400" />,
			title: "Tặng Free Hosting & CDN 1 Năm",
			description: "Khách hàng được miễn phí 100% chi phí hạ tầng Server Cloudflare Edge CDN tốc độ cao trong 12 tháng đầu tiên."
		},
		{
			icon: <ShieldCheck className="w-6 h-6 text-teal-300" />,
			title: "Tặng Khảo Sát & SEO Google Audit",
			description: "Tặng gói thiết lập cấu hình SEO On-Page chuẩn Google Lighthouse 95+, hỗ trợ khai báo sitemap & Google Analytics."
		},
		{
			icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
			title: "Bảo Hành Trọn Đời Lỗi Kỹ Thuật",
			description: "Cam kết sửa chữa và khắc phục trọn đời miễn phí tất cả các lỗi lập trình phát sinh trong quá trình vận hành."
		},
		{
			icon: <Clock className="w-6 h-6 text-indigo-400" />,
			title: "Hoàn Tiền 100% Nếu Trễ Hạn",
			description: "Nếu sản phẩm bàn giao trễ hạn quá 5 ngày so với hợp đồng mà không có lý do chính đáng, chúng tôi hoàn tiền 100%."
		}
	];

	return (
		<section id="web-warranty" className="py-16 border-t border-slate-900 relative z-10">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs inline-flex items-center gap-1.5">
						<ShieldCheck size={14} />
						<span>Cam Kết Uy Tín</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Chính Sách Ưu Đãi & Bảo Hành Trọn Đời
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Chúng tôi lấy sự hài lòng và sự ổn định lâu dài của khách hàng làm thước đo uy tín hàng đầu.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{offers.map((item, idx) => (
						<div
							key={idx}
							className="p-6 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
						>
							<div>
								<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
									{item.icon}
								</div>
								<h3 className="text-base font-bold text-slate-100 mb-2">{item.title}</h3>
								<p className="text-slate-400 text-xs leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Big Guarantee Banner */}
				<div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="space-y-2 text-center md:text-left">
						<div className="flex items-center justify-center md:justify-start gap-2">
							<Headset size={20} className="text-cyan-400" />
							<h3 className="text-xl font-bold text-white">Hỗ Trợ Kỹ Thuật 24/7 & Hướng Dẫn Vận Hành</h3>
						</div>
						<p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
							Đội ngũ kỹ thuật viên của chúng tôi trực thuộc hệ sinh thái sẵn sàng hỗ trợ bạn qua Zalo, Telegram và Hotline bất kể ngày nghỉ hay lễ Tết.
						</p>
					</div>

					<a
						href="https://t.me/tlettruyen"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-bold shrink-0 hover:bg-cyan-500/20 transition-all flex items-center gap-2"
					>
						<CheckCircle2 size={15} />
						<span>Kết nối kỹ thuật ngay</span>
					</a>
				</div>
			</div>
		</section>
	);
};
