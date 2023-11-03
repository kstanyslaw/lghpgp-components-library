import { newE2EPage } from '@stencil/core/testing';

fdescribe('code-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-preview></code-preview>');

    const element = await page.find('code-preview');
    expect(element).toHaveClass('hydrated');
  });

  it('renders code correctly', async () => {
    const page = await newE2EPage();

    await page.setContent('<code-preview></code-preview>');

    const component = await page.find('code-preview');
    expect(component).not.toBeNull();

    /**
     * Set mock property
     */
    const mockProp = ['const a = 1;', 'const b = 2;'];
    component.setProperty('code', mockProp);
    await page.waitForChanges();

    const rows = await page.findAll('code-preview tbody tr');
    expect(rows.length).toBe(2);

    /**
     * Check first row of code
     */
    expect(await rows[0].find('td:nth-child(1)')).toEqualText('1');
    expect(await rows[0].find('td:nth-child(2)')).toEqualText('const a = 1;');

    /**
     * Check second row of code
     */
    expect(await rows[1].find('td:nth-child(1)')).toEqualText('2');
    expect(await rows[1].find('td:nth-child(2)')).toEqualText('const b = 2;');
  });
})
