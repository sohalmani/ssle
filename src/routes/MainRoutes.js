import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - ssle landing pages
const RailLandingPage = Loadable(lazy(() => import('pages/ssle/landing/RailLandingPage')));
const BusLandingPage = Loadable(lazy(() => import('pages/ssle/landing/BusLandingPage')));
const SystemWideLandingPage = Loadable(lazy(() => import('pages/ssle/landing/SystemWideLandingPage')));

// render - ssle detail pages
const CallForServicePage = Loadable(lazy(() => import('pages/ssle/detail/CallForServicePage')));
const CrimePage = Loadable(lazy(() => import('pages/ssle/detail/CrimePage')));
const ArrestPage = Loadable(lazy(() => import('pages/ssle/detail/ArrestPage')));

// render - ssle edit page
const EditPage = Loadable(lazy(() => import('pages/ssle/EditPage')));

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
      element: <RailLandingPage />
    },
    {
      path: 'rail/edit',
      element: <EditPage />
    },
    {
      path: 'rail/crime',
      element: <CrimePage />
    },
    {
      path: 'rail/crime/edit',
      element: <EditPage />
    },
    {
      path: 'rail/arrest',
      element: <ArrestPage />
    },
    {
      path: 'rail/arrest/edit',
      element: <EditPage />
    },
    {
      path: 'rail/call-for-service',
      element: <CallForServicePage />
    },
    {
      path: 'rail/call-for-service/edit',
      element: <EditPage />
    },
    {
      path: 'bus/',
      element: <BusLandingPage />
    },
    {
      path: 'bus/edit',
      element: <EditPage />
    },
    {
      path: 'bus/crime',
      element: <CrimePage />
    },
    {
      path: 'bus/crime/edit',
      element: <EditPage />
    },
    {
      path: 'bus/arrest',
      element: <ArrestPage />
    },
    {
      path: 'bus/arrest/edit',
      element: <EditPage />
    },
    {
      path: 'bus/call-for-service',
      element: <CallForServicePage />
    },
    {
      path: 'bus/call-for-service/edit',
      element: <EditPage />
    },
    {
      path: 'system-wide/',
      element: <SystemWideLandingPage />
    },
    {
      path: 'system-wide/edit',
      element: <EditPage />
    },
    {
      path: 'system-wide/crime',
      element: <CrimePage />
    },
    {
      path: 'system-wide/crime/edit',
      element: <EditPage />
    },
    {
      path: 'system-wide/arrest',
      element: <ArrestPage />
    },
    {
      path: 'system-wide/arrest/edit',
      element: <EditPage />
    },
    {
      path: 'system-wide/call-for-service',
      element: <CallForServicePage />
    },
    {
      path: 'system-wide/call-for-service/edit',
      element: <EditPage />
    }
  ]
};

export default MainRoutes;
