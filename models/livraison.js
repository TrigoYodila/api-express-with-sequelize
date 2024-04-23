'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livraison extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Livraison.belongsTo(models.Produit,{
        foreignKey:'pro_id'
      })
      Livraison.belongsTo(models.Fournisseur,{
        foreignKey:'fss_id'
      })
    }
  }
  Livraison.init({
    liv_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    quantite: DataTypes.INTEGER,
    date_livraison: DataTypes.DATE,
    pro_id: DataTypes.INTEGER,
    fss_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livraison',
    timestamps:false
  });
  return Livraison;
};