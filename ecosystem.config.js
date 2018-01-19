/**
 * @desc PM2 deploy
 * @author Jooger <iamjooger@gmail.com>
 * @date 16 Jan 2018
 */

'use strict'

const packageInfo = require('./package.json')

module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: 'jooger.me',
      ref: 'origin/master',
      repo: packageInfo.repository.url,
      path: '/root/www/' + packageInfo.name,
      'post-deploy': 'git pull'
    }
  }
}
