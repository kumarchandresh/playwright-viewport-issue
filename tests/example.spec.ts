import { test, expect } from '@playwright/test';

const fullHD = { width: 1920, height: 1080 };

test('viewport config', async ({ viewport }) => {
	expect(viewport).toBe(fullHD);
});

test('page viewport', async ({ page }) => {
	expect(page.viewportSize()).toBe(fullHD);
});
