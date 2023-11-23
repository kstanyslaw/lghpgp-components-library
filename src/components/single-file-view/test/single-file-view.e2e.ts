import { newE2EPage } from '@stencil/core/testing';

describe('single-file-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<single-file-view></single-file-view>');

    const element = await page.find('single-file-view');
    expect(element).toHaveClass('hydrated');
  });
});
