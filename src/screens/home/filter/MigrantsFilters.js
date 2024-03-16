import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, SectionList, Image } from 'react-native';
import { mobileStyles } from './styles';
import { useTheme } from '@react-navigation/native';
import icons from '../../../assets/icons';
import { ResizeValue } from '../../../theme/styles';
import { arrMigrantsFilters } from './migrantsFilterUtils';
import FilterSectionSubItem from './FilterSectionSubItem';
import FilterSectionHeader from './FilterSectionHeader';

const MigrantsFilters = ({ visible, onApplyFilter }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);
    const [expandedSection, setExpandedSection] = useState(null);
    const [migrantsFiltersData, setMigrantsFiltersData] = useState(arrMigrantsFilters);

    const toggleSection = (section) => {
        if (expandedSection === section) {
            setExpandedSection(null);
        } else {
            setExpandedSection(section);
        }
    };

    const handleSubItemPress = (sectionIndex, itemIndex) => {
        const newData = [...migrantsFiltersData];
        newData[sectionIndex].data[itemIndex].isSelected = !newData[sectionIndex].data[itemIndex].isSelected;
        setMigrantsFiltersData(newData);
    };

    const handleReset = () => {
        const newData = migrantsFiltersData.map(section => ({
            ...section,
            data: section.data.map(item => ({ ...item, isSelected: false }))
        }));
        setMigrantsFiltersData(newData);
    };

    const handleApplyFilter = () => {
        // Iterate over migrantsFiltersData to find selected items
        const selectedItems = [];
        migrantsFiltersData.forEach(section => {
            section.data.forEach(item => {
                if (item.isSelected) {
                    selectedItems.push(item.label);
                }
            });
        });

        // Create a comma-separated string of selected items
        const selectedItemsString = selectedItems.join(', ');

        // Call the onApplyFilter callback with the selected items string
        onApplyFilter(selectedItemsString);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.filterContainerStyle}>
                        <Image source={icons.icFilter} style={styles.filterIconStyle} />
                        <Text style={styles.filterTitleStyle}>Filter</Text>
                    </View>
                    <SectionList
                        style={{ marginTop: ResizeValue(10), }}
                        sections={migrantsFiltersData.map((section, index) => ({
                            ...section,
                            index,
                            expanded: expandedSection === section.title
                        }))}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item, section, index }) => (
                            <FilterSectionSubItem
                                item={item}
                                section={section}
                                index={index}
                                handleSubItemPress={handleSubItemPress}
                                styles={styles}
                                colors={colors}
                            />
                        )}
                        renderSectionHeader={({ section }) => (
                            <FilterSectionHeader
                                section={section}
                                expandedSection={expandedSection}
                                toggleSection={toggleSection}
                                styles={styles}
                            />
                        )}
                    />
                    <TouchableOpacity onPress={handleApplyFilter} style={styles.applyButtonStyle}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleReset} style={styles.resetButtonStyle}>
                        <Text style={styles.resetButtonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default MigrantsFilters;

