(function() {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; },
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micro */ "micro");
/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_4__);
// pages/api/graphql.js






__webpack_require__(/*! dotenv */ "dotenv").config();

const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Query {
    charity: [Charity]
  }
  type Charity {
      organisation_number: Int
      registered_charity_number: Int
      charity_registration_status: String
      charity_name: String
      latest_income: Int
      latest_expenditure: Int
      charity_contact_email: String
      charity_contact_web: String
  }
`;
const resolvers = {
  Query: {
    charity: async (_parent, _args, _context, _info) => {
      // return _context.db
      // .collection('charity')
      // .find({}).toArray()
      const charities = await _context.prisma.charity.findMany();
      console.log(charities);
      return charities;
    }
  }
};
const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();
const schema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_1__.makeExecutableSchema)({
  typeDefs,
  resolvers
});
let db; // const apolloServer = new ApolloServer({
//     schema,
//     context: async () => {
//       if (!db) {
//         try {
//           const dbClient = new MongoClient(process.env.MONGO_DB_URI,
//             {
//               useNewUrlParser: true,
//               useUnifiedTopology: true,
//             }
//           )
//           await dbClient.connect()
//           db = dbClient.db('charities-extract-1000') // database name
//         } catch (e) {
//           console.log('--->error while connecting with graphql context (db)', e)
//         }
//       }
//       return { db }
//     },
//   })

const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  schema,
  context: {
    prisma
  }
}); // await apolloServer.start();

const startServer = apolloServer.start(); // export default apolloServer.createHandler({ path: '/api/graphql' })

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await prisma.$connect();
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res);
}
const config = {
  api: {
    bodyParser: false
  }
};

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tools");;

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("micro");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaHFsLWFwb2xsby1tb25nb2RiLy4vcGFnZXMvYXBpL2dyYXBocWwuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhxbC1hcG9sbG8tbW9uZ29kYi9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZ3JhcGhxbC1hcG9sbG8tbW9uZ29kYi9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiIsIndlYnBhY2s6Ly9ncmFwaHFsLWFwb2xsby1tb25nb2RiL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vZ3JhcGhxbC1hcG9sbG8tbW9uZ29kYi9leHRlcm5hbCBcImdyYXBocWwtdG9vbHNcIiIsIndlYnBhY2s6Ly9ncmFwaHFsLWFwb2xsby1tb25nb2RiL2V4dGVybmFsIFwibWljcm9cIiIsIndlYnBhY2s6Ly9ncmFwaHFsLWFwb2xsby1tb25nb2RiL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5IiwiY2hhcml0eSIsIl9wYXJlbnQiLCJfYXJncyIsIl9jb250ZXh0IiwiX2luZm8iLCJjaGFyaXRpZXMiLCJwcmlzbWEiLCJmaW5kTWFueSIsImNvbnNvbGUiLCJsb2ciLCJQcmlzbWFDbGllbnQiLCJzY2hlbWEiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsImRiIiwiYXBvbGxvU2VydmVyIiwiQXBvbGxvU2VydmVyIiwiY29udGV4dCIsInN0YXJ0U2VydmVyIiwic3RhcnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwibWV0aG9kIiwiZW5kIiwiJGNvbm5lY3QiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLGtEQUFBOztBQUVBLE1BQU1DLFFBQVEsR0FBR0Msb0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBO0FBZ0JBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxPQUFPQyxPQUFQLEVBQWdCQyxLQUFoQixFQUF1QkMsUUFBdkIsRUFBaUNDLEtBQWpDLEtBQTJDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0JOLE9BQWhCLENBQXdCTyxRQUF4QixFQUF4QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNBLGFBQU9BLFNBQVA7QUFDSDtBQVJJO0FBRFMsQ0FBbEI7QUFhQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUksd0RBQUosRUFBZjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsbUVBQW9CLENBQUM7QUFDaENoQixVQURnQztBQUVoQ0U7QUFGZ0MsQ0FBRCxDQUFuQztBQUtBLElBQUllLEVBQUosQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLDZEQUFKLENBQWlCO0FBQ2xDSixRQURrQztBQUVsQ0ssU0FBTyxFQUFFO0FBQ1BWO0FBRE87QUFGeUIsQ0FBakIsQ0FBckIsQyxDQU9BOztBQUNBLE1BQU1XLFdBQVcsR0FBR0gsWUFBWSxDQUFDSSxLQUFiLEVBQXBCLEMsQ0FFQTs7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUNBLEtBQUcsQ0FBQ0MsU0FBSixDQUFjLGtDQUFkLEVBQWtELE1BQWxEO0FBQ0FELEtBQUcsQ0FBQ0MsU0FBSixDQUNFLDZCQURGLEVBRUUsa0NBRkY7QUFJQUQsS0FBRyxDQUFDQyxTQUFKLENBQ0UsOEJBREYsRUFFRSxnREFGRjs7QUFJQSxNQUFJRixHQUFHLENBQUNHLE1BQUosS0FBZSxTQUFuQixFQUE4QjtBQUM1QkYsT0FBRyxDQUFDRyxHQUFKO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBTVAsV0FBTjtBQUNBLFFBQU1YLE1BQU0sQ0FBQ21CLFFBQVAsRUFBTjtBQUNBLFFBQU1YLFlBQVksQ0FBQ1ksYUFBYixDQUEyQjtBQUMvQkMsUUFBSSxFQUFFO0FBRHlCLEdBQTNCLEVBRUhQLEdBRkcsRUFFRUMsR0FGRixDQUFOO0FBR0Q7QUFFTSxNQUFNTyxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWYsQzs7Ozs7Ozs7Ozs7QUN4R1QsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL2dyYXBocWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvZ3JhcGhxbC5qc1xyXG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXHJcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scydcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuaW1wb3J0IHsganNvbiB9IGZyb20gJ21pY3JvJ1xyXG5cclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuXHJcbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgY2hhcml0eTogW0NoYXJpdHldXHJcbiAgfVxyXG4gIHR5cGUgQ2hhcml0eSB7XHJcbiAgICAgIG9yZ2FuaXNhdGlvbl9udW1iZXI6IEludFxyXG4gICAgICByZWdpc3RlcmVkX2NoYXJpdHlfbnVtYmVyOiBJbnRcclxuICAgICAgY2hhcml0eV9yZWdpc3RyYXRpb25fc3RhdHVzOiBTdHJpbmdcclxuICAgICAgY2hhcml0eV9uYW1lOiBTdHJpbmdcclxuICAgICAgbGF0ZXN0X2luY29tZTogSW50XHJcbiAgICAgIGxhdGVzdF9leHBlbmRpdHVyZTogSW50XHJcbiAgICAgIGNoYXJpdHlfY29udGFjdF9lbWFpbDogU3RyaW5nXHJcbiAgICAgIGNoYXJpdHlfY29udGFjdF93ZWI6IFN0cmluZ1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBjaGFyaXR5OiBhc3luYyAoX3BhcmVudCwgX2FyZ3MsIF9jb250ZXh0LCBfaW5mbykgPT4ge1xyXG4gICAgICAgIC8vIHJldHVybiBfY29udGV4dC5kYlxyXG4gICAgICAgIC8vIC5jb2xsZWN0aW9uKCdjaGFyaXR5JylcclxuICAgICAgICAvLyAuZmluZCh7fSkudG9BcnJheSgpXHJcbiAgICAgICAgY29uc3QgY2hhcml0aWVzID0gYXdhaXQgX2NvbnRleHQucHJpc21hLmNoYXJpdHkuZmluZE1hbnkoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXJpdGllcylcclxuICAgICAgICByZXR1cm4gY2hhcml0aWVzXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuY29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xyXG4gICAgdHlwZURlZnMsXHJcbiAgICByZXNvbHZlcnMsXHJcbn0pXHJcblxyXG5sZXQgZGJcclxuXHJcbi8vIGNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4vLyAgICAgc2NoZW1hLFxyXG4vLyAgICAgY29udGV4dDogYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICBpZiAoIWRiKSB7XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgIGNvbnN0IGRiQ2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHByb2Nlc3MuZW52Lk1PTkdPX0RCX1VSSSxcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIClcclxuICBcclxuLy8gICAgICAgICAgIGF3YWl0IGRiQ2xpZW50LmNvbm5lY3QoKVxyXG4vLyAgICAgICAgICAgZGIgPSBkYkNsaWVudC5kYignY2hhcml0aWVzLWV4dHJhY3QtMTAwMCcpIC8vIGRhdGFiYXNlIG5hbWVcclxuLy8gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tPmVycm9yIHdoaWxlIGNvbm5lY3Rpbmcgd2l0aCBncmFwaHFsIGNvbnRleHQgKGRiKScsIGUpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbiAgXHJcbi8vICAgICAgIHJldHVybiB7IGRiIH1cclxuLy8gICAgIH0sXHJcbi8vICAgfSlcclxuXHJcbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4gICAgc2NoZW1hLFxyXG4gICAgY29udGV4dDoge1xyXG4gICAgICBwcmlzbWFcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbi8vIGF3YWl0IGFwb2xsb1NlcnZlci5zdGFydCgpO1xyXG5jb25zdCBzdGFydFNlcnZlciA9IGFwb2xsb1NlcnZlci5zdGFydCgpXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7IHBhdGg6ICcvYXBpL2dyYXBocWwnIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJylcclxuICAgIHJlcy5zZXRIZWFkZXIoXHJcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLFxyXG4gICAgICAnaHR0cHM6Ly9zdHVkaW8uYXBvbGxvZ3JhcGhxbC5jb20nXHJcbiAgICApXHJcbiAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXHJcbiAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0J1xyXG4gICAgKVxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xyXG4gICAgICByZXMuZW5kKClcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhd2FpdCBzdGFydFNlcnZlclxyXG4gICAgYXdhaXQgcHJpc21hLiRjb25uZWN0KClcclxuICAgIGF3YWl0IGFwb2xsb1NlcnZlci5jcmVhdGVIYW5kbGVyKHtcclxuICAgICAgcGF0aDogJy9hcGkvZ3JhcGhxbCcsXHJcbiAgICB9KShyZXEsIHJlcylcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaWNyb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==