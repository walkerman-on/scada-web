import { FC } from 'react';
import cl from './Skeleton.module.scss'

interface SkeletonProps {
    count: number;
}

export const Skeleton:FC<SkeletonProps> = ({count}) => {
    const skelentons = Array.from({length: count}, (_, index) => {
    return (
         <div className={cl.template} key = {index}>
            <div className={cl.Skeleton}></div>
        </div>
    );
  });


  return <>{skelentons}</>;
};