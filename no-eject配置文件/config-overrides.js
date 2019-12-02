/*完整代码*/
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		// style: true 使用less时才用
		style: 'css'
	}),
	addLessLoader({
		// 是否使用javascript语言
		javascriptEnabled: true,
		/*这里可以更改主题色*/
		modifyVars: {
			'@primary-color': '#1DA57A',
			'@success-color': 'red'
		},
	})
)
