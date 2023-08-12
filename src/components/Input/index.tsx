import {
    Container,
} from "./styles";
import { useTheme } from "styled-components/native";

import { TextInputProps, TextInput } from "react-native";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

import { RegDate } from '../../utils/regEx';

export function Input({ inputRef, ...rest }: Props) {

    const { colors } = useTheme();

    return (
        <Container
            ref={inputRef}
            {...rest}
        >
        </Container>
    );
}