import React, { useEffect, useRef } from 'react';

export interface IModelProps {
    closeModel: () => void
    children: React.ReactElement
}

export function Model(props: IModelProps) {
    const { children, closeModel } = props;
    const modelRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutSite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (!modelRef.current?.contains(e.target as any)) {
                closeModel();
            }
        }
        document.addEventListener('mousedown', handleClickOutSite as any);
        return () => document.removeEventListener('mousedown', handleClickOutSite as any);
    }, [])

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-black-rgba flex items-center justify-center'>
            <div className='relative w-[90%] lg:w-[70%] xl:w-[50%] h-[60%] bg-white rounded-sm shadow-sm' ref={modelRef}>
                <span
                    className='absolute flex items-center justify-center top-2 right-2 p-1 w-7 h-7 bg-gray-400 cursor-pointer text-sm text-gray-300 hover:text-white hover:bg-gray-500 duration-200 rounded-full'
                    onClick={() => closeModel()}
                >
                    X
                </span>
                {children}
            </div>
        </div>
    );
}
