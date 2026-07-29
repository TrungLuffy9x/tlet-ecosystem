import React, { useState } from "react";
import { WebDesignNavbar } from "../components/WebDesignNavbar";
import { WebDesignHero } from "../components/WebDesignHero";
import { WebDesignServices } from "../components/WebDesignServices";
import { WebDesignPricing } from "../components/WebDesignPricing";
import { WebDesignWarranty } from "../components/WebDesignWarranty";
import { WebDesignProcess } from "../components/WebDesignProcess";
import { WebPriceCalculator } from "../components/WebPriceCalculator";
import { WebDesignPortfolio } from "../components/WebDesignPortfolio";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";
import { FirefliesCanvas } from "../components/FirefliesCanvas";

export const WebDesignPage: React.FC = () => {
	const [consultationModalOpen, setConsultationModalOpen] = useState(false);

	return (
		<div className="relative min-h-screen bg-slate-900 text-slate-300 overflow-x-clip font-sans flex flex-col justify-between">
			{/* Ambient Fireflies Particle Background */}
			<FirefliesCanvas />

			{/* Dedicated Web Agency Navbar */}
			<WebDesignNavbar onConsultationOpen={() => setConsultationModalOpen(true)} />

			{/* Main Content Area */}
			<main className="flex-1">
				{/* Web Design Hero Banner */}
				<WebDesignHero onConsultationOpen={() => setConsultationModalOpen(true)} />

				{/* Core Web Services */}
				<WebDesignServices onConsultationOpen={() => setConsultationModalOpen(true)} />

				{/* Transparent Pricing Packages */}
				<WebDesignPricing onConsultationOpen={() => setConsultationModalOpen(true)} />

				{/* Special Offers & Lifetime Warranty Guarantees */}
				<WebDesignWarranty />

				{/* 6-Step Web Development Workflow Process */}
				<WebDesignProcess />

				{/* Interactive Price Estimator Calculator */}
				<WebPriceCalculator onConsultationOpen={() => setConsultationModalOpen(true)} />

				{/* Showcase Portfolio */}
				<WebDesignPortfolio />

				{/* FAQ Section */}
				<FaqSection />
			</main>

			{/* Shared Ecosystem Footer */}
			<Footer />

			{/* Consultation Booking Modal */}
			<ConsultationModal
				isOpen={consultationModalOpen}
				onClose={() => setConsultationModalOpen(false)}
			/>
		</div>
	);
};

export default WebDesignPage;
