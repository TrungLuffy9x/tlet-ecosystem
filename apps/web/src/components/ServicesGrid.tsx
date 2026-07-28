import React from "react";
import { Sparkles, Check, ExternalLink, Zap, Music } from "lucide-react";

export const ServicesGrid: React.FC = () => {
	const services = [
		{
			id: "tlettruyen",
			name: "TlétTruyện",
			subtitle: "Manga, Manhua, Manhwa & Comic Online",
			tagline: "HỆ THỐNG ĐỌC TRUYỆN TRANH TỐC ĐỘ XÉ GIÓ",
			description: "Hệ thống đọc truyện tranh trực tuyến chuẩn PWA thế hệ mới với giao diện tối ưu sắc nét cho di động & PC. Tốc độ tải trang cực nhanh, chế độ lật sách 3D sống động, NSFW Quiz và đồng bộ theo dõi truyện mượt mà.",
			status: "Đang hoạt động",
			statusColor: "bg-emerald-500",
			badge: "Phổ biến nhất",
			favicon: "/tlettruyen-favicon.png",
			btnGradient: "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-500/10",
			link: "https://tlettruyen.anlich.dev",
			features: [
				"Đọc 2 trang lật sách 3D như truyện giấy thật",
				"Hỗ trợ PWA Cài đặt app trực tiếp lên màn hình",
				"Tự động lưu lịch sử đọc & Bookmark truyện",
				"Bộ lọc NSFW Quiz độc đáo & bảo mật cao",
				"Multi-Server CDN đảm bảo không bao giờ giật lag"
			]
		},
		{
			id: "tletfit",
			name: "Tlétfít",
			subtitle: "Phim Lẻ, Phim Bộ & Anime Vietsub HD",
			tagline: "NỀN TẢNG TRUYỀN TẢI VIDEO CINEMA CHẤT LƯỢNG CAO",
			description: "Nền tảng xem phim & anime trực tuyến chất lượng 1080p Full HD với trình phát ArtPlayer hiện đại. Tự động lưu tiến trình đang xem, cập nhật phim mới liên tục 24/7, Vietsub chuẩn xác hoàn toàn miễn phí.",
			status: "Đang hoạt động",
			statusColor: "bg-emerald-500",
			badge: "Chất lượng 1080p",
			favicon: "/tletfit-favicon.png",
			btnGradient: "bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white",
			link: "https://tletfit.anlich.dev",
			features: [
				"Trình phát video ArtPlayer mượt mà hỗ trợ HLS",
				"Chất lượng phát 1080p chuẩn Vietsub sắc nét",
				"Tự động lưu thời gian đang xem (Resume playback)",
				"Chế độ Rạp phim (Cinema Mode) tập trung tối đa",
				"0% Quảng cáo chèn ngang video"
			]
		}
	];

	return (
		<section id="services" className="py-16 relative z-10">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-primary text-xs inline-flex items-center gap-1.5">
						<Sparkles size={14} />
						<span>Cốt Lõi Hệ Sinh Thái</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Dịch Vụ Nền Tảng Giải Trí
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Tổng hợp các nền tảng và dịch vụ phi thương mại được phát triển và vận hành nhằm cung cấp trải nghiệm giải trí tốt nhất cho cộng đồng.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{services.map((srv) => (
						<div
							key={srv.id}
							className="p-8 sm:p-10 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-rose-500/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
						>
							<div>
								{/* Card Top Metadata */}
								<div className="flex items-center justify-between mb-6">
									<div className="w-14 h-14 bg-slate-900 border border-slate-800/80 rounded-2xl flex items-center justify-center p-2.5 shadow-md group-hover:scale-110 group-hover:border-rose-500/30 transition-all duration-300">
										<img src={srv.favicon} alt={srv.name} className="w-full h-full object-contain drop-shadow" />
									</div>
									<div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-medium text-slate-300">
										<span className={`w-2 h-2 rounded-full ${srv.statusColor} animate-pulse`}></span>
										<span>{srv.status}</span>
									</div>
								</div>

								{/* Category & Tagline */}
								<span className="font-semibold uppercase tracking-wider text-primary text-xs">
									{srv.subtitle}
								</span>
								<h3 className="text-2xl font-bold text-slate-100 mt-1 mb-3">{srv.name}</h3>
								<p className="text-slate-400 text-sm leading-relaxed mb-6">
									{srv.description}
								</p>

								{/* Features List */}
								<div className="space-y-2.5 mb-8 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
									<h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
										<Zap size={14} className="text-primary" />
										<span>Tính Năng Nổi Bật</span>
									</h4>
									{srv.features.map((feat, fIdx) => (
										<div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
											<div className="p-0.5 rounded-full bg-rose-500/20 text-primary shrink-0">
												<Check size={12} />
											</div>
											<span>{feat}</span>
										</div>
									))}
								</div>
							</div>

							{/* Call to Action Button */}
							<a
								href={srv.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`w-full text-center py-3 text-sm font-semibold rounded-full transition-all active:scale-95 flex items-center justify-center gap-1.5 ${srv.btnGradient}`}
							>
								<span>Trải nghiệm {srv.name} ngay</span>
								<ExternalLink size={15} />
							</a>
						</div>
					))}
				</div>

				{/* Future Ecosystem Expansion Card */}
				<div className="p-6 sm:p-8 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
							<Music className="w-6 h-6 text-primary animate-bounce" />
						</div>
						<div>
							<div className="flex items-center gap-2">
								<h3 className="text-lg font-bold text-slate-100">TlétLab & TlétMusic</h3>
								<span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
									Đang Nghiên Cứu
								</span>
							</div>
							<p className="text-slate-400 text-xs sm:text-sm mt-1">
								Hệ thống phát nhạc Lossless trực tuyến và công cụ đồng bộ dữ liệu đa thiết bị đang được hoàn thiện.
							</p>
						</div>
					</div>
					<div className="shrink-0">
						<span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold inline-flex items-center gap-2">
							<Sparkles size={14} className="text-primary" />
							Sắp Ra Mắt
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
