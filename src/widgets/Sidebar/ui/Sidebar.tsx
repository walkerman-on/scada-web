import React, { FC, useEffect, useState } from 'react';
import cl from './Sidebar.module.scss';
import { FacilityMenu } from 'pages/FacilityPage/ui/FacilityMenu';
import Card from 'shared/ui/Card/Card';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Modal } from 'shared/ui/Modal';
import { getMain } from 'app/providers/router/routeConfig/routes';
import { Link } from 'react-router-dom';
import TurnLeftArrow from 'shared/assets/icons/TurnLeftArrow';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { Message } from 'shared/ui/Message';

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export const Sidebar: FC<SidebarProps> = () => {
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

  const [searchFacility, setSearchFacility] = useState<string>("")

  const {error, list} = useAppSelector(state => state.facility)

  const searchFacilitiesHandler = (e:any) => {
    setSearchFacility(e.target.value)
  }

  const filteredFacilities = list?.filter((elem) => elem.enabled).filter(item =>
    item.title.toLowerCase().includes(searchFacility.toLowerCase())
  );

  return (
    <aside className={cl.Sidebar}>
      <div className={cl.sidebarMenu}>
        <div className={cl.inputMenu}>
            <Link to={getMain()}>
          <p className={cl.scadaBlock}>
              <TurnLeftArrow/>
              <span className={cl.scadaBlockText}>Главная</span>
          </p>
            </Link>
          <Input 
            text="Поиск установки" 
            allowClear 
            value={searchFacility}
            onChange={searchFacilitiesHandler}/>
        </div>
        {error && <Message content={error}/>}
        <FacilityMenu filteredFacilities={filteredFacilities}/>
      </div>
      <Card className={cl.AddObjectMenu}>
        <p className={cl.AddObjectMenuItem}>
          <span className={cl.textCard}>Новый объект</span>
          <Button disabled type="primary" size="small" onClick={showModal}>
            +
          </Button>
        </p>
        <p className={cl.AddObjectMenuItem}>
          <span className={cl.textCard}>Импортировать объект</span>
          <Button  disabled type="primary" size="small">
            +
          </Button>
        </p>
      </Card>
      <Modal title="Создание нового объекта" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={cl.modal}>
          <Input text="Название объекта" allowClear />
          <Input text="Id объекта" allowClear />
        </div>
      </Modal>
    </aside>
  );
};