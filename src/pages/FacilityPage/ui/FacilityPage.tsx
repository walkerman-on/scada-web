import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { SchemeSidebar } from 'widgets/SchemeSidebar/ui/SchemeSidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"
import cl from "./FacilityPage.module.scss"


const FacilityPage = () => {
  const {theme} = useTheme()

  const currentFacility = useAppSelector(state => state.facility.currentFacility)
  const schemeURL: string = theme === Theme.LIGHT ? currentFacility.schemeLightURL : currentFacility.schemeDarkURL;
  
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
