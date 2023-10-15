import {  useParams } from "react-router-dom";

const ObjectPage = () => {
    const { id } = useParams();
    console.log("Енто ID", id)
    return (
        <div>
            <p style = {{fontWeight: "700"}}>Технологическая схема объекта</p>
        </div>
    );
};

export default ObjectPage;