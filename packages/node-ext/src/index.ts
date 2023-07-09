import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export function readJSON<T = unknown>(filepath: string) {
  const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
  return JSON.parse(content) as T;
}
