import React from "react";
import { ExternalLink, Star } from "lucide-react";

export const WebDesignPortfolio: React.FC = () => {
	const projects = [
		{
			title: "TlétTruyện - Đọc Truyện Tranh Online",
			category: "PWA Web App • Lật Sách 3D • Multi-CDN",
			image: "/tlettruyen-favicon.png",
			link: "https://tlettruyen.anlich.dev",
			metric: "Tốc độ tải < 0.3s • 100k+ Truyện",
			description: "Hệ thống đọc truyện tranh trực tuyến chuẩn PWA thế hệ mới với hiệu ứng lật sách 3D sống động và bộ lọc NSFW Quiz an toàn."
		},
		{
			title: "Tlétfít - Xem Phim & Anime HD",
			category: "ArtPlayer HLS • Stream 1080p • Cinema Mode",
			image: "/tletfit-favicon.png",
			link: "https://tletfit.anlich.dev",
			metric: "Streaming 1080p • 0% Ads",
			description: "Nền tảng truyền tải video HLS mượt mà tích hợp trình phát ArtPlayer hiện đại, tự động lưu tiến trình đang xem."
		}
	];

	return (
		<section className="py-16 relative z-10">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs inline-flex items-center gap-1.5">
						<Star size={14} />
						<span>Sản Phẩm Đã Thực Thi</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Dự Án Tiêu Biểu Trong Hệ Sinh Thái
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Các dự án thực tế đang vận hành mượt mà phục vụ hàng chục ngàn người dùng Việt Nam mỗi ngày.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((item, idx) => (
						<div
							key={idx}
							className="p-8 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
						>
							<div>
								<div className="flex items-center justify-between mb-6">
									<div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center p-2.5 shadow-md group-hover:scale-110 transition-all">
										<img src={item.image} alt={item.title} className="w-full h-full object-contain" />
									</div>
									<span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-cyan-300">
										{item.metric}
									</span>
								</div>

								<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs">
									{item.category}
								</span>
								<h3 className="text-xl font-bold text-slate-100 mt-1 mb-2">{item.title}</h3>
								<p className="text-slate-400 text-xs leading-relaxed mb-6">
									{item.description}
								</p>
							</div>

							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full text-center py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-cyan-300 text-xs font-semibold rounded-full transition-all flex items-center justify-center gap-1.5"
							>
								<span>Truy cập trải nghiệm thực tế</span>
								<ExternalLink size={14} />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
