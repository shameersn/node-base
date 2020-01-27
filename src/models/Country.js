module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("country", {
    id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    short_code: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    mobile_code: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    c_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    flagurl: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Country.associate = function(models) {
    Country.hasOne(models.country_lang, {
      foreignKey: "country_id"
    });
  };

  return Country;
};
