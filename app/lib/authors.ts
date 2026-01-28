// Author image lookup for blog posts and talks

export interface Author {
  name: string;
  image: string;
  title?: string;
}

// Map of author names to their image files
const authorImages: Record<string, string> = {
  "Vincent Tang": "/images/people/vincent_tang.webp",
  "Charlton Trezevant": "/images/people/charlton_trezevant.webp",
  "Justin Herron": "/images/people/justin_herron.webp",
  "Ryan Harrigan": "/images/people/ryan_harrigan.webp",
  "Lydia Hendriks": "/images/people/lydia_hendriks.webp",
  "Tampa Devs": "/images/people/no-avatar.webp",
};

const defaultImage = "/images/people/no-avatar.webp";

/**
 * Get the image URL for an author by name
 */
export function getAuthorImage(authorName: string): string {
  // Check for exact match
  if (authorImages[authorName]) {
    return authorImages[authorName];
  }

  // Check if the name contains multiple authors (e.g., "Ryan Harrigan & Lydia Hendriks")
  // Return the first author's image
  for (const [name, image] of Object.entries(authorImages)) {
    if (authorName.includes(name)) {
      return image;
    }
  }

  return defaultImage;
}

/**
 * Get author info with image
 */
export function getAuthor(authorName: string): Author {
  return {
    name: authorName,
    image: getAuthorImage(authorName),
  };
}

/**
 * Parse author string and return array of authors
 * Handles multiple authors separated by "&", "and", or ","
 */
export function getAuthors(authorString: string): Author[] {
  // Split on common separators
  const names = authorString
    .split(/\s*(?:&|,|\band\b)\s*/i)
    .map(name => name.trim())
    .filter(name => name.length > 0);

  return names.map(name => ({
    name,
    image: getAuthorImage(name),
  }));
}

/**
 * Check if author string contains multiple authors
 */
export function hasMultipleAuthors(authorString: string): boolean {
  return /\s*(?:&|,|\band\b)\s*/i.test(authorString);
}
