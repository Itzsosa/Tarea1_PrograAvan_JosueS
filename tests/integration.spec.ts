import { test, expect } from '@playwright/test';

test.describe('Post page', () => {
  test('loads and displays basic post structure', async ({ page }) => {
    // Navega a la página del post
    await page.goto('/related/1');

    // Verifica que los elementos básicos estén presentes
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('article')).toBeVisible();
    
    // Verifica que haya un párrafo para el cuerpo del post
    const bodyParagraph = page.locator('article p').first();
    await expect(bodyParagraph).toBeVisible();
    
    // Verifica que haya información del autor
    const authorInfo = page.locator('article p:has-text("Author:")');
    await expect(authorInfo).toBeVisible();
    
    // Verifica que haya información de contacto
    const contactInfo = page.locator('article p:has-text("Contact:")');
    await expect(contactInfo).toBeVisible();
    
    // Verifica que haya una fecha de publicación
    const publishDate = page.locator('.container > p').first();
    await expect(publishDate).toBeVisible();
  });
});