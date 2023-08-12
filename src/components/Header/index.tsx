import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
// import { logoImg } from '@assets/logo.png';
import { Text } from 'react-native';
import LogoSVG from '../../assets/Logo.svg';
import UserPng from '../../assets/User.png';
import { Image } from 'react-native';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('Home')
    }

    return (
        <Container >

            <LogoSVG
                style={{ marginLeft: 20 }}
            />
            <Image source={UserPng} alt="User" style={{ marginRight: 20 }}/>
           
        </Container>

    );
}