import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({ loggedIn, path, children }) => (loggedIn ? <Route path={path}>{children}</Route> : <Redirect to="/signin" />);

export default ProtectedRoute;
