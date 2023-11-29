import { useParams } from "react-router-dom";

const ObjectPage = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <p style={{ fontWeight: "700" }}>
        Технологическая схема объекта c id {id}
      </p>
    </div>
  );
};

export default ObjectPage;
