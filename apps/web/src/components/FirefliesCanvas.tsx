import { useEffect, useRef, useState } from "react";

interface Firefly {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
	baseOpacity: number;
	phase: number;
	pulseSpeed: number;
}

const PINK_R = 255;
const PINK_G = 105;
const PINK_B = 180;

const FIREFLY_COUNT = 80;
const GLOW_BLUR = 6;

function createFirefly(width: number, height: number): Firefly {
	return {
		x: Math.random() * width,
		y: Math.random() * height,
		vx: (Math.random() - 0.5) * 0.15,
		vy: (Math.random() - 0.5) * 0.15,
		radius: Math.random() * 2.2 + 0.8,
		baseOpacity: Math.random() * 0.5 + 0.3,
		phase: Math.random() * Math.PI * 2,
		pulseSpeed: Math.random() * 0.008 + 0.004,
	};
}

export function FirefliesCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animFrameRef = useRef<number>(0);
	const firefliesRef = useRef<Firefly[]>([]);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		if (isMobile) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		function resize() {
			if (!canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		resize();
		window.addEventListener("resize", resize);

		firefliesRef.current = Array.from({ length: FIREFLY_COUNT }, () =>
			createFirefly(canvas.width, canvas.height)
		);

		let frameCount = 0;

		function animate() {
			if (!canvas || !ctx) return;
			frameCount++;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const particles = firefliesRef.current;

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];

				p.x += p.vx;
				p.y += p.vy;

				if (frameCount % 200 === 0 && Math.random() < 0.3) {
					p.vx += (Math.random() - 0.5) * 0.05;
					p.vy += (Math.random() - 0.5) * 0.05;
					const maxV = 0.25;
					p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
					p.vy = Math.max(-maxV, Math.min(maxV, p.vy));
				}

				if (p.x < -10) p.x = canvas.width + 10;
				if (p.x > canvas.width + 10) p.x = -10;
				if (p.y < -10) p.y = canvas.height + 10;
				if (p.y > canvas.height + 10) p.y = -10;

				const opacity = p.baseOpacity + Math.sin(frameCount * p.pulseSpeed + p.phase) * 0.25;
				const clampedOpacity = Math.max(0.1, Math.min(1, opacity));

				ctx.shadowBlur = GLOW_BLUR;
				ctx.shadowColor = `rgba(${PINK_R}, ${PINK_G}, ${PINK_B}, ${clampedOpacity * 0.8})`;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${PINK_R}, ${PINK_G}, ${PINK_B}, ${clampedOpacity})`;
				ctx.fill();
			}

			ctx.shadowBlur = 0;
			animFrameRef.current = requestAnimationFrame(animate);
		}

		animFrameRef.current = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener("resize", resize);
			if (animFrameRef.current) {
				cancelAnimationFrame(animFrameRef.current);
			}
		};
	}, [isMobile]);

	if (isMobile) return null;

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 pointer-events-none z-0"
			aria-hidden="true"
		/>
	);
}
