import React from "react";
import { Layout, Smartphone, Database, Zap, Check, ArrowUpRight, Sparkles } from "lucide-react";

interface WebDesignServicesProps {
	onConsultationOpen: () => void;
}

export const WebDesignServices: React.FC<WebDesignServicesProps> = ({ onConsultationOpen }) => {
	const services = [
		{
			id: "landing-page",
			name: "Thiết Kế Landing Page Cao Cấp",
			badge: "Tối Ưu Conversion",
			icon: <Layout className="w-7 h-7 text-cyan-400" />,
			description: "Trang giới thiệu sản phẩm / doanh nghiệp chuyên nghiệp với giao diện rực rỡ, thời gian tải dưới 0.5s và tỷ lệ chuyển đổi khách hàng cao nhất.",
			features: [
				"UI/UX độc quyền sang trọng chuẩn Glassmorphism",
				"Tối ưu SEO On-Page chuẩn Google Lighthouse 95+",
				"Tích hợp nút gọi Zalo, Messenger, Hotline 1-Click",
				"Tích hợp Form đăng ký tư vấn bảo mật"
			]
		},
		{
			id: "web-app",
			name: "Thiết Kế Web App Monorepo",
			badge: "Phổ Biến Nhất",
			icon: <Zap className="w-7 h-7 text-teal-300" />,
			description: "Ứng dụng Web thế hệ mới xây dựng trên kiến trúc Monorepo (React 18 + Vite + Tailwind CSS v4), xử lý mượt mà hàng triệu request.",
			features: [
				"Kiến trúc Monorepo dễ mở rộng quy mô sản phẩm",
				"Giao diện chuẩn Single Page App (SPA) không reload trang",
				"Cấu hình mã nguồn TypeScript strict mode an toàn",
				"Sẵn sàng kết nối RESTful API hoặc GraphQL"
			]
		},
		{
			id: "pwa-app",
			name: "Ứng Dụng Web Di Động PWA",
			badge: "Công Nghệ Đột Phá",
			icon: <Smartphone className="w-7 h-7 text-indigo-400" />,
			description: "Biến trang web của bạn thành ứng dụng di động thực thụ! Khách hàng có thể cài đặt thẳng vào màn hình điện thoại mà không cần qua App Store hay CH Play.",
			features: [
				"Cài đặt 1-Click trực tiếp lên Android & iOS",
				"Hỗ trợ thông báo Push Notification",
				"Hoạt động siêu mượt cả khi mạng yếu",
				"0% Chi phí hoa hồng cửa hàng ứng dụng"
			]
		},
		{
			id: "fullstack-system",
			name: "Hệ Thống Web Full-stack & CMS",
			badge: "Doanh Nghiệp Quy Mô",
			icon: <Database className="w-7 h-7 text-emerald-400" />,
			description: "Giải pháp trọn gói bao gồm trang người dùng (Frontend), trang quản trị (Admin Dashboard CMS) và Backend Cloudflare Edge server tối tân.",
			features: [
				"Trang quản trị CMS dễ dàng cập nhật bài viết & sản phẩm",
				"Phân quyền tài khoản người dùng & quản trị viên",
				"Tự động lưu sao lưu backup dữ liệu định kỳ",
				"Bảo mật cao chống tấn công DDOS & SQL Injection"
			]
		}
	];

	return (
		<section id="web-services" className="py-16 relative z-10">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs inline-flex items-center gap-1.5">
						<Sparkles size={14} />
						<span>Giải Pháp Toàn Diện</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Các Dịch Vụ Thiết Kế Web Chủ Lực
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Lựa chọn dịch vụ phù hợp với mô hình kinh doanh của bạn. Chúng tôi tư vấn giải pháp tối ưu chi phí và hiệu quả lâu dài nhất.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map((srv) => (
						<div
							key={srv.id}
							className="p-8 sm:p-10 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
						>
							<div>
								{/* Top Metadata */}
								<div className="flex items-center justify-between mb-6">
									<div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center p-2.5 shadow-md group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
										{srv.icon}
									</div>
									<span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-bold text-cyan-300">
										{srv.badge}
									</span>
								</div>

								<h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">{srv.name}</h3>
								<p className="text-slate-400 text-sm leading-relaxed mb-6">
									{srv.description}
								</p>

								{/* Features */}
								<div className="space-y-2.5 mb-8 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
									{srv.features.map((feat, idx) => (
										<div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
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
								className="w-full text-center py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 text-sm font-semibold rounded-full transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
							>
								<span>Đăng ký tư vấn gói này</span>
								<ArrowUpRight size={15} />
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
