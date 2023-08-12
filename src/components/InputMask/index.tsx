import { TextInputMask } from 'react-native-masked-text'

export function InputMask(title: string) {


    return (
        <TextInputMask
            placeholder="CPF"
            type={'cpf'}
            value={cpf}
            onChangeText={value => {
                setCpf(value)
                setErrorCpf(null)
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.maskedInput}
            ref={(ref) => cpfField = ref}
        />

    );
}