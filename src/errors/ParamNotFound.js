class ParamNotFoundError extends Error {
  constructor(paramName) {
    super(paramName);
    this.paramName = paramName;
  }
};

module.exports = ParamNotFoundError;
