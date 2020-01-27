module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    c_uid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    education_level_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: "1"
    },
    current_plan_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      references: {
        model: "country",
        key: "id"
      }
    },
    is_deleted: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "0"
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("Suspended", "NotActivated", "Active", "Terminated"),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "Student"
    }
  });

  User.associate = function(models) {
    User.hasOne(models.class_room_user, {
      foreignKey: "user_id"
    });

    User.belongsTo(models.country, {
      foreignKey: "country_id"
    });

    User.belongsTo(models.education_level, {
      foreignKey: "education_level_id"
    });
  };

  return User;
};
