import { Container, Title, SubTitle } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{
    percentual: string;
}

export function PercentBanner({ percentual, ...rest }: Props) {
    return (
        <Container {...rest} >
            <Title>
                {percentual}
            </Title>
            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </Container>

    );
}