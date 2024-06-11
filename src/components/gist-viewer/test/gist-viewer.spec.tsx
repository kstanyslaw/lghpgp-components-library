import { newSpecPage } from '@stencil/core/testing';
import { GistViewer } from '../gist-viewer';

describe('gist-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GistViewer],
      html: `<gist-viewer></gist-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <gist-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gist-viewer>
    `);
  });
});
