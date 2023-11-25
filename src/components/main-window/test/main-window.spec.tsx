import { newSpecPage } from '@stencil/core/testing';
import { MainWindow } from '../main-window';

describe('main-window', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainWindow],
      html: `<main-window></main-window>`,
    });
    expect(page.root).toEqualHtml(`
      <main-window>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-window>
    `);
  });
});
