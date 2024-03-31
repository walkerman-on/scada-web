import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { SchemeSidebar } from 'widgets/SchemeSidebar/ui/SchemeSidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"
import cl from "./FacilityPage.module.scss"
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchFacilitiesById } from "entities/Facility/api/fetchFacilitiesById";
import { useParams } from "react-router-dom";


const FacilityPage = () => {
  const {theme} = useTheme()
  const dispatch = useAppDispatch()
  
  const currentFacility = useAppSelector(state => state.facility.currentFacility)
  const list = useAppSelector(state => state.facility.list)
  const schemeURL: string = theme === Theme.LIGHT ? currentFacility?.schemeLightURL : currentFacility?.schemeDarkURL;
  
  const {factoryKey, facilityId} = useParams()
  
  useEffect(() => {
    !currentFacility && dispatch(fetchFacilitiesById(facilityId))
  }, [facilityId])
  
  if (!currentFacility || factoryKey != currentFacility?.factoryId) 
    return (
      <h1>Ой! Такой установки не существует</h1>
    );
  
  return (
    <div className={cl.FacilityPage}>
      <p style={{ fontWeight: "700" }}>
        {currentFacility?.title} 
      </p>
      <div className={cl.schemePage}>
        <SchemeSidebar/>
        <div className={cl.scheme} style={{backgroundImage: `url(${schemeURL || null})`}}>
          {/* <span title="Клапан 23ESV1084" className={cl.clapan}>clapan</span> */}
        </div>
      </div>    
    </div>
  );
};

export default FacilityPage;
