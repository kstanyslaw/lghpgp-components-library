import { newSpecPage } from '@stencil/core/testing';
import { SingleFileView } from '../single-file-view';

describe('single-file-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SingleFileView],
      html: `<single-file-view></single-file-view>`,
    });
    expect(page.root).toEqualHtml(`
      <single-file-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </single-file-view>
    `);
  });
});
