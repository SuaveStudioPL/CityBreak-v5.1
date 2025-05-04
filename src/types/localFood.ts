export interface LocalFood {
  name: string;
  type: string;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  // imageUrl?: string; // Replaced by imageUrls array
  imageUrls?: string[]; // Array of potential image URLs for fallback
}
