import React from "react";
import { ExternalLink, Heart } from "lucide-react";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-slate-950/90 pt-16 pb-8 border-t border-slate-900 mt-auto relative z-10 text-slate-400">
			<div className="container mx-auto px-4">
				{/* Upper row: Grid of 5 columns */}
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 mb-8 text-left">
					{/* Logo and Description (col-span-2) */}
					<div className="md:col-span-2 space-y-4">
						<a href="#" className="flex items-center gap-2 transition-colors shrink-0 mb-3 inline-flex" aria-label="Tlét home">
							<img src="/TletFit.png" alt="Tlét Logo" className="h-12 w-auto object-contain" />
						</a>
						<p className="max-w-sm text-sm text-slate-400 leading-relaxed">
							Nền tảng giải trí trực tuyến phi thương mại chất lượng cao thuộc Hệ sinh thái Tlét. Cập nhật liên tục các bộ truyện tranh Manga, Anime Vietsub & Phim HD mới nhất với đường truyền tốc độ cao, hoàn toàn miễn phí.
						</p>
					</div>

					{/* Column 1: Khám Phá */}
					<div className="space-y-3">
						<h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Khám Phá</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="https://tlettruyen.anlich.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
									<span>TlétTruyện</span>
									<ExternalLink size={12} />
								</a>
							</li>
							<li>
								<a href="https://tletfit.anlich.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
									<span>Tlétfít</span>
									<ExternalLink size={12} />
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-primary transition-colors">TlétLab (Soon)</a>
							</li>
						</ul>
					</div>

					{/* Column 2: Thông Tin */}
					<div className="space-y-3">
						<h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Thông Tin</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#features" className="hover:text-primary transition-colors">Giới Thiệu</a>
							</li>
							<li>
								<a href="https://t.me/tlettruyen" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Liên Hệ Telegram</a>
							</li>
							<li>
								<a href="#faq" className="hover:text-primary transition-colors">Điều Khoản & FAQ</a>
							</li>
							<li>
								<a href="#services" className="hover:text-primary transition-colors">Dịch Vụ Nền Tảng</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Hỗ Trợ & API */}
					<div className="space-y-3">
						<h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Hỗ Trợ & API</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#support" className="hover:text-primary transition-colors">Request Phim / Truyện</a>
							</li>
							<li>
								<a href="#support" className="hover:text-primary transition-colors">Báo Lỗi & DMCA</a>
							</li>
							<li>
								<a href="#support" className="hover:text-primary transition-colors">RESTful Open API</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Lower row: Copyright */}
				<div className="text-center pt-6 border-t border-slate-900 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p className="flex items-center gap-1">
						<span>Phát triển với</span>
						<Heart size={13} className="text-primary fill-primary animate-pulse" />
						<span>cho cộng đồng giải trí Việt Nam.</span>
					</p>
					<p>
						Copyright © 2026 Tlét Ecosystem. Powered by <a href="https://elysiajs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-strong transition-colors font-bold">ElysiaJS</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
