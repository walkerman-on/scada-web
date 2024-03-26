import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { SchemeSidebar } from 'widgets/SchemeSidebar/ui/SchemeSidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"
import cl from "./FacilityPage.module.scss"
import { useGetFileURL } from "shared/lib/hooks/useGetFileURL/useGetFileURL";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";


const FacilityPage = () => {
  const currentFacility = useAppSelector(state => state.facility.currentFacility)

  const {theme} = useTheme()
  const schemeURL: string = theme === Theme.LIGHT ? 'schemeLight.svg' : 'schemeDark.svg';
  
  const {url, isLoading} = useGetFileURL('facilitySchemes',`${schemeURL}`)
  
  return (
    <div className={cl.FacilityPage}>
      <p style={{ fontWeight: "700" }}>
        {currentFacility?.title} 
      </p>
      <div className={cl.schemePage}>
        <SchemeSidebar/>
         {isLoading ? <div style={{margin: "0 auto"}}><PageLoader /></div>
          :
            <div className={cl.scheme} style={{backgroundImage: `url("${url || null}")`}}>
              <span title="Клапан 23ESV1084" className={cl.clapan}>clapan</span>
            </div>
        }
      </div>    
    </div>
  );
};

export default FacilityPage;
