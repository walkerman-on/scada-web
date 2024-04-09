import { FC, useEffect, useState } from 'react';
import { Input } from 'shared/ui/Input';
import cl from "./ValveParametrs.module.scss"
import { IParameterInfo, IParameters } from 'entities/TechnologicalParameters/types/types';

interface IProps {
    parameters?: IParameters[];
    valveInfo?: IParameterInfo[]
}

interface InputData {
  id: string;
  value: number;
}

export const ValveParametrs: FC<IProps> = ({ parameters, valveInfo }) => {
    const [inputValue, setInputValue] = useState<number>(null);
    const handleChange = (e:any) => {
        const {value} = e.target
        if (/^\d*$/.test(value)) {
            setInputValue(value);
        }
    }

    return (
        <div>
            {parameters?.map((parameter, index) => (
                <div key={index} className={cl.container} >
                    <span className={cl.textObject}>{valveInfo?.map(item => item.name)} {valveInfo?.map(item => item.title)}</span>
                        <div className={cl.param}>
                             <div className={cl.paramBlock}>
                                <p className={cl.paramInfoText}>
                                    <span>{parameter.valveOpening.name}</span>
                                    <span>[{parameter.valveOpening.unit}]</span>
                                </p>
                                <div className={cl.paramValue}>
                                    <span className={cl.paramUnit}>{parameter.valveOpening.title}</span>
                                    <Input 
                                        value={parameter.valveOpening.value}
                                    />
                                </div>
                            </div>
                        <div className={cl.block}>
                            <span className={cl.textSecond}>Расчетные параметры</span>
                            <div className={cl.ValveParameters}>
                                {parameter?.pressure && (
                                    <div className={cl.paramBlock}>
                                        <p className={cl.paramInfoText}>
                                            <span>{parameter.pressure.name}</span>
                                            <span>[{parameter.pressure.unit}]</span>
                                        </p>
                                        <div className={cl.paramValue}>
                                            <span className={cl.paramUnit}>{parameter.pressure.title}</span>
                                            <div className={cl.values}>
                                                <Input 
                                                id={parameter.pressure.id} 
                                                  value={parameter.pressure.value}
                                                  className={cl.asdc}
                                                  />
                                                <Input 
                                                    text={"новое значение"}
                                                    // value={inputData.pressureInput}
                                                    // onChange={(e) => handleInputPressureChange(e)}
                                                    className={cl.aaa}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {parameter?.flow && (
                                    <div className={cl.paramBlock}>
                                        <p className={cl.paramInfoText}>
                                            <span>{parameter.flow.name}</span>
                                            <span>[{parameter.flow.unit}]</span>
                                        </p>
                                        <div className={cl.paramValue}>
                                            <span className={cl.paramUnit}>{parameter.flow.title}</span>
                                                 <div className={cl.values}>
                                                 <Input 
                                                      value={parameter.flow.value}
                                                      className={cl.asdc}
                                                      />
                                                <Input
                                                    id={parameter.flow.id} 
                                                    text={"новое значение"}
                                                    // value={inputData.flowInput}
                                                    // onChange={(e) => handleInputFlowChange(e)}
                                                />
                                                  
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {parameter?.pressureDrop && (
                                    <div className={cl.paramBlock}>
                                        <p className={cl.paramInfoText}>
                                            <span>{parameter.pressureDrop.name}</span>
                                            <span>[{parameter.pressureDrop.unit}]</span>
                                        </p>
                                        <div className={cl.paramValue}>
                                            <span className={cl.paramUnit}>{parameter.pressureDrop.title}</span>
                                                 <div className={cl.values}>
                                                 <Input 
                                                      value={parameter.pressureDrop.value}
                                                      className={cl.asdc}
                                                      />
                                                <Input 
                                                    text={"новое значение"}
                                                    value={inputValue}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {parameter?.temperature && (
                                    <div className={cl.paramBlock}>
                                        <p className={cl.paramInfoText}>
                                            <span>{parameter.temperature.name}</span>
                                            <span>[{parameter.temperature.unit}]</span>
                                        </p>
                                        <div className={cl.paramValue}>
                                            <span className={cl.paramUnit}>{parameter.temperature.title}</span>
                                                 <div className={cl.values}>
                                                 <Input 
                                                      value={parameter.temperature.value}
                                                      className={cl.asdc}
                                                      />
                                                <Input 
                                                    text={"новое значение"}
                                                    value={inputValue}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        </div>

                       
                    </div>))}
        </div>);
};
