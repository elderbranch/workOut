import React from 'react'
import ProtectedRoute from './ProtectedRoute';

const ProtectedRouteWrapper = ({ element }) => (
  <ProtectedRoute>
    {element}
  </ProtectedRoute>
);


export default ProtectedRouteWrapper;