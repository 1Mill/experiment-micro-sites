const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	devServer: { allowedHosts: 'all' },
	publicPath: '/blue',
	transpileDependencies: true,
})