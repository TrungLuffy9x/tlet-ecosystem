import React from "react";
import { MessageSquare, ShieldAlert, Cpu, Sparkles } from "lucide-react";

interface SupportGridProps {
	onRequestOpen: () => void;
}

export const SupportGrid: React.FC<SupportGridProps> = ({ onRequestOpen }) => {
	return (
		<section id="support" className="py-16 border-t border-slate-900/80 relative z-10">
			<div className="container mx-auto px-4">
				<h3 className="text-xl font-bold text-slate-200 mb-8 text-center">Nội Dung & Kênh Hỗ Trợ Khác</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					
					{/* Item 1 */}
					<div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between group hover:border-rose-500/20 transition-all">
						<div className="flex items-start gap-4 mb-4">
							<div className="p-2.5 bg-rose-500/10 text-primary rounded-xl shrink-0 mt-0.5">
								<MessageSquare size={20} />
							</div>
							<div className="space-y-1">
								<h4 className="text-sm font-bold text-slate-200">Kênh Cộng Đồng</h4>
								<p className="text-xs text-slate-400 leading-relaxed">
									Tham gia nhóm Telegram để thảo luận, yêu cầu phim/truyện và nhận thông báo cập nhật mới nhất.
								</p>
							</div>
						</div>
						<a
							href="https://t.me/tlettruyen"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full text-center py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-primary text-xs font-semibold rounded-full transition-all"
						>
							Ghé thăm Telegram
						</a>
					</div>

					{/* Item 2 */}
					<div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between group hover:border-rose-500/20 transition-all">
						<div className="flex items-start gap-4 mb-4">
							<div className="p-2.5 bg-rose-500/10 text-primary rounded-xl shrink-0 mt-0.5">
								<ShieldAlert size={20} />
							</div>
							<div className="space-y-1">
								<h4 className="text-sm font-bold text-slate-200">Báo Lỗi & DMCA</h4>
								<p className="text-xs text-slate-400 leading-relaxed">
									Gửi yêu cầu gỡ bỏ bản quyền hoặc thông báo lỗi kỹ thuật tại trang Liên hệ chính thức của chúng tôi.
								</p>
							</div>
						</div>
						<a
							href="#faq"
							className="w-full text-center py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-primary text-xs font-semibold rounded-full transition-all"
						>
							Liên hệ báo lỗi
						</a>
					</div>

					{/* Item 3 */}
					<div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between group hover:border-rose-500/20 transition-all">
						<div className="flex items-start gap-4 mb-4">
							<div className="p-2.5 bg-rose-500/10 text-primary rounded-xl shrink-0 mt-0.5">
								<Cpu size={20} />
							</div>
							<div className="space-y-1">
								<h4 className="text-sm font-bold text-slate-200">API & Dữ Liệu</h4>
								<p className="text-xs text-slate-400 leading-relaxed">
									Hỗ trợ kết nối API tìm kiếm, đồng bộ hóa danh sách xem/đọc giữa các thiết bị thông qua tài khoản.
								</p>
							</div>
						</div>
						<a
							href="#features"
							className="w-full text-center py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-primary text-xs font-semibold rounded-full transition-all"
						>
							Xem thông tin API
						</a>
					</div>

					{/* Item 4 */}
					<div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between group hover:border-rose-500/20 transition-all">
						<div className="flex items-start gap-4 mb-4">
							<div className="p-2.5 bg-rose-500/10 text-primary rounded-xl shrink-0 mt-0.5">
								<Sparkles size={20} />
							</div>
							<div className="space-y-1">
								<h4 className="text-sm font-bold text-slate-200">Yêu Cầu Nội Dung</h4>
								<p className="text-xs text-slate-400 leading-relaxed">
									Truyện tranh hoặc phim bộ yêu thích của bạn chưa có? Gửi yêu cầu ngay cho ban quản trị!
								</p>
							</div>
						</div>
						<button
							onClick={onRequestOpen}
							className="w-full text-center py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-primary text-xs font-semibold rounded-full transition-all"
						>
							Gửi Request ngay
						</button>
					</div>

				</div>
			</div>
		</section>
	);
};
