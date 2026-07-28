import React from "react";
import { Sparkles, Check, X, Zap } from "lucide-react";

export const FeatureMatrix: React.FC = () => {
	const comparisons = [
		{
			feature: "Quảng cáo Popup / Banner độc hại",
			tlet: "Cam kết 0% Quảng cáo",
			others: "Tràn ngập popup rác, nhảy tab linh tinh",
			tletBetter: true
		},
		{
			feature: "Tốc độ tải nội dung",
			tlet: "Siêu tốc độ (Tối ưu PWA + Edge CDN)",
			others: "Chậm, hay giật lag khi nhiều người truy cập",
			tletBetter: true
		},
		{
			feature: "Chế độ đọc / xem phim",
			tlet: "Lật sách 3D độc quyền + ArtPlayer 1080p",
			others: "Giao diện cũ kỹ, player video cơ bản",
			tletBetter: true
		},
		{
			feature: "Cài đặt Ứng dụng di động",
			tlet: "Hỗ trợ PWA 1-Click cài thẳng vào máy",
			others: "Bắt tải APK hoặc chỉ dùng web browser",
			tletBetter: true
		},
		{
			feature: "Tài khoản & Đồng bộ Bookmark",
			tlet: "Đồng bộ đa thiết bị tức thì",
			others: "Hay bị mất lịch sử hoặc bắt trả phí",
			tletBetter: true
		},
		{
			feature: "Chi phí sử dụng",
			tlet: "Miễn phí 100% Trọn đời",
			others: "Nạp VIP / Giới hạn lượt xem",
			tletBetter: true
		}
	];

	return (
		<section id="features" className="py-20 relative z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
						<Zap size={14} />
						<span>Điểm Khác Biệt Đột Phá</span>
					</div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
						So Sánh Trải Nghiệm Vượt Trội
					</h2>
					<p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
						Tại sao cộng đồng người dùng luôn lựa chọn sản phẩm trong Tlét Ecosystem cho nhu cầu giải trí hàng ngày?
					</p>
				</div>

				{/* Comparison Matrix Table / Cards */}
				<div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
					<div className="overflow-x-auto">
						<table className="w-full text-left border-collapse min-w-[650px]">
							<thead>
								<tr className="border-b border-slate-800 bg-slate-950/80">
									<th className="p-5 sm:p-6 text-sm font-bold text-slate-200">Tiêu Chí So Sánh</th>
									<th className="p-5 sm:p-6 text-sm font-bold text-primary bg-rose-500/5 border-x border-rose-500/20">
										<div className="flex items-center gap-2">
											<Sparkles size={18} className="text-primary" />
											<span>TLÉT ECOSYSTEM</span>
										</div>
									</th>
									<th className="p-5 sm:p-6 text-sm font-bold text-slate-300">Trang Web Thông Thường</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-slate-800/60 text-sm">
								{comparisons.map((item, idx) => (
									<tr key={idx} className="hover:bg-slate-900/40 transition-colors">
										<td className="p-5 sm:p-6 font-semibold text-slate-200">
											{item.feature}
										</td>
										<td className="p-5 sm:p-6 font-bold text-emerald-400 bg-rose-500/5 border-x border-rose-500/20">
											<div className="flex items-center gap-2">
												<div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
													<Check size={14} />
												</div>
												<span>{item.tlet}</span>
											</div>
										</td>
										<td className="p-5 sm:p-6 text-slate-300">
											<div className="flex items-center gap-2">
												<div className="p-1 rounded-full bg-rose-500/20 text-primary shrink-0">
													<X size={14} />
												</div>
												<span>{item.others}</span>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};
