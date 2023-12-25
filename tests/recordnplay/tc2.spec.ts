import { test, expect } from '@playwright/test';

test('Basic Java IDE: Side Menu Tests, @tc2', async ({ page }) => {
  await page.goto('https://www.jdoodle.com/online-java-compiler/');
  await page.getByRole('heading', { name: 'Online Java Compiler IDE' }).click();
  await page.locator('.border-primary > .border-primary').first().click();
  await page.locator('.border-primary > .border-primary').first().click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'New Project' }).click();
  await page.getByText('Do you want to clear current').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.locator('.ace_content').first().click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'My Projects' }).click();
  await page.getByRole('heading', { name: 'Sign in to JDoodle' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Execute History' }).click();
  await page.getByRole('heading', { name: 'Recent Executions' }).click();
  await page.getByLabel('Remember execution history in').check();
  await page.locator('.static > div > .section-quaternary > .absolute').click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Collaborate' }).click();
  await page.getByText('You\'re using TogetherJS!').click();
  await page.locator('#togetherjs-walkthrough-next').click();
  await page.locator('#togetherjs-walkthrough-next').click();
  await page.locator('#togetherjs-walkthrough-next').click();
  await page.locator('#togetherjs-walkthrough-next').click();
  await page.locator('#togetherjs-walkthrough-next').click();
  await page.locator('#togetherjs-walkthrough-next').click();
  await page.getByText('Alright, you\'re ready to use').click();
  await page.locator('header').filter({ hasText: 'You\'re using TogetherJS!' }).getByRole('button').click();
  await page.getByText('Invite a friend').click();
  await page.locator('#togetherjs-share').getByRole('paragraph').click();
  await page.locator('#togetherjs-share').getByRole('textbox').click();
  await page.locator('#togetherjs-share').getByRole('button').click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('heading', { name: 'Sign in to JDoodle' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Save As' }).click();
  await page.getByText('Sign in to enjoy all the').click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Editable Share' }).click();
  await page.getByText('To serve you better, we\'ve').click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Instant Share (No Login/Save' }).click();
  await page.getByRole('heading', { name: 'Instant Share' }).click();
  await page.getByText('Instant Share creates share').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#code > .ace_scroller > .ace_content').click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Copy to Clipboard' }).click();
  await page.getByText('Copied to clipboard!').click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Open (from local file)' }).hover();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Save (to local file)' }).click();
  await page.getByText('Downloaded Successfully!').click();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('button', { name: 'Pretty Print' }).hover();

  await page.hover("//div[contains(@class,'section-quinary')]//button[contains(@class,'link-primary')]");
  await page.getByRole('link', { name: 'How To/FAQ' }).click();
  const page1 = await page.waitForEvent('popup');
  await page1.getByRole('heading', { name: 'Embark on the JDoodle Journey' }).click();
  await page.getByText('For Multiple Files, Custom').click();
});