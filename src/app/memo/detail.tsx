import { View, Text, StyleSheet, ScrollView } from "react-native"
import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const Detail = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <Header/>

            <View style={styles.memoheader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年 12月1日 10:00</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えるところもありますので要注意。
                </Text>
            </ScrollView>

            <CircleButton style={{ top: 160, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    memoheader:{
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },

    memoTitle:{
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },

    memoDate:{
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16

    },

    memoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27
    },

    memoBodyText:{
        color: '#000000',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Detail