import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import styles from './Checkbox.module.css'
import {Check} from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{
    validateChecked: () => void
}

export default function Checkbox({validateChecked}: CheckboxProps){
    const [validate, setValidate] = useState(false)

    function HandleChecked(){
        setValidate((state)=>{
            state = !validate
            return state
        })

        validateChecked()

    }
    return(
        <CheckboxPrimitive.Root className={validate ? styles.checkboxRootTrue : styles.checkboxRootFalse} onCheckedChange={HandleChecked}>
            <CheckboxPrimitive.Indicator className={styles.checkboxIndicator} asChild>
                <Check className={styles.check} size={14} weight='bold'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

/**/