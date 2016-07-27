module.exports = {
	entry: './src',
	output: {
		path: 'builds',
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.css$/, loader: "style-loader!css-loader"
			},
			{
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '/src',
			},
			{
				test: /\.html/,
				loader: 'html',
			}
		],
	}
};