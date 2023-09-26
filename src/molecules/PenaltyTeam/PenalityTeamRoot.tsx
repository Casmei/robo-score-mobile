import React, { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

export const PenalityTeamRoot: React.FC<Props> = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
};
