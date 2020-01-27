module.exports = (sequelize, DataTypes) => {
  return sequelize.define("subject", {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name_en: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name_ar: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    short_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    icon_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 1
    }
  });
};
