import React,{useState} from 'react';



export default function Faqs({object,classone,classtwo,iconone,icontwo}) {

    const [visibleIndex, setVisibleIndex] = useState(null);

  const toggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div >
 {object.map((item, index) => (
          <div key={item.id} className={classone}>
            <h2 onClick={() => toggle(index)}>{item.question}</h2>
            <p onClick={() => toggle(index)}>{visibleIndex === index ? iconone : icontwo }</p>
            {visibleIndex === index && <h3 className={classtwo}>{item.answer}</h3>}
          </div>
        ))}



    </div>
  )
}
