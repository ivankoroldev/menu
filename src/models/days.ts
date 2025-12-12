export interface MealItem {
    dish: string;
    amount: string;
}

export interface MealBlock {
    name: string;
    items: MealItem[];
}

export interface DayMeals {
    breakfast: MealBlock;
    snack_1: MealBlock;
    lunch: MealBlock;
    snack_2: MealBlock;
    dinner: MealBlock;
}

export interface DayPlan {
    day: number;
    weekday: string;
    meals: DayMeals;
}
