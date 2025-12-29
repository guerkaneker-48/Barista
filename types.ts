export interface Ingredient {
  name: string;
  detail: string;
  amount: string;
  icon: string; // Material symbol name
  colorClass?: string; // For bg colors
  textColorClass?: string; // For icon text colors
}

export interface Step {
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface BrewingDetails {
  temperature: string;
  grindSize: string;
  method: string;
  ratio?: string;
}

export interface Coffee {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[]; // e.g., "Classic", "Strong", "Creamy"
  rating: number;
  stats: {
    time: string;
    difficulty: string;
    calories: string;
    yield?: string;
  };
  brewingDetails?: BrewingDetails;
  ingredients: Ingredient[];
  tools?: Tool[];
  steps: Step[];
  category: 'Hot' | 'Iced' | 'Brewing' | 'Special';
  baristaTip?: string;
  tastingNotes?: string[];
  origin?: string;
  roast?: string;
}