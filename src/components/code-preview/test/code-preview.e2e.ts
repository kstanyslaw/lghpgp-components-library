import { newE2EPage } from '@stencil/core/testing';

describe('code-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-preview></code-preview>');

    const element = await page.find('code-preview');
    expect(element).toHaveClass('hydrated');
  });
});
