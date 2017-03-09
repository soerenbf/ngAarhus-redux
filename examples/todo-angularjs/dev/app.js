webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ngRedux = __webpack_require__(1);
	
	var _ngRedux2 = _interopRequireDefault(_ngRedux);
	
	__webpack_require__(43);
	
	var _app = __webpack_require__(45);
	
	var _index = __webpack_require__(46);
	
	var _index2 = __webpack_require__(50);
	
	var _app2 = __webpack_require__(53);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	    angular.module('app', ['ngRedux']).config(function ($ngReduxProvider) {
	        return $ngReduxProvider.createStoreWith(_app.rootReducer);
	    }).component('root', _app2.rootComponent).component('todoList', _index.todoListComponent).component('todoFilter', _index2.todoFilterComponent).filter('showBy', _index.showBy);
	})();

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rootReducer = exports.actions = undefined;
	
	var _redux = __webpack_require__(6);
	
	var _index = __webpack_require__(46);
	
	var _index2 = __webpack_require__(50);
	
	var nextTodoId = 0;
	var actions = exports.actions = {
	    addTodo: function addTodo(todo) {
	        return { type: 'ADD_TODO', todo: { title: todo, completed: false, id: nextTodoId++ } };
	    }
	};
	
	var rootReducer = exports.rootReducer = (0, _redux.combineReducers)({
	    todos: _index.todos,
	    filter: _index2.filter
	});

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _todoList = __webpack_require__(47);
	
	Object.defineProperty(exports, 'todoListComponent', {
	  enumerable: true,
	  get: function get() {
	    return _todoList.todoListComponent;
	  }
	});
	
	var _todoList2 = __webpack_require__(49);
	
	Object.defineProperty(exports, 'showBy', {
	  enumerable: true,
	  get: function get() {
	    return _todoList2.showBy;
	  }
	});
	
	var _todoList3 = __webpack_require__(48);
	
	Object.defineProperty(exports, 'todos', {
	  enumerable: true,
	  get: function get() {
	    return _todoList3.todos;
	  }
	});

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.todoListComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _todoList = __webpack_require__(48);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodoListController = function () {
	    function TodoListController($ngRedux) {
	        _classCallCheck(this, TodoListController);
	
	        this.unsubscribe = $ngRedux.connect(function (state) {
	            return { todos: state.todos, filter: state.filter };
	        }, _todoList.actions)(this);
	    }
	
	    _createClass(TodoListController, [{
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            this.unsubscribe();
	        }
	    }]);
	
	    return TodoListController;
	}();
	
	var todoListComponent = exports.todoListComponent = {
	    controller: TodoListController,
	    template: '\n        <ul class="todo-list">\n            <li\n                ng-repeat="todo in $ctrl.todos | showBy: $ctrl.filter" ng-click="$ctrl.toggleCompleted(todo.id)"\n                ng-class="{\'completed\': todo.completed}"\n            >{{todo.title}}</li>\n        </ul>\n    '
	};

/***/ },

/***/ 48:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var actions = exports.actions = {
	    toggleCompleted: function toggleCompleted(todoId) {
	        return { type: 'TOGGLE_COMPLETED', todoId: todoId };
	    }
	};
	
	var todos = exports.todos = function todos() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'ADD_TODO':
	            return state.concat([action.todo]);
	        case 'TOGGLE_COMPLETED':
	            return state.map(function (todo) {
	                return todo.id === action.todoId ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
	            });
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 49:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var showBy = exports.showBy = function showBy() {
	    return function (todos, filter) {
	        switch (filter) {
	            case 'active':
	                return todos.filter(function (todo) {
	                    return !todo.completed;
	                });
	            case 'completed':
	                return todos.filter(function (todo) {
	                    return todo.completed;
	                });
	            default:
	                return todos;
	        }
	    };
	};

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _todoFilter = __webpack_require__(51);
	
	Object.defineProperty(exports, 'todoFilterComponent', {
	  enumerable: true,
	  get: function get() {
	    return _todoFilter.todoFilterComponent;
	  }
	});
	
	var _todoFilter2 = __webpack_require__(52);
	
	Object.defineProperty(exports, 'filter', {
	  enumerable: true,
	  get: function get() {
	    return _todoFilter2.filter;
	  }
	});

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.todoFilterComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _todoFilter = __webpack_require__(52);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodoFilterController = function () {
	    function TodoFilterController($ngRedux) {
	        _classCallCheck(this, TodoFilterController);
	
	        this.unsubscribe = $ngRedux.connect(function (state) {
	            return { activeFilter: state.filter };
	        }, _todoFilter.actions)(this);
	    }
	
	    _createClass(TodoFilterController, [{
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            this.unsubscribe();
	        }
	    }]);
	
	    return TodoFilterController;
	}();
	
	var todoFilterComponent = exports.todoFilterComponent = {
	    controller: TodoFilterController,
	    template: '\n    <div class="filter">\n        <ul>\n            <li ng-click="$ctrl.setFilter(\'all\')" ng-class="{\'active\': $ctrl.activeFilter === \'all\'}">All</li>\n            <li ng-click="$ctrl.setFilter(\'active\')" ng-class="{\'active\': $ctrl.activeFilter === \'active\'}">Active</li>\n            <li ng-click="$ctrl.setFilter(\'completed\')" ng-class="{\'active\': $ctrl.activeFilter === \'completed\'}">Completed</li>\n        </ul>\n    </div>\n    '
	};

/***/ },

/***/ 52:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var actions = exports.actions = {
	    setFilter: function setFilter(activeFilter) {
	        return { type: 'SET_FILTER', activeFilter: activeFilter };
	    }
	};
	
	var filter = exports.filter = function filter() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'SET_FILTER':
	            return action.activeFilter;
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rootComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(45);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RootController = function () {
	    function RootController($ngRedux) {
	        _classCallCheck(this, RootController);
	
	        this.unsubscribe = $ngRedux.connect(null, _app.actions)(this);
	    }
	
	    _createClass(RootController, [{
	        key: 'add',
	        value: function add() {
	            this.addTodo(this.input);
	            this.input = '';
	        }
	    }, {
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            this.unsubscribe();
	        }
	    }]);
	
	    return RootController;
	}();
	
	var rootComponent = exports.rootComponent = {
	    controller: RootController,
	    template: '\n        <form ng-submit="$ctrl.add()">\n            <input type="text" ng-model="$ctrl.input" />\n            <button type="submit">ADD</button>\n        </form>\n        <todo-filter></todo-filter>\n        <todo-list></todo-list>\n    '
	};

/***/ },

/***/ 54:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.js.map