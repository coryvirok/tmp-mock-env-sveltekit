import { expect, test } from '@playwright/test';
import {env} from '$env/dynamic/private';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();

  expect(env.HELLO).toEqual('WORLD')
});
