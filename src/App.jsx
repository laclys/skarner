import React, { useState } from 'react';
import Button from 'antd/es/button'
import 'antd/es/button/style/css'

import style from './App.module.css'

function App() {
  return (
    <div className={style.wrapper}>
      <h3>Hot Themes</h3>
      <Button className={style.reloadBtn} type="primary">Reload</Button>
    </div>
  );
}

export default App;
