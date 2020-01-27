module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define("grade", {
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
    status: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 1
    }
  });

  Grade.associate = function(models) {
    Grade.hasMany(models.class_room, {
      foreignKey: "grade_id"
    });
  };

  return Grade;
};
