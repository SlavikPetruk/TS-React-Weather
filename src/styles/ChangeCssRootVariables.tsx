import { Theme } from "../hooks/usecontext/ThemeContext"

export const ChangeCssRootVariables = (theme: Theme) => {

    const root = document.querySelector(':root') as HTMLElement
    const component = [
        'components-background',
        'body-background',
        'card-background',
        'card-box-shadow',
        'text-color',
        'right-border'

    ]
    component.forEach(component => {
        root.style.setProperty(
            `--${component}-default`, `var(--${component}-${theme})`
            )
        }
    )
}
