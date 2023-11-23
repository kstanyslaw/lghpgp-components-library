import { newE2EPage } from '@stencil/core/testing';

describe('gist-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gist-viewer></gist-viewer>');

    const element = await page.find('gist-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
