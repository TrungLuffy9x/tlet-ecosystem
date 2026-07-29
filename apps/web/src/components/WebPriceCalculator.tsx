import React, { useState } from "react";
import { Calculator, Check, Send } from "lucide-react";

interface OptionItem {
	id: string;
	label: string;
	price: number;
	category: string;
}

interface WebPriceCalculatorProps {
	onConsultationOpen: () => void;
}

export const WebPriceCalculator: React.FC<WebPriceCalculatorProps> = ({ onConsultationOpen }) => {
	const [selectedType, setSelectedType] = useState<number>(3500000); // Base Landing Page

	const addOns: OptionItem[] = [
		{ id: "pwa", label: "Cài đặt PWA di động (Thêm vào màn hình chính)", price: 1200000, category: "Công nghệ" },
		{ id: "cms", label: "Trang Quản Trị CMS Admin Cập Nhật Nội Dung", price: 2500000, category: "Hệ thống" },
		{ id: "seo", label: "Gói SEO On-Page Nâng Cao Google 95+", price: 1500000, category: "Marketing" },
		{ id: "multilang", label: "Hỗ Trợ Đa Ngôn Ngữ (Anh - Việt)", price: 1800000, category: "Tính năng" },
		{ id: "darkmode", label: "Chế Độ Giao Diện Tối (Dark / Light Mode)", price: 800000, category: "Giao diện" },
		{ id: "domain", label: "Tên Miền .VN / .COM.VN Chính Chủ", price: 850000, category: "Tên miền" }
	];

	const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["pwa", "seo"]);

	const toggleAddOn = (id: string) => {
		if (selectedAddOns.includes(id)) {
			setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
		} else {
			setSelectedAddOns([...selectedAddOns, id]);
		}
	};

	const totalEstimate = selectedType + selectedAddOns.reduce((sum, id) => {
		const found = addOns.find((item) => item.id === id);
		return sum + (found ? found.price : 0);
	}, 0);

	const formatVND = (num: number) => {
		return num.toLocaleString("vi-VN") + "đ";
	};

	return (
		<section id="web-calculator" className="py-16 border-t border-slate-900 relative z-10">
			<div className="container mx-auto px-4 max-w-4xl">
				{/* Section Header */}
				<div className="text-center mb-14 space-y-4">
					<span className="font-semibold uppercase tracking-wider text-cyan-400 text-xs inline-flex items-center gap-1.5">
						<Calculator size={14} />
						<span>Công Cụ Tương Tác</span>
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
						Dự Toán Ngân Sách Thiết Kế Web Tự Động
					</h2>
					<p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
						Tích chọn loại hình website và các tính năng bạn muốn bổ sung để xem ngay chi phí ước tính linh hoạt.
					</p>
				</div>

				<div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
					{/* 1. Select Base Web Type */}
					<div className="mb-8">
						<label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
							1. Chọn Loại Hình Website Gốc
						</label>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
							<button
								type="button"
								onClick={() => setSelectedType(3500000)}
								className={`p-4 rounded-2xl border text-left transition-all ${
									selectedType === 3500000
										? "bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-500/10"
										: "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
								}`}
							>
								<div className="text-xs font-bold">Landing Page</div>
								<div className="text-base font-extrabold text-cyan-400 mt-1">3.500.000đ</div>
							</button>

							<button
								type="button"
								onClick={() => setSelectedType(7900000)}
								className={`p-4 rounded-2xl border text-left transition-all ${
									selectedType === 7900000
										? "bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-500/10"
										: "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
								}`}
							>
								<div className="text-xs font-bold">Web App PWA (Hot)</div>
								<div className="text-base font-extrabold text-cyan-400 mt-1">7.900.000đ</div>
							</button>

							<button
								type="button"
								onClick={() => setSelectedType(12000000)}
								className={`p-4 rounded-2xl border text-left transition-all ${
									selectedType === 12000000
										? "bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-500/10"
										: "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
								}`}
							>
								<div className="text-xs font-bold">Full-stack & CMS</div>
								<div className="text-base font-extrabold text-cyan-400 mt-1">Từ 12.000.000đ</div>
							</button>
						</div>
					</div>

					{/* 2. Select Add-on Options */}
					<div className="mb-10">
						<label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
							2. Tích Chọn Tính Năng Bổ Sung
						</label>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{addOns.map((item) => {
								const isSelected = selectedAddOns.includes(item.id);
								return (
									<button
										key={item.id}
										type="button"
										onClick={() => toggleAddOn(item.id)}
										className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 ${
											isSelected
												? "bg-slate-900 border-cyan-500/60 text-slate-200"
												: "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-300"
										}`}
									>
										<div className="flex items-center gap-2 text-xs font-medium">
											<div className={`w-4 h-4 rounded flex items-center justify-center text-white shrink-0 ${isSelected ? "bg-cyan-500" : "bg-slate-800"}`}>
												{isSelected && <Check size={12} />}
											</div>
											<span>{item.label}</span>
										</div>
										<span className="text-xs font-bold text-cyan-400 shrink-0">+{formatVND(item.price)}</span>
									</button>
								);
							})}
						</div>
					</div>

					{/* 3. Result Bar */}
					<div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
						<div>
							<div className="text-xs text-slate-400 font-medium">Tổng Ngân Sách Dự Toán Ước Tính:</div>
							<div className="text-3xl font-extrabold text-cyan-300 tracking-tight mt-0.5">
								{formatVND(totalEstimate)}
							</div>
						</div>

						<button
							onClick={onConsultationOpen}
							className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
						>
							<Send size={14} />
							<span>Gửi Cấu Hình Dự Toán Để Nhận Báo Giá</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
