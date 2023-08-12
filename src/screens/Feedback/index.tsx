import { Button } from "../../components/Button";
import { Container, Title, Subtitle } from "./styles";
import { useNavigation } from '@react-navigation/native';
import Positive from '../../assets/Positive.png';
import Negative from '../../assets/Negative.png';
import { Image } from 'react-native';
import { theme } from '../../theme';

export function Feedback(mealStatus: Boolean) {
    const navigation = useNavigation();

    const MealStatus = mealStatus.route.params.mealStatus;

    // const mealStatus = false;
    return (
        <Container>

            {MealStatus === true ? (
                <>
                    <Title
                        style={{ color: theme.colors.darkgreen }}
                    >
                        Continue assim!
                    </Title>

                    <Subtitle>
                        Você continua dentro da dieta. Muito bem!
                    </Subtitle>

                    <Image style={{ marginTop: 40 }}
                        source={Positive} alt="Positive" />
                </>
            ) : (
                <>
                    <Title
                        style={{ color: theme.colors.darkred }}
                    >
                        Que pena!
                    </Title>

                    <Subtitle>
                        Você continua dentro da dieta. Muito bem!
                    </Subtitle>

                    <Image style={{ marginTop: 40 }}
                        source={Negative} alt="Negative" />
                </>
            )}




            <Button
                style={{ marginTop: 40 }}
                onPress={() => { navigation.navigate('Home') }}
                title="Ir para página inicial" />
        </Container>
    )
}