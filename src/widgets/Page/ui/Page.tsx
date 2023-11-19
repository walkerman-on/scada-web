import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

// TODO: тип
export const Page = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Sidebar/>
            <section>
                <Header/>
                <AppRouter/>
            </section>
        </div>
    );
};
