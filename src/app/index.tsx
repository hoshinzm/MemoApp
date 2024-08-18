import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
    return(
        <View style = {styles.container}>
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            <View>
                
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年 12月1日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年 12月1日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年 12月1日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>

            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center', // 縦方向
        alignItems: 'center' // 横方向
    }
})

export default Index
