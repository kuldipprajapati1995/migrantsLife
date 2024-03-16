import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import icons from '../../../assets/icons';

const FilterSectionHeader = ({ section, expandedSection, toggleSection, styles }) => {
    const isExpanded = expandedSection === section.title;
    return (
        isExpanded ?
        <TouchableOpacity onPress={() => toggleSection(section.title)}>
            <View style={styles.sectionHeaderStyle}>
                <Text style={styles.sectionHeaderTextStyle}>{section.title}</Text>
                <Image
                    source={isExpanded ? icons.ic_down : icons.ic_details}
                    style={styles.arrowIconStyle}
                />
            </View>
            {isExpanded && <View style={styles.sectionSeparatorStyle} /> }
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => toggleSection(section.title)}>
            <View style={styles.sectionSeparatorStyle} />
            <View style={styles.sectionHeaderStyle}>
                <Text style={styles.sectionHeaderTextStyle}>{section.title}</Text>
                <Image
                source={isExpanded ? icons.ic_down : icons.ic_details}
                style={styles.arrowIconStyle}
                />
            </View>
           <View style={styles.sectionSeparatorStyle} />
        </TouchableOpacity>
    );
};

export default FilterSectionHeader;
