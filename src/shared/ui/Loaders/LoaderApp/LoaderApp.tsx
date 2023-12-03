import cl from "./LoaderApp.module.scss"

export const LoaderApp = () => {
    return (
        <div className={cl.loader}>
             <div></div>
             <div></div>
        </div>
    );
};
