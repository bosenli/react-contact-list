import contacts from "../data/contact.json"

function Contact({ list }){
    return (
        <div className = "Contact">
 {
       list && list.length>0 && list.map((item)=>
       <div>
           {item.picture.thumbnail}
           {item.name.first}
           {item.name.last}
           {item.phone}
           {item.cell}
       </div>

       )
     }
        </div>
    )
}

export default Contact