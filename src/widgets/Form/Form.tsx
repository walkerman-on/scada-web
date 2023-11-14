import {FC, useState} from "react"
import { Input } from "shared/ui/Input";
import cl from "./Form.module.scss"
import { Button } from "shared/ui/Button";
import AppLink from "shared/ui/AppLink/AppLink";

interface IForm {
    title: string,
    handleClick: () => void
}

const Form:FC<IForm> = (title, handleClick) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className={cl.LoginPage}>
                <Input 
                    text="Логин"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    text="Пароль"
                    value = {pass}
                    onChange = {(e) => setPass(e.target.value)}
                />
                <AppLink to='/'>
                    <Button onClick={handleClick}>{title}</Button>
                </AppLink>
        </div>
    );
};

export default Form;