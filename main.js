// ACTIONS
const addActionOne = {
   type: 'ADDONE',
};

const addActionTen = {
   type: 'ADDTEN',
};

const removeActionOne = {
   type: 'REMOVEONE',
};

const removeActionTen = {
   type: 'REMOVETEN',
};

const resetAction = {
   type: 'RESET',
};

// REDUCER
const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case 'ADDONE':
      return state + 1;
      case 'ADDTEN':
      return state + 10;
      case 'REMOVEONE':
      return state - 1;
      case 'REMOVETEN':
      return state - 10;
      case 'RESET' :
      return state = 0
      default:
      return state;
   }
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);


// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
   renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const addone = document.getElementById('addone');
addone.addEventListener('click', () => {
   store.dispatch(addActionOne)
});

const addten = document.getElementById('addten');
addten.addEventListener('click', () => {
   store.dispatch(addActionTen)
});

const removeone = document.getElementById('removeone');
removeone.addEventListener('click', () => {
   store.dispatch(removeActionOne)
});

const removeten = document.getElementById('removeten');
removeten.addEventListener('click', () => {
   store.dispatch(removeActionTen)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
   store.dispatch(resetAction)
});
