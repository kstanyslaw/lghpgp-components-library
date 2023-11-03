import { newSpecPage } from '@stencil/core/testing';
import { CodePreview } from '../code-preview';

describe('code-preview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CodePreview],
      html: `<code-preview></code-preview>`,
    });
    expect(page.root).toEqualHtml(`
      <code-preview>
      </code-preview>
    `);
  });
});
