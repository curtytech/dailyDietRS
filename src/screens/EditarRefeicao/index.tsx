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
import { MealsEdit } from "../../storage/meals/mealsEdit";
import { MealsGetAll } from "../../storage/meals/mealsGetAll";

import { TextInputMask } from 'react-native-masked-text'
import { theme } from "../../theme";


export function EditarRefeicao(RefeicaoProp: any) {
    const Refeicao = RefeicaoProp.route.params.RefeicaoProp;

    const schema = yup.object().shape({
        name: yup.string().required("Preencha este campo!").default(Refeicao.name),
        description: yup.string().required("Preencha este campo!").default(Refeicao.description),
        date: yup.string().default(Refeicao.date),
        hour: yup.string().default(Refeicao.hour),
    })

    const [mealStatus, setMealStatus] = useState<boolean | null>(Refeicao.mealStatus)
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

    async function handleEditar(data) {
        const mealsGetAll = await MealsGetAll();

        data.id = Refeicao.id;
        data.mealStatus = mealStatus;

        if(data.date == null){
            data.date = Refeicao.date;
        }
        if(data.hour == null){
            data.hour = Refeicao.hour;
        }

        if (mealStatus == null) {
            Alert.alert('Preencha o botão sim ou não', 'Ele sinaliza que se a refeição esta dentro da dieta.')
        } else {
            await MealsEdit(data);

            if (mealStatus == true) {
                navigation.navigate('Feedback', { mealStatus: true })
            } else {
                navigation.navigate('Feedback', { mealStatus: false })
            }
        }
    }

    useEffect(() => {
        if (mealStatus == true) {
            fcheckSim()
        } else {
            fcheckNao()
        }
    }, [])

    return (
        <Container>
            <Content>

                <Label> Nome</Label>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur} // E chamado qndo textinput e focado
                            onChangeText={onChange}
                            value={value}
                            defaultValue={schema.fields.name.spec.default}
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
                            onBlur={onBlur} // E chamado qndo textinput e focado
                            onChangeText={onChange}
                            multiline
                            autoCapitalize="sentences"
                            value={value}
                            defaultValue={schema.fields.description.spec.default}

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
                                // <Input
                                //     onBlur={onBlur} // E chamado qndo textinput e focado
                                //     onChangeText={onChange}
                                //     value={value}
                                //     defaultValue={schema.fields.date.spec.default}
                                //     keyboardType="numeric"
                                // />

                                <TextInputMask
                                    placeholder={schema.fields.date.spec.default}
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
                                    placeholder={schema.fields.hour.spec.default}
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

                <Button title="Editar Refeição"
                    onPress={handleSubmit(handleEditar)}
                />
            </Content>
        </Container>
    )
}