module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tenant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      },
      institutionId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'institution_id',
        references: {
          model: 'institution',
          key: 'id',
        },
      },
      username: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      host: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      port: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        field: 'deleted_at',
        type: Sequelize.DataTypes.DATE,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('tenant'),
};
