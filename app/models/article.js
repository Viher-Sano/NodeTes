// Example model


module.exports = function (sequelize, DataTypes) {

  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [11,255]
      }
    },
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Article;
};

