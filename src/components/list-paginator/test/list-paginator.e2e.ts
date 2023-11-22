import { newE2EPage } from '@stencil/core/testing';

describe('list-paginator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-paginator></list-paginator>');

    const element = await page.find('list-paginator');
    expect(element).toHaveClass('hydrated');
  });
});
