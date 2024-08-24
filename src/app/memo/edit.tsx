import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { router } from "expo-router"

const handlePress = ():void => {
    router.back()
}

const Edit = (): JSX.Element => {
    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='check' size={40} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    inputContainer:{
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 27
    },

    input:{
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Edit
