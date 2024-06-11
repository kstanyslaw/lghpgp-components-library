import { newE2EPage } from '@stencil/core/testing';

describe('metadata-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<metadata-header></metadata-header>');

    const element = await page.find('metadata-header');
    expect(element).toHaveClass('hydrated');
  });
});
