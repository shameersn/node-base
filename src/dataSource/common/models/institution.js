module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'institution',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nameAr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
      },
      attachment1: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
        comment: 'JSON stringified object of attachment',
      },
      attachment2: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
        comment: 'JSON stringified object of attachment',
      },
      addressLine1: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
      },
      addressLine2: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
      },
      isReserved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        comment: '0-not reserved, 1-reserved nursery for dars',
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        comment: '0-inactive,1-active',
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
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
