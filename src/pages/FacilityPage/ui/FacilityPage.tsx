import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { SchemeSidebar } from 'widgets/SchemeSidebar/ui/SchemeSidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"
import cl from "./FacilityPage.module.scss"
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchFacilitiesById } from "entities/Facility/api/fetchFacilitiesById";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "shared/services/firebase/firebase";
import { IParameter } from "entities/TechnologicalParameters/types/types";
import { fetchParametersByTitle } from "entities/TechnologicalParameters";
import { Button } from "shared/ui/Button";
import { fetchValves } from "entities/Valve";
import { fetchValvesById } from "entities/Valve/api/fetchValvesById";

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

  const valveList = useAppSelector(state => state.valve.list)

   useEffect(() => {
    // dispatch(fetchParametersByTitle("temperature"))
    dispatch(fetchValves())
  }, [])

  const buttonHandler = (id:string) => {
    console.log(id)
    dispatch(fetchValvesById(id))
  }
  
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
          {valveList?.map(valve => {
            return (<Button onClick={() => dispatch(fetchValvesById(valve?.id))}>Клапан {valve?.title}</Button>)
          })}
          {/* <span title="Клапан 23ESV1084" className={cl.clapan}>clapan</span> */}
        </div>
      </div>    
    </div>
  );
};

export default FacilityPage;
