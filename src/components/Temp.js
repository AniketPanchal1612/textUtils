import React, { useState } from "react";

export const Temp = () => {
  const[mycolor,setColor]=useState({
    color:'black', backgroundColor:'white'
  })

  const[btn,setbtn] = useState('Enable Black')

  const toggletouch=()=>{
    if(mycolor.color==='white'){
        setColor({
            color:'black', backgroundColor:'white'
        })
        setbtn('Enable Black')

    }
    else{
        setColor({
            color:'white', backgroundColor:'black'
        })
        setbtn('Enable white')
    }
  }

  return (
    <div>
        <div  style={mycolor} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat a ut fugit, ipsa et quisquam dicta voluptatem quia nam dolorem provident enim nihil corporis magnam optio? Ad esse nam mollitia ipsam sit quam consectetur distinctio illum, magni dolor tempore nemo architecto possimus suscipit consequuntur molestiae consequatur alias fugiat vitae. Excepturi accusantium voluptates unde. Porro provident unde, itaque magnam fugit voluptatem eum nam praesentium, recusandae ipsa commodi, voluptatibus dolor consequatur placeat numquam repellat sapiente ipsum natus laboriosam et illo consequuntur? Incidunt, natus aut. Totam, voluptate cupiditate iusto magnam iure libero error dignissimos maiores! Explicabo reprehenderit ratione, tempore commodi ipsa soluta nobis! Quia sit itaque quisquam quam ut, neque eligendi, assumenda obcaecati voluptate aliquam ea animi possimus! Quo sunt quis possimus nam officia id. Asperiores esse voluptatum exercitationem corporis ipsum. Minus numquam hic est nihil exercitationem vel. Impedit doloribus aperiam sit? Quis, labore rerum doloremque commodi temporibus soluta id nam maiores repudiandae corrupti, provident molestiae veniam quisquam voluptatibus, reprehenderit placeat dolorum saepe cum repellat distinctio sed ratione perspiciatis. Numquam est fugit distinctio ullam quidem sunt recusandae temporibus, omnis atque repellat inventore! A necessitatibus id commodi eum adipisci quisquam sit vel, quod quas provident doloribus, aut dolor ex! Distinctio rerum sapiente delectus?
        </div>
      <button onClick={toggletouch} className="btn btn-success my-4">{btn}</button>
    </div>
  );
};
