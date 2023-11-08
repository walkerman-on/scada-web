import React from 'react';
import AppLink from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button';

const MainPage = () => {
    return (
        <div>
            <p style = {{fontWeight: "700"}}>Личный кабинет диспетчера</p>
            <AppLink to='/login'>
                <Button>Выйти</Button>
            </AppLink>
        </div>
    );
};

export default MainPage;