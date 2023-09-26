import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: "#E8E8E8",
    marginVertical: 15,
  },
});

export default Divider;
