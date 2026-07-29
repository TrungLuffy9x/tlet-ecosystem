import React from "react";
import { BookOpen, Tv, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
	const stats = [
		{ label: "Nền Tảng Chủ Lực", value: "02", unit: "Websites", color: "text-sky-300" },
		{ label: "Kho Nội Dung", value: "100k+", unit: "Truyện & Phim", color: "text-violet-400" },
		{ label: "Quảng Cáo Popup", value: "0%", unit: "Tuyệt Đối KHÔNG", color: "text-emerald-400" },
		{ label: "Tốc Độ & Uptime", value: "99.9%", unit: "Tải xé gió", color: "text-primary" },
	];

	return (
		<section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 overflow-hidden z-10">
			<div className="container mx-auto px-4 text-center">
				{/* Live Status Pill (Styled matching TlétTruyện badges) */}
				<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-emerald-400 text-xs font-semibold mb-8 shadow-md backdrop-blur-md">
					<span className="relative flex h-2.5 w-2.5">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
					</span>
					<span>Trạng Thái Hệ Thống: 100% Hoạt Động Mượt Mà • Uptime 99.9%</span>
				</div>

				{/* Super Title matching tlettruyen h1 styling */}
				<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
					Hệ sinh thái Tlét
				</h1>

				{/* Subtitle */}
				<p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
					Trải nghiệm giải trí trực tuyến thế hệ mới kết hợp hoàn hảo giữa <strong className="text-primary font-semibold">TlétTruyện</strong> (Đọc truyện tranh tốc độ cao) và <strong className="text-sky-300 font-semibold">Tlétfít</strong> (Xem phim HD/Anime Vietsub). Hoàn toàn miễn phí, 100% không quảng cáo rác.
				</p>

				{/* Primary Call to Action Buttons (Matching tlettruyen button.primary-btn) */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
					<a
						href="https://tlettruyen.anlich.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-sm shadow-lg shadow-pink-400/30 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
					>
						<BookOpen size={18} className="group-hover:rotate-6 transition-transform" />
						<span>Đọc TlétTruyện Trực Tuyến</span>
						<ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
					</a>

					<a
						href="https://tletfit.anlich.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm shadow-md hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
					>
						<Tv size={18} className="text-sky-300 group-hover:scale-110 transition-transform" />
						<span>Xem Tlétfít Phim & Anime</span>
						<ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
					</a>
				</div>

				{/* Key Highlights Pill Row */}
				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-400 font-medium mb-14">
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-primary" />
						<span>Không Quảng Cáo Popup</span>
					</div>
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-sky-300" />
						<span>Giao Diện PWA Chuẩn Di Động</span>
					</div>
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-emerald-400" />
						<span>Cập Nhật Liên Tục 24/7</span>
					</div>
					<div className="flex items-center gap-1.5 bg-slate-950/60 px-3.5 py-1.5 rounded-full border border-slate-800">
						<CheckCircle2 size={14} className="text-violet-400" />
						<span>Hỗ Trợ Tối Đa Mọi Thiết Bị</span>
					</div>
				</div>

				{/* Stats Grid (Matching tlettruyen card style) */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
					{stats.map((st, idx) => (
						<div key={idx} className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-rose-500/20 transition-all duration-300 shadow-xl flex flex-col justify-between group">
							<div className={`text-3xl sm:text-4xl font-bold ${st.color} mb-1 tracking-tight`}>
								{st.value}
							</div>
							<div className="text-xs font-bold text-slate-200">{st.label}</div>
							<div className="text-[11px] text-slate-400 font-medium">{st.unit}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
