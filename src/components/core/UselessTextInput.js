import { TextInput } from "react-native";
import React from 'react';

export class UselessTextInput extends React.Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
            />
        );
    }
}
