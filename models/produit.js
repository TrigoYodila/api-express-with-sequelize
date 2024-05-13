'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produit.belongsTo(models.Categorie,{
        foreignKey:'cat_id'
      })
      Produit.hasMany(models.Commande,{
        foreignKey:'pro_id'
      })
      Produit.hasMany(models.Livraison,{
        foreignKey:'pro_id'
      })
    }
  }
  Produit.init({
    pro_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    libelle: DataTypes.STRING,
    prix: DataTypes.DECIMAL,
    cat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produit',
    timestamps:false
  });
  return Produit;
};