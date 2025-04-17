
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ResponsiveAppBar from '../../components/appbar/appbar.component';


const Navigation = () => {
    return (
      <Fragment>
        <ResponsiveAppBar />
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;