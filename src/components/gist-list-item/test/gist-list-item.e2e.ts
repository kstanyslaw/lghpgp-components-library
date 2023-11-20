import { newE2EPage } from '@stencil/core/testing';

describe('gist-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gist-list-item></gist-list-item>');

    const element = await page.find('gist-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
