'use strict';
/**SERVICES are a set of functions that basically serve the controller's function 
 * by performing some "low level" operations, like accessing the database.
 * 
 * They are just a utility functions to say so that serve what controllers do  
 */


/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post');
