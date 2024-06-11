import { newSpecPage } from '@stencil/core/testing';
import { ListPaginator } from '../list-paginator';

describe('list-paginator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListPaginator],
      html: `<list-paginator></list-paginator>`,
    });
    expect(page.root).toEqualHtml(`
      <list-paginator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </list-paginator>
    `);
  });
});
