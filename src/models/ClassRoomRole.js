module.exports = (sequelize, DataTypes) => {
  const ClassRoomRole = sequelize.define("class_room_role", {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });
  return ClassRoomRole;
};
