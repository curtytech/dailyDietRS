import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal_Collection } from '../storage.config'

export async function MealsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(Meal_Collection);
        const meals: string[] = storage ? JSON.parse(storage) : [];

        return meals;

    } catch (error) {
        throw error;
    }
}