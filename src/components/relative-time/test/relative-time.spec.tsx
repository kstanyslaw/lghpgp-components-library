import { newSpecPage } from '@stencil/core/testing';
import { RelativeTime } from '../relative-time';

describe('relative-time', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RelativeTime],
      html: `<relative-time></relative-time>`,
    });
    expect(page.root).toEqualHtml(`
      <relative-time>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </relative-time>
    `);
  });
});
