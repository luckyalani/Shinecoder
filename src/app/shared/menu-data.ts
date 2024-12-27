export  const mainMenuData = [
    {
      label: 'Home',
      // link: '',
      svgName: 'home',
      viewBox: '0 0 576 512',
    },
    {
      label: 'Customer',
      link: '/customer',
      svgName: 'customer',
      viewBox: '0 0 32 32',
    },
    {
      label: 'Projects',
      link: '/projects',
      svgName: 'project',
      viewBox: '0 0 24 24',
      subMenu: [
        {
          label : 'Projects',
           link : '/customer/new-project'
        },
        {
          label : 'Projects Roadmap',
          //  link : ''
        },
        {
          label : 'Project Spot',
          //  link : ''
        },
      ],
    },
    {
      label: 'Tasks',
      // link: '',
      svgName: 'task',
      viewBox: '0 0 36 36',
      subMenu: [
        {
          label : 'Tasks',
          //  link : ''
        },
        {
          label : 'Status Manager',
          //  link : ''
        },
        {
          label : 'Timesheet Manager',
          //  link : ''
        },
        {
          label : 'Task Bookmark',
          //  link : ''
        },
      ],
    },
    {
      label: 'Leads',
      // link: '',
      svgName: 'leads',
      viewBox: '0 0 24 24',
      subMenu: [
        {
          label : 'Lead',
          //  link : ''
        },
        {
          label : 'Lead filter',
          //  link : ''
        },
        {
          label : 'Follow Up',
          //  link : ''
        },
        {
          label : 'Leads Manager',
          //  link : ''
        },
      ],
    },
    {
      label: 'Sales',
      link: '/sales',
      svgName: 'sales',
      viewBox: '0 0 32 32',
      subMenu: [
        {
          label : 'Proposal',
          link : '/sales'
        },
        {
          label : 'Estimates',
          link : '/sales/estimates'
        },
        {
          label : 'Invoices',
          link : '/sales/invoices'
        },
        {
          label : 'Payment',
          link : '/sales/payment'
        },
        {
          label : 'credit Notes',
          link : '/sales/credit-notes'
        },
        {
          label : 'Items',
          link : '/sales/items'
        }
      ],
    },
    {
      label: 'Expenses',
      // link: '',
      svgName: 'expences',
      viewBox: '0 0 512 512',
    },
    {
      label: 'Contracts',
      link: '/Contracts',
      svgName: 'contracts',
      viewBox: '0 0 36 36',
    },
    {
      label: 'Estimates',
      link: '/estimate/estimate-page',
      svgName: 'esimates',
      viewBox: '0 0 24 24',
    },
    {
      label: 'Blog',
      link: '/blog/blog-page',
      svgName: 'blog',
      viewBox: '0 0 24 24',
    },
    {
      label: 'SaaS Control',
      link: '/saas-control',
      svgName: 'saas control',
      viewBox: '0 0 24 24',
    },
    {
      label: 'Market Place',
      link: '/market-place',
      svgName: 'market place',
      viewBox: '0 0 24 24',
    },
    {
      label: 'Services',
      // link: '',
      svgName: 'services',
      viewBox: '0 0 24 24',
    },
    {
      label: 'Reports',
      // link: '',
      svgName: 'reports',
      viewBox: '0 0 24 24',
    },
    {
      label: 'Settings',
      link: 'setting/setting-page',
      svgName: 'settings',
      viewBox: '0 0 1024 1024',
    },
  ];


  export const settingMenu = [
    {
      label : 'Organization',
      // link : '',
      svgName: 'home',
      viewBox: '0 0 576 512',
      subMenu: [
        {
          label:'Profile',
          // link: '',
        },
        {
          label:'Brand',
          // link: '',
        },
        {
          label:'Branches',
          // link: '',
        },
        {
          label:'Currencies',
          // link: '',
        },
        {
          label:'Manage Subscription',
          // link: '',
        },
  
      ]
    },
    {
      label : 'General Setting',
      // link : '',
      svgName: 'settings',
      viewBox: '0 0 1024 1024',
      subMenu: [
        {
          label:'Company Information',
          // link: '',
        },
        {
          label:'Email',
          // link: '',
        },
        {
          label:'Finance',
          // link: '',
        },
        {
          label:'Subscriptions',
          // link: '',
        },
        {
          label:'Payment Gateway',
          // link: '',
        },
        {
          label:'Customers',
          // link: '',
        },
        {
          label:'Tasks',
          // link: '',
        },
        {
          label:'Support',
          // link: '',
        },
        {
          label:'Leads',
          // link: '',
        },
        {
          label:'SMS',
          // link: '',
        },
        {
          label:'Calendar',
          // link: '',
        },
        {
          label:'Pdf',
          // link: '',
        },
        {
          label:'E-sign',
          // link: '',
        },
        {
          label:'Tags',
          // link: '',
        },
        {
          label:'Pushar.com',
          // link: '',
        },
        {
          label:'Google',
          // link: '',
        },
        {
          label:'MISC',
          // link: '',
        },
      ]
    },
    {
      label : 'Customers',
      // link : '',
      svgName: 'customers',
      viewBox: '0 0 640 512',
      subMenu: [
        {
          label:'Groups',
          // link: '',
        },
      ]
    },
    {
      label : 'Leads',
      // link : '',
      svgName: 'leads',
      viewBox: '0 0 24 24',
      subMenu: [
        {
          label:'Sources',
          // link: '',
        },
        {
          label:'Statuses',
          // link: '',
        },
        {
          label:'Email Integration',
          // link: '',
        },
        {
          label:'Web to Lead',
          // link: '',
        },
      ]
    },
    {
      label : 'Tax & Complience',
      // link : '',
      svgName: 'tax & complience',
      viewBox: '0 0 2048 2048',
      subMenu: [
        {
          label:'Taxes',
          // link: '',
        },
      ]
    },
    {
      label : 'Finance',
      // link : '',
      svgName: 'finance',
      viewBox: '0 0 50 50',
      subMenu: [
        {
          label:'Email Integration',
          // link: '',
        },
        {
          label:'Web to Lead',
          // link: '',
        },
      ]
    },
    {
      label : 'Contracts',
      // link : '',
      svgName: 'contracts',
      viewBox: '0 0 36 36',
      subMenu: [
        {
          label:'Contract Types',
          // link: '',
        },
      ]
    },
    {
      label : 'Estimation',
      // link : '',
      svgName: 'estimation',
      viewBox: '0 0 15 15',
      subMenu: [
        {
          label:'Email Integration',
          // link: '',
        },
        {
          label:'Web to Lead',
          // link: '',
        },
      ]
    },
    {
      label : 'Supports',
      // link : '',
      svgName: 'tool',
      viewBox: '0 0 1024 1024',
      subMenu: [
        {
          label:'Departments',
          // link: '',
        },
        {
          label:'Predefine Replies',
          // link: '',
        },
        {
          label:'Ticket Priority',
          // link: '',
        },
        {
          label:'Ticket Status',
          // link: '',
        },
        {
          label:'Services',
          // link: '',
        },
        {
          label:'Spam FIlters',
          // link: '',
        },
      ]
    },
    {
      label : 'Utilities',
      // link : '',
      svgName: 'utilities',
      viewBox: '0 0 24 24',
      subMenu: [
        {
          label:'Restore Database',
          // link: '',
        },
        {
          label:'Backup Database',
          // link: '',
        },
        {
          label:'Media',
          // link: '',
        },
        {
          label:'Bulk Pdf Export',
          // link: '',
        },
        {
          label:'Calendar',
          // link: '',
        },
        {
          label:'Announcement',
          // link: '',
        },
        {
          label:'Activity Log',
          // link: '',
        },
        {
          label:'Ticket Pipe Log',
          // link: '',
        },
      ]
    },
    {
      label : 'Users & Roles',
      // link : '',
      svgName: 'role',
      viewBox: '0 0 32 32',
      subMenu: [
        {
          label:'Users',
          // link: '',
        },
        {
          label:'Roles',
          // link: '',
        },
        {
          label:'User Preferences',
          // link: '',
        },
      ]
    },
    {
      label : 'Email',
      // link : '',
      svgName: 'email',
      viewBox: '0 0 32 32',
      subMenu: [
        {
          label:'User Preferences',
          // link: '',
        },
      ]
    },
    {
      label : 'Custom',
      // link : '',
      svgName: 'services',
      viewBox: '0 0 24 24',
      subMenu: [
        {
          label:'User Preferences',
          // link: '',
        },
      ]
    },
    {
      label : 'Help',
      // link : '',
      svgName: 'help',
      viewBox: '0 0 24 24',
      subMenu: [
        {
          label:'User Preferences',
          // link: '',
        },
      ]
    },
  
  ]


  export const adminMenu = [
      {
        label : 'Dashboard',
        link : '/saas-control',
        svgName: 'home',
        viewBox: '0 0 576 512',
      },
      {
        label : 'Go To Landing Page',
        // link : '',
        svgName: 'go to landing page',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Packages',
        // link : '',
        svgName: 'packages',
        viewBox: '0 0 24 24',
        subMenu: [
          {
            label : 'xyz',
            // link : ''
          },
        ],
      },
      {
        label : 'Assign Package',
        // link : '',
        svgName: 'assign package',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Domain Manager',
        // link : '',
        svgName: 'domain manager',
        viewBox: '0 0 256 256',
        subMenu: [
          {
            label : 'xyz',
            // link : ''
          },
        ],
      },
      {
        label : 'Coupons',
        // link : '',
        svgName: 'coupon',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Payments',
        // link : '',
        svgName: 'payment',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Promotion',
        // link : '',
        svgName: 'promotion',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Front CMS',
        // link : '',
        svgName: 'front cms',
        viewBox: '0 0 256 256',
      },
      {
        label : 'Subscriber',
        // link : '',
        svgName: 'subscriber',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Affiliates',
        // link : '',
        svgName: 'affiliate',
        viewBox: '0 0 640 512',
      },
      {
        label : 'Super Admin Profile',
        // link : '',
        svgName: 'admin profile',
        viewBox: '0 0 24 24',
      },
      {
        label : 'setting',
        // link : '',
        svgName: 'setting',
        viewBox: '0 0 1024 1024',
      },
      {
        label : 'Logout',
        // link : '',
        svgName: 'logout',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Restore Database',
        // link : '',
        svgName: 'restore database',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Backup Database',
        // link : '',
        svgName: 'backup database',
        viewBox: '0 0 24 24',
      },
      {
        label : 'Clear Cache',
        // link : '',
        svgName: 'clear cache',
        viewBox: '0 0 1024 1024',
      },
  ]