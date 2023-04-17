const checkPropertyType = (object, property, type) => {
  return typeof object[property] === type;
};

const validateData = (req, res, next) => {
  const reqProperties = [
    { name: "captainName", type: "string" },
    { name: "title", type: "string" },
    { name: "post", type: "string" },
    { name: "mistakesWereMadeToday", type: "boolean" },
    { name: "daysSinceLastCrisis", type: "number" },
  ];

  // Check the required properties to be the expected dataType
  const isValidData = reqProperties.every((property) => {
    checkPropertyType(req.body, property.name, property.type);
  });

  if (isValidData) {
    next();
  } else {
    res.status(400).send("Invalid data");
  }
};

module.exports = { validateData };
