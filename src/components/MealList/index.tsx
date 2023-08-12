import { Container, Title, Hour } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Text, FlatList, ScrollView } from 'react-native';


export function MealList(mealInfo: any, mealsDates: any) {
    // console.log(mealsDates);
    return (
        <Container>

            {/* <Text>{mealsDates}</Text> */}
            {/* <FlatList 
                 style={{ maxHeight: 300 }}
                 data={mealInfo}
                 keyExtractor={item => item.date}
                 renderItem={({ item }) => <Text> </Text> }

            /> */}
            {/* // <Hour>
            //     {hour}
            // </Hour>
            // <Title>
            //     {title}
            // </Title> */}
        </Container>

    );
}