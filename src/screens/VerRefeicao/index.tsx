import { Container, LabelRefeicao, LabelDate, Content, LabelStatus } from "./styles";
import { Alert, View, Text } from 'react-native';
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

import { MealsRemoveById } from "../../storage/meals/mealsRemoveById";
import { MealsGetAll } from "../../storage/meals/mealsGetAll";

import DotRed from '../../assets/DotRed.svg';
import DotGreen from '../../assets/DotGreen.svg';



export function VerRefeicao(RefeicaoProp: any) {

    const navigation = useNavigation();
    const Refeicao = RefeicaoProp.route.params.RefeicaoProp;
    console.log(Refeicao);
    const [mealsToDelete, setMealsToDelete] = useState({});

    const [mealStatus, setMealStatus] = useState<boolean | null>()
    // const [checkSim, setCheckSim] = useState(false)
    // const [checkNao, setCheckNao] = useState(false)

    async function fetchMeals() {
        try {
            const data = await MealsGetAll();
            // console.log(data);
            //Para Deletar
            const filteredDataToDelete = data.filter(item => item.id !== Refeicao.id);

            if (filteredDataToDelete.length == 0) {
                setMealsToDelete(0)
            } else {
                setMealsToDelete(filteredDataToDelete)
            }

        } catch (error) {
            console.log(error);
        }
    }
    async function handleDeletar() {
        Alert.alert('Deletar Refeição', 'Tem certeza que deseja deletar essa refeição?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Deletar', onPress: () => deleteMeal() },
        ]);
    }

    async function deleteMeal() {
        await MealsRemoveById(mealsToDelete)
        navigation.navigate('Home')
    }
    useEffect(() => {
        fetchMeals()
    }, [])

    return (
        <Container>
            <Content>
                <LabelRefeicao >{Refeicao.name}</LabelRefeicao>
                <Text> {Refeicao.description}</Text>
                <LabelDate> Data e Hora </LabelDate>
                <Text> {Refeicao.date} às {Refeicao.hour}</Text>

                <LabelStatus>
                    {Refeicao.mealStatus == true ? <DotGreen /> : <DotRed />}
                    <Text>  {Refeicao.mealStatus == true ? 'Dentro da Dieta' : 'Fora da Dieta'}</Text>
                </LabelStatus>

                <Button
                    style={{ marginTop: 20 }}
                    title="Editar Refeição"
                    onPress={() => { navigation.navigate('EditarRefeicao', { RefeicaoProp: Refeicao }) }}
                />

                <Button
                    style={{ marginTop: 20 }}
                    title="Deletar Refeição"
                    onPress={handleDeletar}
                />

            </Content>
        </Container>
    )
}