import { newE2EPage } from '@stencil/core/testing';

describe('main-window', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-window></main-window>');

    const element = await page.find('main-window');
    expect(element).toHaveClass('hydrated');
  });
});
