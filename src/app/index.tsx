// 最初に表示される画面
import { Redirect } from "expo-router"
 
const Index = (): JSX.Element => {
    return <Redirect href='auth/sign_up' />
}

export default Index
