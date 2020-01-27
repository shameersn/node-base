module.exports = (sequelize, DataTypes) => {
  return sequelize.define("country_lang", {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      references: {
        model: "country",
        key: "id"
      }
    },
    language_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false
    },
    display_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });
};
