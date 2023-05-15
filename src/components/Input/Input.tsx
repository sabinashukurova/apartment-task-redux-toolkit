import classNames from "classnames";
import { ReactElement, useCallback, useState, FocusEvent, InputHTMLAttributes } from "react";
import style from "./Input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  icon: ReactElement
  isLoading: boolean
  right?: ReactElement;
}

export default function Input({icon, right, isLoading , disabled, ...value}: IInput) {

  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      setFocus(true);
      if(value.onFocus) value.onFocus(e)
    }, 
    [value]
  )

  const onBlur = useCallback(
    (event: FocusEvent<HTMLInputElement, Element>) => {
      setFocus(false);
      if (value.onBlur) value.onBlur(event);
    },
    [value]
  );

  return (
    <div className={classNames(style.container, {[style.input_focused]:focus, [style.icon_disabled]: disabled || isLoading,})}>
      {icon && (
        <div className={classNames(style.icon, {[style.icon_disabled]:disabled || isLoading})}> {icon} </div>
      )}
      <input
       disabled={isLoading}
       className={style.input}
       placeholder="Search..."
       {...value}
       onBlur={onBlur}
       onFocus={onFocus}
      />
    </div>
  );
}