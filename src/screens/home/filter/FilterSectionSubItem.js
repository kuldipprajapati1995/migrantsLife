import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import icons from '../../../assets/icons';
import { ResizeValue } from '../../../theme/styles';

const FilterSectionSubItem = ({ item, section, index, handleSubItemPress, styles, colors }) => {
    // Find the index of the current section
    const sectionIndex = section.index;

    // Find the index of the label within the section's data array
    const labelIndex = index;

    const isExpanded = section.expanded;

    return (
        isExpanded && (
            <TouchableOpacity onPress={() => handleSubItemPress(sectionIndex, labelIndex)}>
                <View style={styles.subItemContainerStyle}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.subItemText}>{item.label}</Text>
                        <Image
                            source={item.isSelected ? icons.icCheckbox : icons.icUnchecked}
                            style={[styles.arrowIconStyle, { tintColor: colors.black }]}
                        />
                    </View>
                    {index !== section.data.length - 1 && <View style={[styles.sectionSeparatorStyle, { marginTop: ResizeValue(8) }]} />}
                </View>
            </TouchableOpacity>
        )
    );
};

export default FilterSectionSubItem;
