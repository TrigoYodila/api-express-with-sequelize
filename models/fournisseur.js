'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fournisseur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fournisseur.hasMany(models.Livraison,{
        foreignKey:'fss_id'
      })
    }
  }
  Fournisseur.init({
    fss_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    libelle: DataTypes.STRING,
    adresse:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fournisseur',
    timestamps:false
  });
  return Fournisseur;
};