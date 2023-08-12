import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal_Collection } from "../storage.config";
// import { MealsGetAll } from "./mealsGetAll";

export async function MealsRemoveById(mealsWithoutDelete: object | 0) {
    try {

        //neste parametro estao as refeicoes nao deletadas ->>>>>>> mealsWithoutDelete

        if (mealsWithoutDelete == 0) {
            // const storedMeals = await MealsGetAll();
            // const erase = JSON.stringify(storedMeals);
            await AsyncStorage.removeItem(Meal_Collection);
            // await AsyncStorage.removeItem('@daylidiet:meals');

        } else {
            await AsyncStorage.setItem(Meal_Collection, JSON.stringify(mealsWithoutDelete));
        }

    } catch (error) {
        throw error;
        console.log(error);
    }
}