import React from "react";

interface TletEcoLogoProps {
	className?: string;
	height?: number;
}

export const TletEcoLogo: React.FC<TletEcoLogoProps> = ({ className = "", height = 38 }) => {
	const [imageError, setImageError] = React.useState(false);

	if (!imageError) {
		return (
			<img
				src="/TletEco.png"
				alt="TlétEco Logo"
				onError={() => setImageError(true)}
				style={{ height: `${height}px` }}
				className={`w-auto object-contain transition-transform duration-300 ${className}`}
			/>
		);
	}

	// Crisp SVG / Typography fallback matching TlétTruyện logo style
	return (
		<div className={`flex flex-col justify-center select-none ${className}`}>
			<div className="text-[10px] font-bold text-rose-300/80 tracking-widest flex items-center gap-1 -mb-1">
				<span>エリシア</span>
				<span className="w-1 h-1 rounded-full bg-rose-400 animate-ping"></span>
			</div>
			<div className="text-2xl font-extrabold tracking-tight flex items-center leading-none">
				<span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Tlét</span>
				<span className="bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent ml-0.5">
					Eco
				</span>
				<span className="text-rose-400 text-xs ml-1 font-bold">✦</span>
			</div>
		</div>
	);
};
