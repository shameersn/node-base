module.exports = (sequelize, DataTypes) => {
  const UserChatRef = sequelize.define("user_chat_ref", {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    chat_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "1 - ACTIVE, 2 - SUSPENDED"
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  UserChatRef.associate = function(models) {
    UserChatRef.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };

  return UserChatRef;
};
