
import { StyleSheet } from 'react-native';
import { ResizeValue } from '../../../theme/styles';
import fonts from '../../../assets/fonts';

export const mobileStyles = colors => StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        flex: 1,
        width: '70%',
        backgroundColor: 'white',
        padding: ResizeValue(20),
    },
    filterContainerStyle: {
        backgroundColor: '#CECECE', 
        flexDirection: 'row',
        marginTop: ResizeValue(20), 
        alignItems: 'center'
    },
    filterIconStyle: {
        tintColor: colors.black, 
        height: ResizeValue(24), 
        width: ResizeValue(24),
        marginLeft: ResizeValue(16),
    },
    filterTitleStyle: {
        fontSize: ResizeValue(16),
        ...fonts.FONT_800,
        marginVertical: ResizeValue(10),
        marginLeft: ResizeValue(8),
    },
    sectionHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionSeparatorStyle: {
        backgroundColor: colors.black, 
        height: 0.5, 
        width: '100%',
    },
    sectionHeaderTextStyle: {
        flex: 1,
        fontSize: ResizeValue(16),
        marginVertical: ResizeValue(10),
        ...fonts.FONT_600,
    },
    arrowIconStyle: {
        width: ResizeValue(16),
        height: ResizeValue(16),
    },
    subItemContainerStyle: {
        alignItems: 'center',
        marginVertical: ResizeValue(8),
    },
    subItemText: {
        fontSize: ResizeValue(12),
        ...fonts.FONT_500,
        flex: 1,
    },
    applyButtonStyle: {
        marginTop: ResizeValue(15),
        backgroundColor: colors.themeBlueColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ResizeValue(8),
    },
    applyButtonText: {
        fontSize: ResizeValue(16),
        marginVertical: ResizeValue(16),
        color: colors.white
    },

    resetButtonStyle: {
        marginTop: ResizeValue(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ResizeValue(8),
        borderWidth: 1,
        borderColor: '#A9A9A9'
    },
    resetButtonText: {
        fontSize: ResizeValue(16),
        marginVertical: ResizeValue(16),
        color: '#A9A9A9'
    },
})