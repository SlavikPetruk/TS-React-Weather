import { ReactNode, useState } from "react"
import { ChangeCssRootVariables } from "../../styles/ChangeCssRootVariables"
import { Theme, ThemeContext } from "./ThemeContext"
import { CloseContext } from "./CloseContext"
import { storage } from "../../components/storage"


interface Props {
    children: ReactNode
}
export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme,setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)
    const [close, setClose] = useState(false)

    const changeTheme = (theme: Theme) => {
        setTheme(theme)
        storage.setItem('theme', theme)
        ChangeCssRootVariables(theme)
    }

    const closeModal = (close: boolean) => {
        setClose(close)
    }

    return  <ThemeContext.Provider {...props} value={{theme, changeTheme}}>
                <CloseContext.Provider {...props} value={{close, closeModal}}>
                    {children}
                </CloseContext.Provider>    
            </ThemeContext.Provider>
        }