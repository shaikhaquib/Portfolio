/**
 * Robust asset URL resolver for local development, sub-routes, and GitHub Pages
 */
export const resolveAsset = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Normalize path (remove leading './' or '/')
  const clean = path.replace(/^\.?\/+/, '');

  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const pathLower = pathname.toLowerCase();

    // If URL contains 'portfolio' anywhere in the path (case-insensitive for GitHub Pages)
    if (pathLower.includes('portfolio')) {
      const segments = pathname.split('/').filter(Boolean);
      const portfolioSegment = segments.find((s) => s.toLowerCase() === 'portfolio') || 'Portfolio';
      return `/${portfolioSegment}/${clean}`;
    }

    // If on *.github.io with another repository name
    if (window.location.hostname.endsWith('github.io')) {
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0 && !segments[0].includes('.')) {
        return `/${segments[0]}/${clean}`;
      }
    }

    return `/${clean}`;
  }

  return `/${clean}`;
};

/**
 * Automatic Multi-Tier Fallback for <img> tags when an image fails to load
 */
export const handleAssetError = (e: React.SyntheticEvent<HTMLImageElement, Event>, originalPath: string) => {
  const img = e.currentTarget;
  const clean = (originalPath || '').replace(/^\.?\/+/, '');
  if (!clean) return;

  const tryCount = parseInt(img.dataset.tryCount || '0', 10);

  if (tryCount === 0) {
    img.dataset.tryCount = '1';
    img.src = `./${clean}`;
  } else if (tryCount === 1) {
    img.dataset.tryCount = '2';
    img.src = `/Portfolio/${clean}`;
  } else if (tryCount === 2) {
    img.dataset.tryCount = '3';
    img.src = `/${clean}`;
  }
};

