import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal_Collection } from "../storage.config";
import { MealsGetAll } from "./mealsGetAll";

export async function MealsCreate(newMeal: object) {
    try {
        const storedMeals = await MealsGetAll();

        // Converte o objeto em texto
        const storage = JSON.stringify([...storedMeals, newMeal])
        await AsyncStorage.setItem(Meal_Collection, storage)

        // await AsyncStorage.removeItem(Meal_Collection)
    } catch (error) {
        throw error;
    }
}