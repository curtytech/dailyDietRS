import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../theme';

import { Home } from '../screens/Home';
import { NovaRefeicao } from '../screens/NovaRefeicao';
import { VerRefeicao } from '../screens/VerRefeicao';
import { EditarRefeicao } from '../screens/EditarRefeicao';
import { Feedback } from '../screens/Feedback';
import { Estatisticas } from '../screens/Estatisticas';


const { Navigator, Screen } = createNativeStackNavigator();



export function AppRoutes() {


    return (

        <Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#DDDEDF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                //   fontWeight: 'bold',              
            },
        }}

        >
            <Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Screen
                name='Feedback'
                component={Feedback}
                options={{ headerShown: false }}
            />
            <Screen
                name='NovaRefeicao'
                component={NovaRefeicao}
                options={{ title: 'Nova Refeição' }}
            />
            <Screen
                name='VerRefeicao'
                component={VerRefeicao}
                options={{ title: 'Refeição' }}
            />
            <Screen
                name='EditarRefeicao'
                component={EditarRefeicao}
                options={{ title: 'Editar Refeição' }}
            />
            <Screen
                name='Estatisticas'
                component={Estatisticas}
                options={{ title: 'Estatísticas' }}

            />
        </Navigator>
    )


}
