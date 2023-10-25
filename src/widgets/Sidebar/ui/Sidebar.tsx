import React, { FC, useState } from 'react';
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

export const Sidebar:FC<SidebarProps> = () => {
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
        <aside className = {cl.Sidebar}>
            <div className = {cl.sidebarMenu}>
                <div className = {cl.inputMenu}>
                    <span className = {cl.textSCADA}>SCADA Systems</span>
                    <Input 
                        text='Поиск объекта'
                        allowClear
                    />
                </div>
                <ObjectMenu/>
            </div>
            <Card className = {cl.AddObjectMenu}>
                <p className={cl.AddObjectMenuItem}>
                    <span className = {cl.textCard}>Новый объект</span>
                    <Button type = "primary" size="small" onClick={showModal}>+</Button>
                </p>
                <p className={cl.AddObjectMenuItem}>
                    <span className = {cl.textCard}>Импортировать объект</span>
                    <Button type = "primary" size="small">+</Button>
                </p>
            </Card>
            <Modal 
                title="Создание нового объекта" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <div className={cl.modal}>
                    <Input text='Название объекта' allowClear/>
                    <Input text='Id объекта' allowClear/>
                </div>
            </Modal>
        </aside>
    );
};
