const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  languages: [
    { name: 'English', key: 'en'},
    { name: 'Arabic', key: 'ar'},
  ],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  env: {
    base_url: '/',
    api_url: 'http://194.163.134.197:3004/api_v1',
    // api_url: 'http://saloonplus.com:3004/api_v1',
    // api_url: 'https://reqres.in',
    date_format: 'DD MMM, YYYY',
    time_format: 'hh:mm A',
    currency: '$'
  },

  async redirects() {
    return [
      {
        source: '/kyc',
        destination: '/kyc/providers',
        permanent: true,
      },
      {
        source: '/users',
        destination: '/users/customers',
        permanent: true,
      },
    ]
  }
})
