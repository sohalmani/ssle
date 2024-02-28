import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const SampleLandingPage = Loadable(lazy(() => import('pages/extra-pages/SampleLandingPage')));
const SampleEditPage = Loadable(lazy(() => import('pages/extra-pages/SampleEditPage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to="/rail/call-for-service" />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'rail/',
      element: <SampleLandingPage />
    },
    {
      path: 'rail/edit',
      element: <SampleEditPage />
    },
    {
      path: 'rail/crime',
      element: <SamplePage />
    },
    {
      path: 'rail/crime/edit',
      element: <SampleEditPage />
    },
    {
      path: 'rail/arrest',
      element: <SamplePage />
    },
    {
      path: 'rail/arrest/edit',
      element: <SampleEditPage />
    },
    {
      path: 'rail/call-for-service',
      element: <SamplePage />
    },
    {
      path: 'rail/call-for-service/edit',
      element: <SampleEditPage />
    },
    {
      path: 'bus/',
      element: <SampleLandingPage />
    },
    {
      path: 'bus/edit',
      element: <SampleEditPage />
    },
    {
      path: 'bus/crime',
      element: <SamplePage />
    },
    {
      path: 'bus/crime/edit',
      element: <SampleEditPage />
    },
    {
      path: 'bus/arrest',
      element: <SamplePage />
    },
    {
      path: 'bus/arrest/edit',
      element: <SampleEditPage />
    },
    {
      path: 'bus/call-for-service',
      element: <SamplePage />
    },
    {
      path: 'bus/call-for-service/edit',
      element: <SampleEditPage />
    },
    {
      path: 'system-wide/',
      element: <SampleLandingPage />
    },
    {
      path: 'system-wide/edit',
      element: <SampleEditPage />
    },
    {
      path: 'system-wide/crime',
      element: <SamplePage />
    },
    {
      path: 'system-wide/crime/edit',
      element: <SampleEditPage />
    },
    {
      path: 'system-wide/arrest',
      element: <SamplePage />
    },
    {
      path: 'system-wide/arrest/edit',
      element: <SampleEditPage />
    },
    {
      path: 'system-wide/call-for-service',
      element: <SamplePage />
    },
    {
      path: 'system-wide/call-for-service/edit',
      element: <SampleEditPage />
    }
  ]
};

export default MainRoutes;
