import { IParameters } from 'entities/TechnologicalParameters/types/types';
import { FC, useState } from 'react';
import cl from "./FacilityParameters.module.scss"
import React from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

interface IProps {
    parameters: IParameters[];
    collapsed?: boolean
}


export const FacilityParameters:FC <IProps> = ({parameters, collapsed}) => {

  const positionX = collapsed ? parameters?.map(item => item?.collapsedPositionX) : parameters?.map(item => item?.expandedPositionX)
  const positionY = collapsed ? parameters?.map(item => item?.collapsedPositionY) : parameters?.map(item => item?.expandedPositionY)
    return (
     <div className={cl.FacilityParameters} >
            {parameters?.map((item, index) => (
                <div 
                    key={index}
                    style={{position: "absolute", top:`${positionY[index]}%`, left:`${positionX[index]}%`}} 
                    className={cl.parameters}
                >
                    {item?.pressure && (
                        <div className={cl.parameterInfo}>
                            <span>{item.pressure.title} = </span>
                            <span className={cl.parameterText}>{item.pressure.value} </span>
                            <span>{item.pressure.unit}</span>
                        </div>
                    )}
                    {item?.flow && (
                        <div className={cl.parameterInfo}>
                            <span>{item.flow.title} = </span>
                            <span className={cl.parameterText}>{item.flow.value} </span>
                            <span>{item.flow.unit}</span>
                        </div>
                    )}
                    {item?.temperature && (
                        <div className={cl.parameterInfo}>
                            <span>{item.temperature.title} = </span>
                            <span className={cl.parameterText}>{item.temperature.value} </span>
                            <span>{item.temperature.unit}</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
