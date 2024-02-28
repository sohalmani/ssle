// assets
// import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
// const icons = {
//   ChromeOutlined,
//   QuestionOutlined
// };

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const systemWide = {
  id: 'system-wide',
  title: 'System Wide',
  type: 'group',
  children: [
    {
      id: 'call-for-service',
      title: 'Call for Service',
      type: 'item',
      url: '/system-wide/call-for-service'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'crime',
      title: 'Crime',
      type: 'item',
      url: '/system-wide/crime'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'arrest',
      title: 'Arrest',
      type: 'item',
      url: '/system-wide/arrest'
      // icon: icons.ChromeOutlined
    }
  ]
};

export default systemWide;
