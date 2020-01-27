module.exports = function(sequelize, DataTypes) {
  return sequelize.define("education_level", {
    id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name_ar: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    short_code: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    c_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  });
};
