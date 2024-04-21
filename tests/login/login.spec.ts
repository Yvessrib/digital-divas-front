import { test, expect, firefox } from '@playwright/test';

test('Forget Password', async({page}) =>{

    await page.goto('http://localhost:5173');
    await page.click('a[href="/login/passwordRefactor"]');
    await expect(page.url()).toBe('http://localhost:5173/login/passwordRefactor')

    await page.fill('input[type="email"]','teste@example.com')
    await page.click('button:has-text("Entrar")');
    await expect(page.url()).toBe('http://localhost:5173/login/passwordCode')

    await page.fill('input[type="email"]','codigoExemplo')
    await page.click('button:has-text("Entrar")');
    await expect(page.url()).toBe('http://localhost:5173/login/passwordChange')

    await page.fill('input[type="email"]','newPassword')
    await page.fill('input[type="password"]','newPassword')
    await page.click('button:has-text("Entrar")');
    await expect(page.url()).toBe('http://localhost:5173/admin/projectsList')
});