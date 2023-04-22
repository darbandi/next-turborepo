const { i18n } = require('./next-i18next.config.js')

module.exports = {
	reactStrictMode: true,
	transpilePackages: ['ui'],
	i18n,
	env: {
		API_URL: 'http://localhost:3000',
		NEXTAUTH_SECRET: 'project-secret',
		NEXTAUTH_URL: 'http://localhost:3000',
		MONGODB_URI: 'mongodb://127.0.0.1:27017/next',
		GOOGLE_CLIENT_ID:
			'964432943124-uc4l5k80br95hck7m870gn1hmtef0tv4.apps.googleusercontent.com',
		GOOGLE_CLIENT_SECRET: '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'
	}
};
