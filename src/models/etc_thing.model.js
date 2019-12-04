// etc_thing-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const etcThing = new Schema({
    text: {type: String, required: true},
    key: {type: String, unique: true}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('etcThing');
  } catch (e) {
    return mongooseClient.model('etcThing', etcThing);
  }
};
