import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import { noRecordFoundStyles as styles } from "./styles";

const NoRecordFound = React.memo(
  ({
    containerStyle,
    parentText = "",
    childText = "",
  }) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.noResultText} children={parentText} />
        <Text style={styles.noProductText} children={childText} />
      </View>
    );
  }
);

NoRecordFound.propTypes = {
  parentText: PropTypes.string,
  childText: PropTypes.string,
};

NoRecordFound.defaultProps = {
  parentText: "",
  childText: "",
};

export default NoRecordFound;