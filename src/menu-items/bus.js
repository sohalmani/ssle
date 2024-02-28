// assets
// import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
// const icons = {
//   ChromeOutlined,
//   QuestionOutlined
// };

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const bus = {
  id: 'bus',
  title: 'Bus',
  type: 'group',
  url: '/bus',
  children: [
    {
      id: 'call-for-service',
      title: 'Call for Service',
      type: 'item',
      url: '/bus/call-for-service'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'crime',
      title: 'Crime',
      type: 'item',
      url: '/bus/crime'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'arrest',
      title: 'Arrest',
      type: 'item',
      url: '/bus/arrest'
      // icon: icons.ChromeOutlined
    }
  ]
};

export default bus;
