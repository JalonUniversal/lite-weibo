/**
 * @description utils controller
 * @author JalonUniversal
 */

const { ErrorModel } = require('../model/ResModel');
const ErrorInfo = require('../model/ErrorInfo');
const fse = require('fs-extra');

const MAX_SIZE = 1024 * 1024 * 1024;

/**
 * 保存文件
 * @param {string} name 用户名
 * @param {string} type 类型
 * @param {number} size 大小
 * @param {number} filePath 文件路径
 */
async function saveFile({ name, type, size, filePath }) {
  if(size > MAX_SIZE) {
    await fse.remove(filePath)
    return new ErrorModel(ErrorInfo.uploadFileSizeFailInfo);
  }
}

module.exports = {
  saveFile,
}