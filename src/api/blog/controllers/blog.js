'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({strapi}) => ({
  async findOne(ctx){
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::blog.blog').findOne({
      where: { slug: id },
      populate: [
        'BannerBackground',
        'Img',
        'Icon'
      ],
      
    });
    
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  }
}));