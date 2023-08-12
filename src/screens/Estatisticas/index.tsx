import { useState, useEffect } from 'react';
import { Container, Title, ButtonContainer, CountBanner } from "./styles";
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Header } from "../../components/Header";
import { PercentBanner } from "../../components/PercentBanner";
import { MealsGetAll } from "../../storage/meals/mealsGetAll";

import { theme } from '../../theme';


export function Estatisticas() {
    const [meals, setMeals] = useState(0);
    const [inSideDiet, setinSideDiet] = useState(0);
    const [outSideDiet, setoutSideDiet] = useState(0);
    const [percentInsideDiet, setPercentInsideDiet] = useState('');

    const navigation = useNavigation();

    async function fetchMeals() {
        try {
            const data = await MealsGetAll();
            
            const total = data.map(item => item);
            const inSideDiet = data.filter(item => item.mealStatus === true);
            const outSideDiet = data.filter(item => item.mealStatus === false);
            const percentInsideDiet = ((inSideDiet.length / total.length) * 100).toFixed(2);            
            
            setMeals(total.length);
            setinSideDiet(inSideDiet.length)
            setoutSideDiet(outSideDiet.length)
            setPercentInsideDiet(String(percentInsideDiet+'%'))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [])

    return (
        <Container>
            <PercentBanner percentual={percentInsideDiet} />

            <Title>
                Estatísticas Gerais
            </Title>

            <CountBanner
                style={{ backgroundColor: theme.colors.lightgray, width: 370 }}
            >
               <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 5 }}>{meals}</Text>
                <Text>
                    refeições dentro da dieta
                </Text>
            </CountBanner>

            <View style={{flex: 1, flexDirection: 'row', gap: 20, margin: 20}}>
            <CountBanner
                style={{ backgroundColor: theme.colors.lightgreen }}
            >
               <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 5 }}>{inSideDiet}</Text>
                <Text>
                    refeições dentro da dieta
                </Text>
            </CountBanner>

            <CountBanner
                style={{ backgroundColor: theme.colors.lightred }}
            >
               <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 5 }}>{outSideDiet}</Text>
                <Text>
                    refeições dentro da dieta
                </Text>
            </CountBanner>
            </View>
        </Container>
    )
}