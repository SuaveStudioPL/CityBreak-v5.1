# Local Food Data Structure

## Overview
This directory contains local food data for different cities in the XploreCity application. Each city has its own dedicated file to improve code organization and maintainability.

## File Structure
- `warsaw.ts` - Local food items for Warsaw
- `paris.ts` - Local food items for Paris
- `rome.ts` - Local food items for Rome

## Data Structure
Each city file exports an array of `LocalFood` objects with the following properties:
- `name`: The name of the food item
- `type`: Category of food (e.g., snack, main, dessert, drink)
- `description`: Brief description of the food item
- `isVegetarian`: Boolean indicating if the item is vegetarian
- `isVegan`: Boolean indicating if the item is vegan
- `imageUrl`: URL to an image of the food item (used for displaying food images in the application)

## Adding a New City
To add local food data for a new city:

1. Create a new file named after the city (e.g., `berlin.ts`) in this directory
2. Use the following template:

```typescript
import { LocalFood } from '../../types/localFood';

export const berlinFood: LocalFood[] = [
  {
    name: "Food Name",
    type: "category",
    description: "Description of the food item.",
    isVegetarian: true/false,
    isVegan: true/false,
    imageUrl: "https://example.com/image.jpg"
  },
  // Add more food items...
];
```

3. Update the main `localFood.ts` file to include the new city:

```typescript
// Add import for the new city
import { berlinFood } from './localFood/berlin';

// Add the new city to the localFood object
export const localFood: Record<string, LocalFood[]> = {
  Warsaw: warsawFood,
  Paris: parisFood,
  Rome: romeFood,
  Berlin: berlinFood  // Add the new city here
};
```

## Best Practices
- Use high-quality, free-to-use images (Wikimedia Commons is recommended)
- Provide accurate and concise descriptions
- Include dietary information (vegetarian/vegan status)
- Organize food items by type for better user experience
