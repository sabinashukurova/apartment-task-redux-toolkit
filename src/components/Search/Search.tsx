import React from 'react'
import Button from '../Button'
import Input from '../Input';
import style from './Search.module.scss'
import Union from '../../assets/Union.svg'

interface ISearchButton {
    onClick: () => void;
    onEnter?: () => void;
    isLoading: boolean;
    disabled: boolean;
}

interface ISearch extends ISearchButton {
    onChange: (s: string) => void
    value: string
    hideButton: boolean;
}

const SearchButton = (props: ISearchButton) => {
    return (
        <Button {...props}>Search</Button>
    )
}

function Search(props: ISearch) {

    const { onClick, onChange, onEnter, disabled, isLoading, value, hideButton } = props;

    return (
        <div className={style.container}>
            <Input
                isLoading={isLoading}
                onChange={e => onChange && onChange(e.target.value)}
                icon={<Union />}
                value={value ?? ""}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEnter && onEnter();
                    }
                }} />
            <div>
                {hideButton ? undefined :
                    <SearchButton isLoading={isLoading} onClick={onClick} disabled={disabled} />}
            </div>
        </div>
    )
}

export default Search