import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	reporter: 'list',
	use: {
		viewport: { width: 1920, height: 1080 },
	},
	expect: {
		timeout: 5000,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
