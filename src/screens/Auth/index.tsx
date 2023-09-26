import React, { useState, useRef } from "react";
import { Alert, TextInput, View } from "react-native";
import { styles } from "./styles";

import Button from "../../atoms/Button";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigate = useNavigation();

  const [inputValue, setInputValue] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const validCode = process.env.EXPO_PUBLIC_API_KEY || "4242";

  const validateCode = () => {
    const enteredCode = Object.values(inputValue).join("");
    if (enteredCode === validCode) {
      navigate.navigate("Modality");
    } else {
      Alert.alert("Código inválido", "Tente novamente!", [
        {
          text: "OK",
          onPress: () => {
            clearInputs();
          },
        },
      ]);
    }
  };

  const clearInputs = () => {
    setInputValue({
      1: "",
      2: "",
      3: "",
      4: "",
    });
    firstInput?.current?.clear();
    secondInput?.current?.clear();
    thirdInput?.current?.clear();
    fourthInput?.current?.clear();
    focusNextInput(firstInput);
  };

  const firstInput = useRef<TextInput>(null);
  const secondInput = useRef<TextInput>(null);
  const thirdInput = useRef<TextInput>(null);
  const fourthInput = useRef<TextInput>(null);

  const focusNextInput = (nextInput: React.RefObject<TextInput> | null) => {
    nextInput?.current?.focus();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <TextInput
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          ref={firstInput}
          onChangeText={(text) => {
            setInputValue({ ...inputValue, 1: text });
            text ? focusNextInput(secondInput) : focusNextInput(firstInput);
          }}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          ref={secondInput}
          onChangeText={(text) => {
            setInputValue({ ...inputValue, 2: text });

            text ? focusNextInput(thirdInput) : focusNextInput(firstInput);
          }}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          ref={thirdInput}
          onChangeText={(text) => {
            setInputValue({ ...inputValue, 3: text });
            text ? focusNextInput(fourthInput) : focusNextInput(secondInput);
          }}
        />
        <TextInput
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          ref={fourthInput}
          onChangeText={(text) => {
            setInputValue({ ...inputValue, 4: text });
            if (!text) {
              focusNextInput(thirdInput);
            }
          }}
        />
      </View>

      <Button
        style={{ marginTop: 70 }}
        onPress={validateCode}
        title="Acessar partidas"
      />
    </View>
  );
};

export default Auth;
