import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from "./Sidebar.module.scss";
import { ObjectMenu } from '../ObjectMenu';
import Card from 'shared/ui/Card/Card';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Modal } from 'shared/ui/Modal';

interface SidebarProps {
    children?: React.ReactNode,
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({children}) => {
    const onSearch = () => {
        console.log("search")
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
        <div className = {classNames(cl.Sidebar, {}, [])}>
            <div className = {cl.sidebarMenu}>
                <div className = {cl.inputMenu}>
                    <span className = {cl.textSCADA}>SCADA Systems</span>
                    <Input 
                        placeholder='Поиск объекта'
                        allowClear
                    />
                </div>
                <ObjectMenu/>
            </div>
            <Card className = {classNames(cl.AddObjectMenu, {}, [])}>
                <span className = {cl.textCard}>Новый объект</span>
                <Button type = "primary" shape="default" size="small" color='red' onClick={showModal}>+</Button>
            </Card>
            <Modal 
                title="Basic" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};
