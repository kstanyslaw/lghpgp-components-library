import { newE2EPage } from '@stencil/core/testing';

describe('gists-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gists-list></gists-list>');

    const element = await page.find('gists-list');
    expect(element).toHaveClass('hydrated');
  });
});
