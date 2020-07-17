import React from 'react';
import useSWR from 'swr'
import fetch from 'unfetch'
import Button from 'antd/es/button'
import List from 'antd/es/list'
// css
import 'antd/es/button/style/css'
import 'antd/es/list/style/css'
// css module
import style from './App.module.css'

const URL = `api/topics/hot.json`

const getList = async () => {
  const res = await fetch(URL)
  return await res.json()
}

const App = () => {
  const { data, error } = useSWR(URL, getList)
  console.log('list', data)

  if (error) {
    return <div>failed to load</div>
  }

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
      ) : <div>no data!</div>}
    </div>
  );
}

export default App;
