import {createContext} from 'react'

interface Props {
    close: boolean;
    closeModal: (close: boolean) => void;
}

export const CloseContext = createContext<Props>({
    close: false,
    closeModal:() => {}
})
