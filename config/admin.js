module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e5819b740704cb437cecf649ebacd1be'),
  },
});
