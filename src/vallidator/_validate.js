/**
 * @description user 数据格式校验
 * @author JalonUniversal
 */

const Ajv = require('ajv');
const ajv = new Ajv();

/**
 * json schema 校验
 * @param {Object} schema json schema 规则
 * @param {Object} data 待检验的数据
 */

function validate(schema, data = {}) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    return ajv.errors[0]
  }
}

module.exports = validate