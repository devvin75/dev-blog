'use strict';

/**
 * post controller
 */

/**createCoreController function is from Strapy core is a factory function
 * that basically automatically applies all the basic CRUD functions that 
 * STRAPI has in it's core  */
const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::post.post');


/**BASIC CRUD OPERATIONS ARE AVAILABLE AND FOR THIS CONTENT TYPE */