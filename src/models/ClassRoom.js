module.exports = (sequelize, DataTypes) => {
  const ClassRoom = sequelize.define(
    "class_room",
    {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      grade_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      subject_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      academic_year_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
      },
      class_length_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
      },
      created_by: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      updated_by: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      createdAt: "created_on",
      updatedAt: "updated_on"
    }
  );

  ClassRoom.associate = function(models) {
    ClassRoom.belongsTo(models.grade, {
      foreignKey: "grade_id"
    });
    ClassRoom.belongsTo(models.subject, {
      foreignKey: "subject_id"
    });
    ClassRoom.hasMany(models.class_room_user, {
      foreignKey: "class_room_id"
    });
  };

  return ClassRoom;
};
