import {
    Container,
    Title,
} from "./styles";
import { View } from 'react-native';

import { TouchableOpacityProps } from "react-native";
import { theme } from '../../theme';
import DotRed from '../../assets/DotRed.svg';
import DotGreen from '../../assets/DotGreen.svg';

type Props = TouchableOpacityProps & {
    title: string;
    checked: boolean;
    value: string;
}

export function CheckButton({ title, checked, value, ...rest }: Props) {

    let color = ''
    let borderColor = ''

    if (checked == true) {
        if (value == 'sim') {
            color = theme.colors.lightgreen
            borderColor = theme.colors.darkgreen
        } else {
            color = theme.colors.lightred
            borderColor = theme.colors.darkred
        }
    } else {
        color = theme.colors.lightgray
        borderColor = theme.colors.lightgray
    }

    return (
        <Container {...rest} style={{ backgroundColor: color, borderColor: borderColor }}>
            <View style={{ flexDirection: 'row' }}>
                <Title>
                    {value === 'sim' ? <DotGreen /> : <DotRed />}
                    {title}
                </Title>
            </View>
        </Container>

    );
}