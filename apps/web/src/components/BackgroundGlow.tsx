import React from "react";

export const BackgroundGlow: React.FC = () => {
	return (
		<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
			{/* Top-left Rose/Pink Glow */}
			<div className="absolute -top-40 -left-40 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>

			{/* Top-right Violet/Purple Glow */}
			<div className="absolute -top-20 -right-20 w-96 h-96 sm:w-[550px] sm:h-[550px] bg-violet-600/20 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

			{/* Center Cyan Glow */}
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "4s" }}></div>

			{/* Bottom Emerald/Pink Mix Glow */}
			<div className="absolute -bottom-40 right-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-pink-600/15 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: "6s" }}></div>

			{/* Subtle Mesh Grid Pattern */}
			<div 
				className="absolute inset-0 opacity-[0.03]" 
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
					backgroundSize: '36px 36px'
				}}
			></div>
		</div>
	);
};
