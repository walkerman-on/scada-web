import { useParams } from "react-router-dom";
import cl from './ObjectPage.module.scss'

const ObjectPage = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <p style={{ fontWeight: "700" }}>
        Технологическая схема объекта c id {id}
      </p>
      <img src = {'/src/pages/ObjectPage/ui/schema.png'}/>
    </div>
  );
};

export default ObjectPage;
