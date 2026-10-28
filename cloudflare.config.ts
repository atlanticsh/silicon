import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "silicon",
		domains: ["silicon.atlantic.sh"],
		compatibilityDate: "2026-10-28",
		compatibilityFlags: [
			"global_fetch_strictly_public",
		],
		observability: {
			enabled: true,
			traces: { enabled: true, headSamplingRate: 0.01 },
		},
	},
});
