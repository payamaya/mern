import { FiChevronRight } from 'react-icons/fi'
export const subMenuItems = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'FAQ',
    link: '/faq',
  },

  {
    title: 'portfolio',
    icon: <FiChevronRight />,
    submenus: [
      {
        title: 'FrontEnd',
        icon: <FiChevronRight />,
      },
      {
        title: 'Backend',
        link: '/Backend',
      },
      {
        title: 'Nodejs',
        link: '/node',
      },
      {
        title: 'PHP',
        link: 'php',
      },
    ],
  },
]
