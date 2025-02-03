// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  // 시작점 - 어떤 파일을 기준으로 통합을 할 것인가
  entry: './src/index.js',
  // npm run build 명령으로 빌드를 하면 build된 결과가 출력될 폴더
  // path.resolve는 ()안의 패스를 OS에 따라 연결해서 풀패스로 반환한다(unix 구분자 \, win /)
  // __dirname은 프로젝트 폴더까지의 절대패스
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  // 개발서버 설정. open: true는 시작하자마자 브라우저를 자동으로 open
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
  // 설정을 돕는 외부 라이브러리 초기 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  // 확장자에 따라 처리할 모듈 정의
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
