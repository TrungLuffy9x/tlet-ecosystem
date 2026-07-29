import React from "react";
import { MessageSquare, Layout, Code2, ShieldCheck, Rocket, Wrench } from "lucide-react";

export const WebDesignProcess: React.FC = () => {
	const steps = [
		{
			num: "01",
			title: "Tiếp Nhận & Tư Vấn",
			icon: <MessageSquare size={18} className="text-cyan-400" />,
			description: "Lắng nghe ý tưởng, khảo sát mô hình kinh doanh và tư vấn cấu trúc web + bảng giá tối ưu nhất."
		},
		{
			num: "02",
			title: "Thiết Kế UI/UX Mockup",
			icon: <Layout size={18} className="text-teal-300" />,
			description: "Phác thảo giao diện độc quyền chuẩn Glassmorphism, phối màu hài hòa và gửi khách duyệt trước khi code."
		},
		{
			num: "03",
			title: "Lập Trình Web App",
			icon: <Code2 size={18} className="text-indigo-400" />,
			description: "Viết mã nguồn bằng React 18, Vite & Tailwind CSS v4. Đảm bảo code sạch, chuẩn TypeScript 100%."
		},
		{
			num: "04",
			title: "Audit Tốc Độ & Security",
			icon: <ShieldCheck size={18} className="text-emerald-400" />,
			description: "Kiểm tra tốc độ tải trang Google Lighthouse 95+, audit lỗ hổng bảo mật và tối ưu trải nghiệm di động."
		},
		{
			num: "05",
			title: "Bàn Giao & Deploy Edge",
			icon: <Rocket size={18} className="text-rose-400" />,
			description: "Đẩy mã nguồn lên Cloudflare Edge CDN, gán tên miền chính thức và bàn giao tài liệu quản trị."
		},
		{
			num: "06",
			title: "Bảo Trì & Đồng Hành",
			icon: <Wrench size={18} className="text-amber-400" />,
			description: "Bảo hành trọn đời lỗi kỹ thuật, đồng hành nâng cấp và hỗ trợ kỹ thuật viên 24/7."
		}
	];

	return (
		<section id="web-process" className="py-16 relative z-10">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs inline-flex items-center gap-1.5">
						<Rocket size={14} />
						<span>Quy Trình Chuẩn Xóa</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Quy Trình 6 Bước Làm Việc Chuyên Nghiệp
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Minh bạch từng giai đoạn phát triển giúp bạn dễ dàng theo dõi tiến độ và kiểm soát chất lượng sản phẩm.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{steps.map((st, idx) => (
						<div
							key={idx}
							className="p-6 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex items-start gap-4 group"
						>
							<div className="text-2xl font-extrabold text-slate-700 group-hover:text-cyan-400 transition-colors shrink-0">
								{st.num}
							</div>
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<div className="p-1 rounded-md bg-slate-900 border border-slate-800">
										{st.icon}
									</div>
									<h3 className="text-sm font-bold text-slate-100">{st.title}</h3>
								</div>
								<p className="text-slate-400 text-xs leading-relaxed pt-1">
									{st.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
