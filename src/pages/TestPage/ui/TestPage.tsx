import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";

const TestPage = () => {
    const currentFacility = useAppSelector(state => state.facility.currentFacility)
    
    return (
        <main style={{marginTop: "15px"}}>
            <p style={{ fontWeight: "700" }}>
                {currentFacility?.title} 
            </p>
            <p style = {{fontWeight: "700"}}>Описание ТП</p>
            <p style={{ fontWeight: "600" }}>
                {currentFacility?.description} 
            </p>
        </main>
    );
};

export default TestPage;