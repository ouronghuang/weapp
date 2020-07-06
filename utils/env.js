let env;

const fileManager = wx.getFileSystemManager();

try {
  fileManager.accessSync('/.env');
  env = 'dev';
} catch (e) {
  env = 'prod';
}

export default env;
