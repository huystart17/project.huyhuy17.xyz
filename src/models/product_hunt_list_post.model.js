// product_hunt_list_post-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const productHuntListPost = new Schema({
    name: {type: String, unique: true, required: true},
    imgs: {type: Array},
    description: {type: String, required: true}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('productHuntListPost');
  } catch (e) {
    return mongooseClient.model('productHuntListPost', productHuntListPost);
  }
};
