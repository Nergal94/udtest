module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  filenameHashing: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
};