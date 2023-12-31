import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Match from "../screens/Match";
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import Modality from "../screens/Modality";
import WinnerTeam from "../screens/WinnerTeam";

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
      initialRouteName="Auth"
    >
      <Screen
        name="Auth"
        component={Auth}
        options={{
          title: "Autenticação",
        }}
      />
      <Screen
        name="Modality"
        component={Modality}
        options={{
          title: "Modalidade",
          headerBackVisible: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Minhas Partidas",
        }}
      />
      <Screen
        name="Match"
        component={Match}
        options={{
          title: "Partida",
        }}
      />
      <Screen
        name="WinnerTeam"
        component={WinnerTeam}
        options={{
          title: "Time Ganhador",
        }}
      />
    </Navigator>
  );
};
