import { newE2EPage } from '@stencil/core/testing';

describe('relative-time', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<relative-time></relative-time>');

    const element = await page.find('relative-time');
    expect(element).toHaveClass('hydrated');
  });
});
