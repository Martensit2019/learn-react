import React, {useState} from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);
  const handleMenuClick = () => {
    setOpen(prevState => !prevState)
    console.log('open ->', open);
  }
  const handleItemClick=(item)=>{
    console.log('click', item);
  }

  return (
    <div>
      <button 
        className="btn btn-sm btm-primary" 
        onClick={handleMenuClick}
      >
        меню
      </button>
      {open && (
        <ul className="list-group">
          {
            menuItems.map(item => (
              <li className="list-group-item" key={item} onClick={()=>handleItemClick(item)}>{item}</li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default Navbar