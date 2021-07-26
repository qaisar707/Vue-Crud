module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/qaisar7707gitt/" : "/",
  devServer: {
    proxy: "http://localhost:5000",
  },
};
