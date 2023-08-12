import { useState, useEffect, useCallback } from 'react';
import { Container, Title, ButtonContainer } from "./styles";
import { Text, FlatList, ScrollView } from 'react-native';
import { Button } from "../../components/Button";
import { MealCard } from "../../components/MealCard";

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Header } from "../../components/Header";
import { PercentBanner } from "../../components/PercentBanner";
import { MealsGetAll } from "../../storage/meals/mealsGetAll";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealList } from '../../components/MealList';

export function Home() {

    const [meals, setMeals] = useState({});
    // const [mealsDates, setMealsDates] = useState({});
    const [percentInsideDiet, setPercentInsideDiet] = useState('');

    const navigation = useNavigation();

    async function fetchMeals() {

        // await AsyncStorage.removeItem('@daylidiet:meals');
        try {
            const data = await MealsGetAll();
            setMeals(data);
            const inSideDiet = data.filter(item => item.mealStatus === true);
            const total = data.map(item => item);

            const percentInsideDiet = ((inSideDiet.length / total.length) * 100).toFixed(2);
            setPercentInsideDiet(String(percentInsideDiet + '%'))

            // const Onlyates = data.map(item => item.date);
            // const sortedDates = Onlyates.sort(compareDates);
            // const uniqueSortedDates = [...new Set(sortedDates)];
            // let MealsOrderedByDate = []
            // setMealsDates(uniqueSortedDates)

            // for (let i = 0; i < uniqueSortedDates.length; i++) {
            //     const filterByDate = data.filter(item => item.date === uniqueSortedDates[i]);
            //     const resultObject = {
            //         date: uniqueSortedDates[i],
            //         mealsInfo: filterByDate
            //     };
            //     MealsOrderedByDate.push(resultObject);
            // }
            // setMeals(MealsOrderedByDate);

          
        } catch (error) {
            console.log(error);
        }
    }

    function compareDates(a: string, b: string) {
        const dateA = new Date(a.split('/').reverse().join('-'));
        const dateB = new Date(b.split('/').reverse().join('-'));
        return dateA - dateB;
    }

    // console.log(meals[0].date);
    useFocusEffect(useCallback(() => {
        fetchMeals()
    }, []))
    return (
        <Container>
            <Header />

            <PercentBanner
                percentual={percentInsideDiet}
                onPress={() => { navigation.navigate('Estatisticas') }}
            />

            {/* <Title>
                Refeições
            </Title> */}

            <Button style={{marginTop: 15}} title="Nova Refeição" onPress={() => { navigation.navigate('NovaRefeicao') }} />
         
            <FlatList
                style={{ maxHeight: 300 }}
                data={meals}
                keyExtractor={item => item.date}
                renderItem={({ item }) =>

                    <MealCard
                        date={item.date}
                        hour={item.hour}
                        title={item.name}
                        onPress={() => { navigation.navigate('VerRefeicao', { RefeicaoProp: item.mealsInfo }) }}
                    />

                }

                ListEmptyComponent={() => <Title
                    message="Que tal cadastrar sua primeira refeição?"
                />}
                showsVerticalScrollIndicator={false}
            />

            <ButtonContainer>
            </ButtonContainer>


        </Container>
    )
}