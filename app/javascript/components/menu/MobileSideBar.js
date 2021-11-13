import React from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, BrowserRouter } from 'react-router-dom';

const MobileSideBar = () => (
  <div
    style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
  >
    <CDBSidebar textColor="#99c210" backgroundColor="#fff">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
        <a
          href="/"
          className="text-decoration-none"
          style={{ color: 'inherit' }}
        >
          Book A Doctor
        </a>
      </CDBSidebarHeader>
        <BrowserRouter>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="bar-font">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Doctors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Doctors Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                Book an Appointment
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </BrowserRouter>

      <CDBSidebarFooter icon="fa fa-facebook" style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
);

export default MobileSideBar;