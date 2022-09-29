import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import {FormEvent, useRef} from "react";
import {Button} from "../Button";

interface SearchProps {
    hasError: boolean
    onSubmit: (text: string) => void
}

type FormFields = {
    username:HTMLInputElement
}

export const Search = ({onSubmit, hasError}: SearchProps) => {

    const onFormSubmit = (event: FormEvent<HTMLFormElement & FormFields>) => {
        event.preventDefault();
        const text = event.currentTarget.username.value;

        if (text) {
            onSubmit(text)
            event.currentTarget.reset()
        }
    }

    return (
        <form onSubmit={onFormSubmit} autoComplete='off'>
            <div className={styles.search}>
                <label htmlFor="" className={styles.label}>
                    <SearchIcon/>
                </label>
                <input
                    type="text"
                    className={styles.textField}
                    id="search"
                    name="username"
                    placeholder="Search GitHub username..."
                />
                {hasError && (
                    <div className={styles.error}>
                        No result
                    </div>
                )}
                <Button>Search</Button>
            </div>
            Search Component
        </form>

    )
}

