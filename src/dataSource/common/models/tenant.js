module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define(
    'tenant',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      institutionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      host: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      port: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    }
  );

  Tenant.associate = function(models) {
    Tenant.belongsTo(models.grade, {
      foreignKey: 'grade_id',
    });
  };
  return Tenant;
};
