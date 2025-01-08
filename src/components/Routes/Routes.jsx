import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Intro from '../Intro';
import About from '../About';
import Work from '../Work';

const Routes = () => {
  const location = useLocation();
  return (
    <SlideRoutes duration={500} location={location} animation="vertical-slide">
      <Route path={['/', '/intro']} exact component={Intro} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </SlideRoutes>
  );
};

export default Routes;
