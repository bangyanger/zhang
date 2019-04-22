"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var stateProps = {
  list: 0
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateProps;
  var action = arguments[1];

  // let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    default:
      return state;
  }
};
exports.default = reducer;