import { test, expect, firefox } from '@playwright/test';

test('New project transition', async ({page}) =>{

    await page.goto('http://localhost:5173/admin/projectsList')
    await page.click('button:has-text("Novo projeto")');
    await page.waitForURL('http://localhost:5173/admin/projectsList/projectsSignIn')
    
    expect(page.url()).toBe('http://localhost:5173/admin/projectsList/projectsSignIn')
});

test('side bar transition', async ({page}) =>{

    await page.goto('http://localhost:5173/admin/projectsList')

    await page.click('text=Usuários');
    expect(page.url()).toBe('http://localhost:5173/admin/usersList')

    await page.click('text=Projetos');
    expect(page.url()).toBe('http://localhost:5173/admin/projectsList')

    await page.click('text=Etapas');
    expect(page.url()).toBe('http://localhost:5173/admin/stagesList')

    // await page.click('text=Configurações');
    // await page.click('text=Início');


});
