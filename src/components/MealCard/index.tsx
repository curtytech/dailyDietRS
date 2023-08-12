import { Container, Title, Hour } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    hour: string;
    date: string;
}

export function MealCard({ title, hour, date, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Hour>
                {date} - {hour}
            </Hour>
            <Title>
                {title}
            </Title>
        </Container>

    );
}