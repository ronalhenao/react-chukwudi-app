import React from 'react';
import { Order } from './Order';
import { Profile } from './Profile';

export const Sidebar = () => {
    return (
        <aside className="ui-sidebar ui-main-content col-md-4">
            <Profile />
            <Order />
        </aside>
    )
}
