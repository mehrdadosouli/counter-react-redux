import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
export default function App() {
  return (
      <Provider store={store}>
        <div>
          <Counter />
         </div>
      </Provider>
  )
}
