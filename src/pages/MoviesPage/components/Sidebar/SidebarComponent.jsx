import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {


    return (
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem onClick={() => {
                console.log("Documentation");
            }}> Documentation</MenuItem>
            <MenuItem onClick={() => {
                console.log("Calendar");
            }}> Calendar</MenuItem>
            <MenuItem onClick={() => {
                console.log("E-commerce");
            }}> E-commerce</MenuItem>
          </Menu>
        </Sidebar>
    );
};

export default SidebarComponent;
