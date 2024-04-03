import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { SchemeSidebar } from 'widgets/SchemeSidebar/ui/SchemeSidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"
import cl from "./FacilityPage.module.scss"
import { useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchFacilitiesById } from "entities/Facility/api/fetchFacilitiesById";
import { useParams } from "react-router-dom";
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
  // console.log(currentValve?.map(item => item?.valve.collapsedPositionX))

   useEffect(() => {
    dispatch(fetchValves())
  }, [])

  const [collapsed, setCollapsed] = useState<boolean>(true);

  const positionX = collapsed ? valveList?.map(item => item?.collapsedPositionX) : valveList?.map(item => item?.expandedPositionX)
  const positionY = collapsed ? valveList?.map(item => item?.collapsedPositionY) : valveList?.map(item => item?.expandedPositionY)
  console.log("position - ", positionX[0], positionY[0])
  
  const buttonHandler = (id:string) => {
    dispatch(fetchValvesById(id))
    collapsed && setCollapsed(!collapsed)
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
        <SchemeSidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <div className={cl.scheme} style={{backgroundImage: `url(${schemeURL || null})`}}>
          {valveList?.map((valve, index) => {
            return (<span title={`Клапан ${valve?.title}`} className={cl.clapan} style={{position: "absolute", top:`${positionY[index]}%`, left:`${positionX[index]}%`}} key={valve?.id} onClick={() => buttonHandler(valve?.id)}></span>)
          })}
        </div>
      </div>    
    </div>
  );
};

export default FacilityPage;
