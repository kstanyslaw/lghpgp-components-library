import { newE2EPage } from '@stencil/core/testing';

fdescribe('code-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-preview></code-preview>');

    const element = await page.find('code-preview');
    expect(element).toHaveClass('hydrated');
  });

  it('renders code correctly with Prism highlighting', async () => {
    const page = await newE2EPage();

    await page.setContent('<code-preview></code-preview>');

    const component = await page.find('code-preview');
    expect(component).not.toBeNull();

    /**
     * Set mock property
     */
    const mockProp = ['const a = 1;', 'const b = 2;'];
    component.setProperty('code', mockProp);
    component.setProperty('codeLang', 'javascript');
    await page.waitForChanges();

    const pre = await component.find('pre');
    expect(pre).not.toBeNull();

    const codeBlocks = await component.findAll('code');
    expect(codeBlocks.length).toBe(2);

    expect(codeBlocks[0].innerHTML).toContain('<span class="token keyword">const</span>');
    expect(codeBlocks[1].innerHTML).toContain('<span class="token keyword">const</span>');
  });

  it('handles empty code array', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-preview></code-preview>');
    const component = await page.find('code-preview');

    component.setProperty('code', []);
    component.setProperty('codeLang', 'javascript');
    await page.waitForChanges();

    expect(component.innerHTML).toEqualText("");
  });
})
