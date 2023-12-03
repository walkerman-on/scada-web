import { LoaderApp } from "shared/ui/Loaders";
import "./PageLoader.module.scss";
import cl from "./PageLoader.module.scss";

export const PageLoader = () => {
    return (
            <div className={cl.Loader}>
                <LoaderApp/>
            </div>
    );
};
