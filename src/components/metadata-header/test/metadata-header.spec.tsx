import { newSpecPage } from '@stencil/core/testing';
import { MetadataHeader } from '../metadata-header';

describe('metadata-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MetadataHeader],
      html: `<metadata-header></metadata-header>`,
    });
    expect(page.root).toEqualHtml(`
      <metadata-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </metadata-header>
    `);
  });
});
