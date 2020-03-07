export default [
	{
		title: 'Dashboard',
		path: '/admin/dashboard',
		src:
			"data:image/svg+xml,%3Csvg height='511pt' viewBox='0 1 511 511.999' width='511pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0'/%3E%3C/svg%3E",
	},
	{
		title: 'Categories',
		path: '/admin/category',
		icon: 'folder-open-outline',
	},
	{
		title: 'Pages',
		path: '/admin/pages',
		icon: 'documents-outline',
		sub: [
			{
				title: 'Webpages',
				path: '/admin/pages/webpages',
				parent: '',
			},
			{
				title: 'Vendors pages',
				path: '/admin/pages/vendorspages',
				icon: '',
			},
		],
	},
	{
		title: 'Products',
		path: '/admin/products',
		icon: 'fast-food-outline',
	},
	{
		title: 'Users',
		path: '/admin/users',
		icon: 'people-outline',
	},
	{
		title: 'Plugins',
		path: '/admin/plugins',
		src:
			"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M448.801,271H497c8.284,0,15-6.716,15-15V111.4c0-8.284-6.716-15-15-15H367.4V63.2c0-34.849-28.352-63.2-63.2-63.2 S241,28.352,241,63.2v33.2H111.4c-8.284,0-15,6.716-15,15V241H63.2C28.352,241,0,269.352,0,304.2s28.352,63.2,63.2,63.2h33.2V497 c0,8.284,6.716,15,15,15H256c8.284,0,15-6.716,15-15v-48.2c0-18.307,14.894-33.2,33.2-33.2c18.306,0,33.2,14.894,33.2,33.2V497 c0,8.284,6.716,15,15,15H497c8.284,0,15-6.716,15-15V352.4c0-8.284-6.716-15-15-15h-48.199c-18.308,0-33.201-14.894-33.201-33.2 C415.6,285.894,430.493,271,448.801,271z M448.801,367.4H482V482H367.4v-33.2c0-34.849-28.352-63.2-63.2-63.2 S241,413.951,241,448.8V482H126.4V352.4c0-8.284-6.716-15-15-15H63.2c-18.307,0-33.2-14.894-33.2-33.2 c0-18.306,14.894-33.2,33.2-33.2h48.2c8.284,0,15-6.716,15-15V126.4H256c8.284,0,15-6.716,15-15V63.2 c0-18.307,14.894-33.2,33.2-33.2c18.306,0,33.2,14.894,33.2,33.2v48.2c0,8.284,6.716,15,15,15H482V241h-33.199 c-34.85,0-63.201,28.352-63.201,63.2S413.951,367.4,448.801,367.4z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
	},
	{
		title: 'Apps',
		path: '/admin/apps',
		icon: 'apps-outline',
		sub: [
			{
				title: 'Chat',
				path: '/admin/apps/chat',
				parent: '',
			},
			{
				title: 'comments',
				path: '/admin/comments',
				icon: '',
			},
			{
				title: 'notifications',
				path: '/admin/apps',
				icon: '',
			},
		],
	},
	{
		title: 'Settings',
		path: '/admin/settings',
		icon: 'cog',
		sub: [
			{
				title: 'Website',
				path: '/admin/settings/website',
				icon: '',
			},
			{
				title: 'Payments',
				path: '/admin/settings/payments',
				icon: '',
			},
			{
				title: 'Intergrations',
				path: '/admin/settings/intergrations',
				icon: '',
			},
			{
				title: 'SEO',
				path: '/admin/settings/seo',
				icon: '',
			},
		],
	},
];
