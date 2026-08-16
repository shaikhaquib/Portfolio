/**
 * Robust asset URL resolver for local development, sub-routes, and GitHub Pages
 */
export const resolveAsset = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Normalize path (remove leading './' or '/')
  const clean = path.replace(/^\.?\//, '');

  if (typeof window !== 'undefined') {
    const isGhPages = window.location.pathname.startsWith('/Portfolio');
    const base = isGhPages ? '/Portfolio/' : '/';
    return `${base}${clean}`;
  }

  return `/${clean}`;
};
