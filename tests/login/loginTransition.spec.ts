import { test, expect, firefox } from '@playwright/test';

test('First Login transition', async ({page}) =>{
    await page.goto('http://localhost:5173');

    await page.fill('input[type="email"]','teste@example.com')
    await page.fill('input[type="password"]','senhaProvisoria')
    await page.click('button:has-text("Entrar")');

    await expect(page.url()).toBe('http://localhost:5173/login/firstAcess')
   
});

test('Forget Password Transition', async({page}) =>{

    await page.goto('http://localhost:5173');
    await page.click('a[href="/login/passwordRefactor"]');

    await expect(page.url()).toBe('http://localhost:5173/login/passwordRefactor')

});