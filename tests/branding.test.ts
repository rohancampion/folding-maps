import { access, readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';

describe('Quiet Gears branding', () => {
  it('uses the approved logo in the shared site shell', async () => {
    const shell = await readFile('components/Shell.tsx', 'utf8');

    expect(shell).toContain('src="/brand/quiet-gears-logo.jpg"');
    expect(shell).toContain('alt=""');
  });

  it('provides site and Apple icons through Next.js file conventions', async () => {
    await expect(access('public/brand/quiet-gears-logo.jpg')).resolves.toBeUndefined();
    await expect(access('app/icon.jpg')).resolves.toBeUndefined();
    await expect(access('app/apple-icon.jpg')).resolves.toBeUndefined();
  });
});
