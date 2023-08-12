import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal_Collection } from "../storage.config";
import { MealsGetAll } from "./mealsGetAll";

export async function MealsEdit(editMeal: object) {
    try {
        const storedMeals = await MealsGetAll();

        if (storedMeals.length <= 1) {
            // Converte o objeto em texto
            const storage = JSON.stringify([editMeal]);

            await AsyncStorage.setItem(Meal_Collection, storage)
        } else {
            const filtered = storedMeals.filter(item => item.id !== editMeal.id);
            
            const storage = JSON.stringify([...filtered, editMeal]);
            await AsyncStorage.setItem(Meal_Collection, storage)
            
        }
    } catch (error) {
        throw error;
    }
}