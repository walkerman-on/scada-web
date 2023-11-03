import cl from "./Loader.module.scss"

export const Loader = () => {
    return (
        <div className={cl.loader}>
             <div></div>
             <div></div>
        </div>
    );
};
