import cl from "./NotFoundPage.module.scss"

export const NotFoundPage = () => {
    return (
        <div className={cl.NotFoundPage}> 
            <p style = {{fontWeight: "700", fontSize: "20px"}}>Ой! Страница не найдена...(</p>
        </div>
    );
};
