import React from "react"
import { Text, View } from "react-native"
import { style } from "./styles"

type Props = {
  day: number;
  hour: string;
}

const MatchItemDate: React.FC<Props> = ({day, hour}) => {

    const addZeroOnDay = (day: number): string => {
      if (day <= 9) {
        return `0${day}`;
      }
      return day.toString();
    };

  return (
    <View style={style.dateContainer}>
      <Text style={style.dateText}>
        {addZeroOnDay(day)}
      </Text>
      <Text style={style.dateText}> - </Text>
      <Text style={style.dateText}>
        {hour}
      </Text>
    </View>
  )
}

export default MatchItemDate;