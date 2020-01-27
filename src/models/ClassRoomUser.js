module.exports = (sequelize, DataTypes) => {
  const ClassRoomUser = sequelize.define("class_room_user", {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    class_room_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("active", "pending", "rejected"),
      allowNull: false
    },
    class_room_role_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  });

  ClassRoomUser.associate = function(models) {
    ClassRoomUser.belongsTo(models.class_room, {
      foreignKey: "class_room_id"
    });

    ClassRoomUser.belongsTo(models.class_room_role, {
      foreignKey: "class_room_role_id"
    });

    ClassRoomUser.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };

  return ClassRoomUser;
};
