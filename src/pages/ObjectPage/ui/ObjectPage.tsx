import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";

const ObjectPage = () => {
  const currentFacility = useAppSelector(state => state.facility.currentFacility)
  return (
    <div>
      <p style={{ fontWeight: "700" }}>
        {currentFacility?.title} 
      </p>
      <p style={{ fontWeight: "500" }}>
        {currentFacility?.description} 
      </p>
      <p style={{ fontWeight: "800" }}>
        Технологическая схема
      </p>
    </div>
  );
};

export default ObjectPage;
