import { View, StyleSheet } from "react-native"
import Header from "../../components/Header"
import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"


const list = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
           <CircleButton>
            <Icon  name='plus' size={40} color='#ffffff'/>
           </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 要素を画面全体に広げる設定
        backgroundColor: '#ffffff'
    }
})

export default list
