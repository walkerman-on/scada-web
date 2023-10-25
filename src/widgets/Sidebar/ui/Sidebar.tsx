import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from "./Sidebar.module.scss";
import { ObjectMenu } from './ObjectMenu/index';
import Card from 'shared/ui/Card/Card';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Modal } from 'shared/ui/Modal';

interface SidebarProps {
    children?: React.ReactNode,
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({children}) => {
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
        <div className = {cl.Sidebar}>
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
            <Card className = {cl.AddObjectMenu}>
                <p className={cl.AddObjectMenuItem}>
                    <span className = {cl.textCard}>Новый объект</span>
                    <Button type = "primary" shape="default" size="small" color='red' onClick={showModal}>+</Button>
                </p>
                <p className={cl.AddObjectMenuItem}>
                    <span className = {cl.textCard}>Импортировать объект</span>
                    <Button type = "primary" shape="default" size="small" color='red' onClick={showModal}>
                        +
                    </Button>
                </p>
            </Card>
            <Modal 
                title="Создание нового объекта" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <Input placeholder='Название объекта'/>
                <Input placeholder='Id объекта'/>
            </Modal>
        </div>
    );
};
