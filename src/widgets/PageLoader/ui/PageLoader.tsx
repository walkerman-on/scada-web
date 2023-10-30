import { Loader } from "shared/ui/Loader";
import "./PageLoader.module.scss"
import cl from "./PageLoader.module.scss"

export const PageLoader = () => {
    return (
            <div className={cl.Loader}>
                <Loader/>
            </div>
    );
};
