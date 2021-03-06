import { Appbar, Button } from "react-native-paper"
import React from "react";
import { withTheme } from "react-native-paper";
function CustomNavigationBar({ theme, navigation, previous, isGame, handleNextButtonPress }) {
  const { colors } = theme
  return (
    <Appbar.Header theme={{
      colors: {
        primary: colors.primary
    }}}>
      { previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null }
      <Appbar.Content title="Guess the Prophet" />
      { isGame ?
      <Appbar.Action onPress={() => handleNextButtonPress() } style={{color: {
        primary: colors.accent
      }}} icon="arrow-left">Next</Appbar.Action>
      : null }
    </Appbar.Header>
  )
}

CustomNavigationBar.defaultProps = {
  isGame: false,
  handleNextButtonPress: () => {}
}


export default withTheme(CustomNavigationBar)