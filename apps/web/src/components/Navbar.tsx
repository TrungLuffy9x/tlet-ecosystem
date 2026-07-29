import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ExternalLink, Code2 } from "lucide-react";

interface NavbarProps {
	onRequestOpen?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestOpen }) => {
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
					? "bg-slate-950/95 backdrop-blur-xl border-b border-rose-500/20 shadow-xl shadow-rose-950/10 py-2"
					: "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3.5"
			}`}
		>
			<div className="container mx-auto px-4 flex items-center justify-between gap-4 transition-all duration-300">
				{/* Logo Column */}
				<a href="#" className="flex items-center transition-colors shrink-0 group" aria-label="Tlét Home">
					<img
						src="/TletFit.png"
						alt="Tlét Logo"
						className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-8" : "h-9.5"}`}
					/>
				</a>

				{/* Center Desktop Navigation Menu */}
				<nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
					<a href="#services" className="text-slate-300 hover:text-primary transition-colors">
						<span>Dịch vụ</span>
					</a>
					<a href="#features" className="text-slate-300 hover:text-primary transition-colors">
						<span>So sánh</span>
					</a>
					<a href="#support" className="text-slate-300 hover:text-primary transition-colors">
						<span>Hỗ trợ & API</span>
					</a>
					<a href="#faq" className="text-slate-300 hover:text-primary transition-colors">
						<span>FAQ</span>
					</a>
				</nav>

				{/* Right Action Buttons */}
				<div className="hidden sm:flex items-center gap-2.5">
					<Link
						to="/web-design"
						className="px-4 py-1.5 text-xs font-bold text-cyan-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-cyan-500/30 rounded-full transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
					>
						<Code2 size={13} />
						<span>Dịch vụ Web</span>
					</Link>

					<a
						href="#services"
						className="px-4.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-full shadow-md shadow-rose-500/20 hover:scale-105 transition-all active:scale-95 flex items-center gap-1.5"
					>
						<span>Trải nghiệm</span>
						<ExternalLink size={13} />
					</a>
				</div>

				{/* Mobile Menu Button */}
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
						href="#services"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-primary hover:bg-slate-900 text-sm font-semibold"
					>
						Dịch vụ chính
					</a>
					<a
						href="#features"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-primary hover:bg-slate-900 text-sm font-semibold"
					>
						So sánh & Đột phá
					</a>
					<a
						href="#support"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-primary hover:bg-slate-900 text-sm font-semibold"
					>
						Hỗ trợ & API
					</a>
					<a
						href="#faq"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-slate-300 hover:text-primary hover:bg-slate-900 text-sm font-semibold"
					>
						FAQ
					</a>
					<Link
						to="/web-design"
						onClick={() => setMobileMenuOpen(false)}
						className="block py-2 px-3 rounded-lg text-cyan-300 hover:bg-slate-900 text-sm font-bold"
					>
						Trang Thiết Kế Web
					</Link>
					{onRequestOpen && (
						<div className="pt-2 border-t border-slate-900 flex gap-2">
							<button
								onClick={() => {
									setMobileMenuOpen(false);
									onRequestOpen();
								}}
								className="w-full text-center py-2 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold rounded-full"
							>
								Request Content
							</button>
						</div>
					)}
				</div>
			)}
		</header>
	);
};
