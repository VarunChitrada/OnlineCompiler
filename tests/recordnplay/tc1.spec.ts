import { test, expect } from '@playwright/test';

test('UI elements Test : Headers , Footers, Search Language & Font : All Options, Night & Dark mode, Java Basic IDE, Execute, @tc1', async ({ page }) => {
  await page.goto('https://www.jdoodle.com/online-java-compiler/');
  // Validate UI elements against Array 
  await page.getByRole('button', { name: 'Products' }).click();
  await page.getByRole('button', { name: 'Solutions' }).click();
  await page.getByRole('button', { name: 'Resources' }).click();

  // Login Page check details
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  // Light vs Dark mode
  await page.getByRole('button', { name: 'Toggle Light or Dark Mode' }).click();
  await page.locator('.text-center > .flex').click();
  await page.getByRole('button', { name: 'Toggle Light or Dark Mode' }).click();
  await page.locator('.text-center > .flex').click();

  await page.locator("//*[@id='navbar-collapse-basic']//img[@alt='language logo']").click();

  //await page.locator('#navbar-collapse-basic div').filter({ hasText: 'C++' }).nth(4).click();
  await page.getByText('Top Searches:').click();
  await page.getByRole('link', { name: 'Java (Advanced) Java (' }).click();
  await page.getByPlaceholder('Search Language').click();
  await page.getByRole('link', { name: 'Typescript Typescript' }).click();
  await page.getByPlaceholder('Search Language').click();
  await page.getByText('Top Searches:').click();
  await page.getByRole('link', { name: 'Java Java' }).click();

  await page.getByRole('heading', { name: 'Online Java Compiler IDE' }).click();
  await page.locator('#code div').filter({ hasText: 'public class MyClass { public' }).nth(1).click();
  await page.getByRole('tab', { name: 'External Libraries' }).click();
  await page.getByRole('tab', { name: 'Upload Files' }).click();
  await page.getByLabel('Upload Files').getByText('No files uploaded').click();
  await page.getByRole('tab', { name: 'Input' }).click();
  await page.getByRole('tab', { name: 'Output' }).click();
  await page.getByText('No files generated').click();
  await page.getByRole('tab', { name: 'External Libraries' }).click();

  // Footer checks
  await page.getByRole('heading', { name: 'Share this awesome tool with' }).click();
  await page.getByRole('button', { name: 'Copy share link' }).click();
  await page.getByText('Copied to clipboard!').click();
  await page.getByRole('heading', { name: 'Like coding with JDoodle?' }).click();
  await page.getByText('An online programming').click();

  // Font updates
  await page.pause();
  await page.getByText('Font Size:').first().click();
  await page.getByLabel('Font Size:').selectOption('16');
  await page.locator('#code div').filter({ hasText: 'public class MyClass { public' }).nth(1).click();
  
});