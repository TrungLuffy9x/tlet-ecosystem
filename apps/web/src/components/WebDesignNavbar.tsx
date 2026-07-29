import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PhoneCall, Sparkles, ArrowLeft } from "lucide-react";

interface WebDesignNavbarProps {
	onConsultationOpen: () => void;
}

export const WebDesignNavbar: React.FC<WebDesignNavbarProps> = ({ onConsultationOpen }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-[999] transition-all duration-300 ${
				scrolled
					? "bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-cyan-950/20 py-2"
					: "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3.5"
			}`}
		>
			<div className="container mx-auto px-4 flex items-center justify-between gap-4 transition-all duration-300">
				{/* Brand Logo */}
				<Link to="/" className="flex items-center gap-2 transition-colors shrink-0 group" aria-label="Tlét Home">
					<img
						src="/TletFit.png"
						alt="Tlét Logo"
						className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-8" : "h-9.5"}`}
					/>
				</Link>

				{/* Desktop Navigation Links */}
				<nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
					<a href="#web-services" className="text-slate-300 hover:text-cyan-400 transition-colors">
						<span>Dịch vụ</span>
					</a>
					<a href="#web-pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">
						<span>Bảng giá</span>
					</a>
					<a href="#web-warranty" className="text-slate-300 hover:text-cyan-400 transition-colors">
						<span>Ưu đãi & Bảo hành</span>
					</a>
					<a href="#web-process" className="text-slate-300 hover:text-cyan-400 transition-colors">
						<span>Quy trình</span>
					</a>
					<a href="#web-calculator" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-300 font-bold">
						<Sparkles size={14} className="text-cyan-400 animate-pulse" />
						<span>Dự toán chi phí</span>
					</a>
				</nav>

				{/* Right Action Buttons */}
				<div className="hidden sm:flex items-center gap-2.5">
					<Link
						to="/"
						className="px-4 py-1.5 text-xs font-bold text-primary bg-slate-900 border border-rose-500/30 rounded-full transition-transform duration-200 flex items-center gap-1.5 hover:scale-105 active:scale-95"
					>
						<ArrowLeft size={13} />
						<span>Hệ Sinh Thái</span>
					</Link>

					<button
						onClick={onConsultationOpen}
						className="px-4.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 rounded-full shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all active:scale-95 flex items-center gap-1.5"
					>
						<PhoneCall size={13} />
						<span>Báo Giá Nhanh 1-1</span>
					</button>
				</div>

				{/* Mobile Menu Toggle Button */}
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
				>
					{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden bg-slate-950 border-b border-slate-800 p-4 space-y-3 animate-in fade-in duration-200">
					<a
						href="#web-services"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 text-sm font-semibold"
					>
						Dịch vụ thiết kế web
					</a>
					<a
						href="#web-pricing"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 text-sm font-semibold"
					>
						Gói chi phí & Bảng giá
					</a>
					<a
						href="#web-warranty"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 text-sm font-semibold"
					>
						Ưu đãi & Bảo hành trọn đời
					</a>
					<a
						href="#web-process"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 text-sm font-semibold"
					>
						Quy trình 6 bước
					</a>
					<a
						href="#web-calculator"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-cyan-300 hover:bg-slate-900 text-sm font-bold"
					>
						Công cụ dự toán chi phí
					</a>
					<div className="pt-2 border-t border-slate-900 flex flex-col gap-2">
						<button
							onClick={() => {
								setMobileMenuOpen(false);
								onConsultationOpen();
							}}
							className="w-full text-center py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold rounded-full shadow-md"
						>
							Báo Giá Nhanh 1-1
						</button>
						<Link
							to="/"
							className="w-full text-center py-2 bg-slate-900 border border-rose-500/30 text-primary text-xs font-bold rounded-full"
						>
							Về Trang Hệ Sinh Thái
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};
