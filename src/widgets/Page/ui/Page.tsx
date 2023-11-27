import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { IProps } from './IProps';
import cl from "./Page.module.scss"

export const Page = ({}: IProps) => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app scada-container", {}, [theme])}>
            <Sidebar/>
            <section>
                <Header/>
                <AppRouter/>
            </section>
        </div>
    );
};
