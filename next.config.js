/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['media.graphassets.com'], // Ruxsat berilgan domenlarni bu yerga qo'shing
	},

	webpack(config) {
		const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))

		if (!fileLoaderRule) {
			throw new Error('No existing rule for SVG files found.')
		}

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer || { and: [/\.(js|ts|jsx|tsx)$/] },
				resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
				use: ['@svgr/webpack'],
			},
		)
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
}

module.exports = nextConfig
