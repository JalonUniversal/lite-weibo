/**
 * @description utils controller
 * @author JalonUniversal
 */
const path = require('path');
const { ErrorModel, SuccessModel } = require('../model/ResModel');
const ErrorInfo = require('../model/ErrorInfo');
const fse = require('fs-extra');

// 存储目录
const DIST_FOLDER_PATH = path.join(__dirname, '..', '..', 'uploadFiles');
// 文件最大体积 1M
const MAX_SIZE = 1024 * 1024 * 1024;
// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then(exist => {
  if(!exist) {
    fse.ensureDir(DIST_FOLDER_PATH);
  }
});

/**
 * 保存文件
 * @param {string} name 文件名
 * @param {string} type 文件类型
 * @param {number} size 文件大小
 * @param {number} filePath 文件路径
 */
async function saveFile({ name, type, size, filePath }) {
  if(size > MAX_SIZE) {
    await fse.remove(filePath);
    return new ErrorModel(ErrorInfo.uploadFileSizeFailInfo);
  }
  // 移动文件
  const fileName = `${Date.now()}.${name}`; // 防止重名
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName);
  await fse.move(filePath, distFilePath);

  // 返回信息
  return new SuccessModel({
    url: `/${fileName}`
  });
}

module.exports = {
  saveFile,
}