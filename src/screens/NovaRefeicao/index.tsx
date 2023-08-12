import { Container, Label, Content, ErrorMessage } from "./styles";
import { Alert, View } from 'react-native';
import { Button } from "../../components/Button";
import { CheckButton } from "../../components/CheckButton";
import { Input } from "../../components/Input";

import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { MealsCreate } from "../../storage/meals/mealsCreate";
import { MealsGetAll } from "../../storage/meals/mealsGetAll";

import { TextInputMask } from 'react-native-masked-text'
import { theme } from "../../theme";


const schema = yup
    .object({
        name: yup.string().required("Preencha este campo!"),
        description: yup.string().required("Preencha este campo!"),
        date: yup.string().required("Preencha este campo!"),
        hour: yup.string().required("Preencha este campo!"),

    })
    .required()

export function NovaRefeicao() {

    const [mealStatus, setMealStatus] = useState<boolean | null>()
    const [checkSim, setCheckSim] = useState(false)
    const [checkNao, setCheckNao] = useState(false)
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function fcheckSim() {
        setCheckSim(true)
        setCheckNao(false)
        setMealStatus(true)
    }

    function fcheckNao() {
        setCheckNao(true)
        setCheckSim(false)
        setMealStatus(false)
    }

    async function handleCadastrar(data) {
        const mealsGetAll = await MealsGetAll();
        // console.log(mealsGetAll); 
        // const MealsCount  = Object.keys(mealsGetAll).length;

        const getAllIds = mealsGetAll.map((item) => item.id);
        const idMaximo = Math.max.apply(null, getAllIds)

        const id = idMaximo + 1;
        data.id = id;
        data.mealStatus = mealStatus;

        if (mealStatus == null) {
            Alert.alert('Preencha o botão sim ou não', 'Ele sinaliza que se a refeição esta dentro da dieta.')
        } else {
            await MealsCreate(data);

            if (mealStatus == true) {
                navigation.navigate('Feedback', { mealStatus: true })
            } else {
                navigation.navigate('Feedback', { mealStatus: false })
            }
        }
    }

    return (
        <Container>
            <Content>

                <Label > Nome</Label>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Nome da refeição"

                            onBlur={onBlur} // E chamado qndo textinput e focado
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.name && <ErrorMessage>{errors.name?.message} </ErrorMessage>}

                <Label > Descrição</Label>
                <Controller
                    control={control}
                    name="description"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Descreva sua refeição"
                            onBlur={onBlur} // E chamado qndo textinput e focado
                            onChangeText={onChange}
                            value={value}
                            multiline
                            autoCapitalize="sentences"
                        />
                    )}
                />
                {errors.description && <ErrorMessage>{errors.description?.message} </ErrorMessage>}

                <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Label > Data</Label>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInputMask
                                placeholder="DD/MM/YYYY"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType="numeric"
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                returnKeyType="done"
                                style={{
                                    borderStyle: 'solid',
                                    borderColor: theme.colors.lightgray,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    padding: 13,
                                    fontSize: theme.fontSizes.md,
                                }}

                            />
                            )}
                        />
                        {errors.date && <ErrorMessage>{errors.date?.message} </ErrorMessage>}

                    </View>
                    <View style={{ flex: 1 }}>
                        <Label > Hora</Label>
                        <Controller
                            control={control}
                            name="hour"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInputMask
                                placeholder="HH:MM"

                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    keyboardType="numeric"
                                    type={'datetime'}
                                    options={{
                                        format: 'HH:mm'
                                    }}
                                    returnKeyType="done"
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: theme.colors.lightgray,
                                        borderWidth: 1,
                                        borderRadius: 8,
                                        padding: 13,
                                        fontSize: theme.fontSizes.md,
                                    }}

                                />
                            )}
                        />
                        {errors.hour && <ErrorMessage>{errors.hour?.message} </ErrorMessage>}

                    </View>
                </View>

                <Label>Está dentro da dieta? </Label>
                <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                    <CheckButton
                        onPress={fcheckSim}
                        title="  Sim"
                        checked={checkSim}
                        value="sim"
                    />

                    <CheckButton
                        onPress={fcheckNao}
                        title="  Não"
                        checked={checkNao}
                        value="nao"
                    />
                </View>

                <Button title="Cadastrar Refeição"
                    onPress={handleSubmit(handleCadastrar)}
                />
            </Content>
        </Container>
    )
}