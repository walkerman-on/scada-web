import { FC } from 'react';
import { Input } from 'shared/ui/Input';
import cl from "./ValveParametrs.module.scss"
import { IParameter } from 'entities/TechnologicalParameters/types/types';

interface IProps {
    parameters?: {
        pressure?: IParameter;
        flow?: IParameter;
        pressureDrop?: IParameter;
        temperature?: IParameter;
        valveOpening: IParameter;
    }[];
}

export const ValveParametrs: FC<IProps> = ({ parameters }) => {
    return (
        <div>
            {parameters?.map((parameter, index) => (
                <div key={index} className={cl.param}>
                        <div className={cl.paramBlock}>
                            <p className={cl.paramInfoText}>
                                <span>{parameter.valveOpening.name}</span>
                                <span>[{parameter.valveOpening.unit}]</span>
                            </p>
                            <div className={cl.paramValue}>
                                <span className={cl.paramUnit}>{parameter.valveOpening.title}</span>
                                <Input defaultValue={parameter.valveOpening.value}/>
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
                                            <Input defaultValue={parameter.pressure.value}/>
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
                                            <Input defaultValue={parameter.flow.value}/>
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
                                            <Input defaultValue={parameter.pressureDrop.value}/>
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
                                            <Input defaultValue={parameter.temperature.value}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>))}
        </div>);
};
