import { BrowserRouter, Routes, Route } from "react-router-dom";
import EcosystemPage from "./pages/EcosystemPage";
import WebDesignPage from "./pages/WebDesignPage";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<EcosystemPage />} />
				<Route path="/web-design" element={<WebDesignPage />} />
				<Route path="*" element={<EcosystemPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
