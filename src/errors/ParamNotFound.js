class ParamNotFoundError extends Error {
  constructor(paramName) {
    this.paramName = paramName;
  }
};

module.exports = ParamNotFoundError;
