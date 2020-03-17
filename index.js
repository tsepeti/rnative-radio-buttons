import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ScalableText from 'react-native-text';
import PropTypes from 'prop-types';

class RadioButtons extends Component {
  render() {
    const {
      selected,
      options,
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
              style={[Styles.touchable, touchStyle]}
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
  activeStyle: PropTypes.object,
  disableStyle: PropTypes.object,
  activeTextStyle: PropTypes.object,
  disableTextStyle: PropTypes.object
};

RadioButtons.defaultProps = {
  selected: null,
  options: [],

  activeStyle: {
    backgroundColor: '#016bd8',
    borderColor: '#016bd8'
  },

  disableStyle: {
    backgroundColor: '#EDEDED',
    borderColor: '#EDEDED'
  },

  activeTextStyle: {
    color: '#FFF'
  },

  disableTextStyle: {
    color: '#8a8ca3'
  }
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  touchable: {
    borderWidth: 1,
    borderColor: '#97a0b1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 3,
    minWidth: 75,
    marginRight: 10
  },

  touchableText: {
    color: '#97a0b1'
  }
});

export default RadioButtons;
