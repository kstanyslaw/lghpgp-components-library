import { newSpecPage } from '@stencil/core/testing';
import { GistsList } from '../gists-list';

describe('gists-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GistsList],
      html: `<gists-list></gists-list>`,
    });
    expect(page.root).toEqualHtml(`
      <gists-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gists-list>
    `);
  });
});
