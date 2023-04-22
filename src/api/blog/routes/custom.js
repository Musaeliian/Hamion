module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blogs/:slug',
            handler: 'blog.findOne',
            config: {
                auth: false,
            }
        }
    ]
};