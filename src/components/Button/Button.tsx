import { LoadingOutlined } from '@ant-design/icons';
import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.scss'

interface IButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({disabled, children, isLoading, ...value }: IButtonTypes) {
  return (
    <>
      <button type='button' className={style.button} {...value} disabled={disabled || isLoading}>{isLoading ? <LoadingOutlined  className={style.isLoading} /> : children}</button>
    </>
  )
}