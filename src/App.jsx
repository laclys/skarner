import React, { useState } from 'react';
import Button from 'antd/es/button'
import fetch from 'unfetch'
import useSWR from 'swr'
import 'antd/es/button/style/css'

import style from './App.module.css'

const URL = `api/topics/hot.json`

const getList = async () => {
  const res = await fetch(URL)
  return await res.json()
}

const App = () => {
  const { data } = useSWR(URL, getList)
  console.log('list', data)

  return (
    <div className={style.wrapper}>
      <h3>Hot Themes</h3>
      <Button className={style.reloadBtn}
        type="primary"
        onClick={() => getList(URL)}>Reload</Button>
      {(data && data.length !== 0 ) ? (
        <div>
          {data.length}
        </div>
      ) : null}
    </div>
  );
}

export default App;
