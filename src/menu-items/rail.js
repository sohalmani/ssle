// assets
// import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
// const icons = {
//   ChromeOutlined,
//   QuestionOutlined
// };

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const rail = {
  id: 'rail',
  title: 'Rail',
  type: 'group',
  children: [
    {
      id: 'crime',
      title: 'Crime',
      type: 'item',
      url: '/rail/crime'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'arrest',
      title: 'Arrest',
      type: 'item',
      url: '/rail/arrest'
      // icon: icons.ChromeOutlined
    },
    {
      id: 'call-for-service',
      title: 'Call for Service',
      type: 'item',
      url: '/rail/call-for-service'
      // icon: icons.ChromeOutlined
    }
  ]
};

export default rail;
