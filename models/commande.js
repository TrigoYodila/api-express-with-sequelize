'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Commande.belongsTo(models.Produit,{
        foreignKey:'pro_id'
      })
      Commande.belongsTo(models.Client,{
        foreignKey:'cli_id'
      })
    }
  }
  Commande.init({
    com_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    quantite: DataTypes.INTEGER,
    date_commande: DataTypes.DATE,
    pro_id: DataTypes.INTEGER,
    cli_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Commande',
    timestamps:false
  });
  return Commande;
};