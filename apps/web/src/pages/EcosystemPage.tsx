import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FirefliesCanvas } from "../components/FirefliesCanvas";
import { HeroSection } from "../components/HeroSection";
import { ServicesGrid } from "../components/ServicesGrid";
import { FeatureMatrix } from "../components/FeatureMatrix";
import { SupportGrid } from "../components/SupportGrid";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { RequestModal } from "../components/RequestModal";

export function EcosystemPage() {
	const [requestModalOpen, setRequestModalOpen] = useState(false);

	return (
		<div className="relative min-h-screen bg-slate-900 text-slate-300 overflow-x-clip font-sans flex flex-col justify-between">
			{/* Ambient Fireflies Canvas Particle Background */}
			<FirefliesCanvas />

			{/* Navigation Header */}
			<Navbar onRequestOpen={() => setRequestModalOpen(true)} />

			{/* Main Content Area */}
			<main className="flex-1">
				{/* Hero Section */}
				<HeroSection />

				{/* Services Showcase */}
				<ServicesGrid />

				{/* Feature Comparison Matrix */}
				<FeatureMatrix />

				{/* Additional Support Services */}
				<SupportGrid onRequestOpen={() => setRequestModalOpen(true)} />

				{/* FAQ Section */}
				<FaqSection />
			</main>

			{/* Shared Ecosystem Footer */}
			<Footer />

			{/* Content Request Modal */}
			<RequestModal
				isOpen={requestModalOpen}
				onClose={() => setRequestModalOpen(false)}
			/>
		</div>
	);
}

export default EcosystemPage;
