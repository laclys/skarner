import React from 'react';
import useSWR, { mutate } from 'swr';
import fetch from 'unfetch';
import Button from 'antd/es/button';
import List from 'antd/es/list';
import Avatar from 'antd/es/avatar';
// css
import 'antd/es/button/style/css';
import 'antd/es/list/style/css';
import 'antd/es/avatar/style/css'
// css module
import style from './App.module.css';

const URL = `api/topics/hot.json`;

const getList = async () => {
  const res = await fetch(URL);
  return await res.json();
};

const App = () => {
  const { data, error } = useSWR(URL, getList);

  return (
    <div className={style.wrapper}>
      <h3>Hot Themes</h3>
      <Button
        className={style.reloadBtn}
        type="primary"
        onClick={() => mutate(URL)}
      >
        Reload
      </Button>
      <Content data={data} error={error} />
    </div>
  );
};

const Content = ({ data, error }) => {
  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <div className={style.contentWrapper} >
      <List
      bordered
      loading={!data}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item?.member?.avatar_normal} />}
            title={<a href={item?.url}>{item?.title}</a>}
            description={item?.content}
          />
        </List.Item>
      )}
    />
    </div>
  );
};

export default App;
