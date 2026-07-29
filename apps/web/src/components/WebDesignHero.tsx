import React from "react";
import { Sparkles, Code2, CheckCircle2, ArrowRight } from "lucide-react";

interface WebDesignHeroProps {
	onConsultationOpen: () => void;
}

export const WebDesignHero: React.FC<WebDesignHeroProps> = ({ onConsultationOpen }) => {
	return (
		<section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 overflow-hidden z-10">
			<div className="container mx-auto px-4 text-center">
				{/* Top Agency Pill */}
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-8 shadow-md backdrop-blur-md">
					<Code2 size={15} className="text-cyan-400" />
					<span>Dịch Vụ Thiết Kế Web Chuẩn PWA • Tốc Độ Xé Gió • Tối Ưu SEO Google</span>
				</div>

				{/* Main Title */}
				<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
					THIẾT KẾ WEBSITE{" "}
					<span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
						HIỆN ĐẠI & ĐỘT PHÁ
					</span>
				</h1>

				{/* Subtitle */}
				<p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
					Chúng tôi xây dựng các giao diện Web & Web App thế hệ mới bằng công nghệ tiên tiến (React, Vite, Tailwind v4, PWA, Edge CDN Cloudflare). Giao diện sang trọng, mượt mà 60fps, 100% không bảo trì phiền phức.
				</p>

				{/* Primary Call to Action Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
					<button
						onClick={onConsultationOpen}
						className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
					>
						<span>Nhận Tư Vấn & Báo Giá Nhanh</span>
						<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
					</button>

					<a
						href="#web-calculator"
						className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm shadow-md hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
					>
						<Sparkles size={16} className="text-cyan-400" />
						<span>Tự Tính Ngân Sách Dự Toán</span>
					</a>
				</div>

				{/* Key Guarantees */}
				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-400 font-medium mb-14">
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-cyan-400" />
						<span>Bảo Hành Trọn Đời Lỗi Kỹ Thuật</span>
					</div>
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-teal-400" />
						<span>Tặng Hosting & Edge CDN 1 Năm</span>
					</div>
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-emerald-400" />
						<span>Tối Ưu Điểm SEO Google 95+</span>
					</div>
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-indigo-400" />
						<span>Bàn Giao Đúng Hạn 100%</span>
					</div>
				</div>

				{/* Web Service Highlight Cards */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
					<div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group">
						<div className="text-3xl sm:text-4xl font-bold text-cyan-300 mb-1 tracking-tight">
							99.9%
						</div>
						<div className="text-xs font-bold text-slate-200">Uptime Đỉnh Cao</div>
						<div className="text-[11px] text-slate-400 font-medium">Hạ tầng Cloudflare Edge</div>
					</div>

					<div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group">
						<div className="text-3xl sm:text-4xl font-bold text-teal-300 mb-1 tracking-tight">
							&lt; 0.5s
						</div>
						<div className="text-xs font-bold text-slate-200">Tốc Độ Tải Trang</div>
						<div className="text-[11px] text-slate-400 font-medium">Tối ưu PWA + Vite</div>
					</div>

					<div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group">
						<div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1 tracking-tight">
							100%
						</div>
						<div className="text-xs font-bold text-slate-200">Bảo Hành Lỗi</div>
						<div className="text-[11px] text-slate-400 font-medium">Hỗ trợ kỹ thuật 24/7</div>
					</div>

					<div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group">
						<div className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-1 tracking-tight">
							0đ
						</div>
						<div className="text-xs font-bold text-slate-200">Chi Phí Phát Sinh</div>
						<div className="text-[11px] text-slate-400 font-medium">Minh bạch ngân sách</div>
					</div>
				</div>
			</div>
		</section>
	);
};
