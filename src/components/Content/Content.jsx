import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Content = () => {

const [data, setData] = useState([]);

useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setData(data))
}, []);



    return (
        <div>
          {
            data.map(item => <Item
                key={item.id}
                item={item}
            ></Item>
            )
          }
        </div>
    );
};

export default Content;