import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ScalableText from 'react-native-text';
import PropTypes from 'prop-types';

// Default Colors
const TOUCH_COLOR = '#97a0b1';
const ACTIVE_COLOR = '#016bd8';
const ACTIVE_TEXT_COLOR = '#FFFFFF';
const DISABLED_COLOR = '#EDEDED';
const DISABLED_TEXT_COLOR = '#8a8ca3';

class RadioButtons extends Component {
  render() {
    const {
      selected,
      options,
      touchableStyle,
      activeStyle,
      disableStyle,
      activeTextStyle,
      disableTextStyle
    } = this.props;

    return (
      <View style={Styles.container}>
        {options.map(({ label, value, disabled }, i) => {
          const isSelected = selected === value;
          const touchStyle = disabled
            ? disableStyle
            : isSelected && activeStyle;

          const textStyle = disabled
            ? disableTextStyle
            : isSelected && activeTextStyle;

          return (
            <TouchableOpacity
              key={i}
              style={[Styles.touchable, touchableStyle, touchStyle]}
              onPress={() => this.props.onPress(value)}
              disabled={disabled}
            >
              <ScalableText style={[Styles.touchableText, textStyle]}>
                {label}
              </ScalableText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

RadioButtons.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,

  // Styles
  touchableStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  disableStyle: PropTypes.object,
  activeTextStyle: PropTypes.object,
  disableTextStyle: PropTypes.object
};

RadioButtons.defaultProps = {
  selected: null,
  options: [],

  activeStyle: {
    backgroundColor: ACTIVE_COLOR,
    borderColor: ACTIVE_COLOR
  },

  disableStyle: {
    backgroundColor: DISABLED_COLOR,
    borderColor: DISABLED_COLOR
  },

  activeTextStyle: {
    color: ACTIVE_TEXT_COLOR
  },

  disableTextStyle: {
    color: DISABLED_TEXT_COLOR
  }
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  touchable: {
    borderWidth: 1,
    borderColor: TOUCH_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 3,
    minWidth: 75,
    marginRight: 10
  },

  touchableText: {
    color: TOUCH_COLOR
  }
});

export default RadioButtons;
