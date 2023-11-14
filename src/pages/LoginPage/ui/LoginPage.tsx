import cl from "./LoginPage.module.scss"
import AppLink from "shared/ui/AppLink/AppLink";
import Form from "widgets/Form/Form";

const LoginPage = () => {
    const handleClick = () => {
        
    }

    return (
        <div className={cl.LoginPage}>
            <span style = {{fontWeight: "700"}}>Личный кабинет</span>
            <div className={cl.titleSection}>
                <AppLink to='/login'>
                    <span >Вход</span>
                </AppLink>
                <AppLink to='/register'>
                    <span >Регистрация</span>
                </AppLink>
            </div>
            <Form title={'Войти'} handleClick={handleClick}/>
        </div>
    );
};

export default LoginPage;