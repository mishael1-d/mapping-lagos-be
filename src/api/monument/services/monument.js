'use strict';

/**
 * monument service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monument.monument');
