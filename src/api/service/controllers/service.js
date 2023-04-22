'use strict';

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service', ({strapi}) => ({
    async findOne(ctx){
      const { id } = ctx.params;
  
      const entity = await strapi.db.query('api::service.service').findOne({
        where: { slug: id },
        populate: [
          'ServiceBanner.BannerBackground',
          'DescSection.DescSectionIMG'
        ],
        
      });
      
      const sanitizedEntity = await this.sanitizeOutput(entity);
  
      return this.transformResponse(sanitizedEntity);
    }
  }));
