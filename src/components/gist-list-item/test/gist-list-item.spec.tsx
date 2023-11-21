import { newSpecPage } from '@stencil/core/testing';
import { GistListItem } from '../gist-list-item';

describe('gist-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GistListItem],
      html: `<gist-list-item></gist-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <gist-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gist-list-item>
    `);
  });
});
