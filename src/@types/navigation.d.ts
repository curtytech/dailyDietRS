export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            NovaRefeicao: undefined;
            Feedback: {
                mealStatus: boolean
            };
            EditarRefeicao: {
                RefeicaoProp: {
                    id: number,
                    name: string,
                    description: string,
                    date: string,
                    hour: string,
                    mealStatus: boolean,
                }
            }
            VerRefeicao: {
                RefeicaoProp: {
                    id: number,
                    name: string,
                    description: string,
                    date: string,
                    hour: string,
                    mealStatus: boolean,
                }
            }
            Estatisticas: undefined;

        }
    }
}