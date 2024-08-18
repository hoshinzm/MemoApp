import { View, StyleSheet, Text, TextInput } from "react-native"
import Header from "../../components/Header"
import Button from "../../components/Button"


const SignUp = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value="Email address" />
                <TextInput  style={styles.input} value="Password" />
                <Button label='Submit'/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Text style={styles.footerLink}>Log in.</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f4f8'
    },

    inner:{
        paddingVertical: 24,
        paddingHorizontal: 27
    },

    title:{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },

    input:{
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dddddd',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },

    button:{
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },

    buttonLabel:{
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    
    footer:{
        flexDirection: 'row'
    },

    footerText:{
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },

    footerLink:{
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3'
    }
})

export default SignUp