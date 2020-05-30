import React, {Component} from 'react';
import './Header.css';
import ocul from '../imga/ocul.png';
import logo from '../imga/logo1.png'
class Header extends Component {
   constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);

      this.state = {
          shouldShowElem: false,
      };
   }

   handleClick() {
      this.setState({
          shouldShowElem: true,
      });
  }
   render() {
    return (
      <div className = "header">
      <div className = "top-header">
        <div className="left">
          
               <a className="undertext">Календарь абитуриендов</a>
               <div className="none"></div>
               <a className="undertext">СтудLove</a>
               <div className="none"></div>
               <a className="undertext">Дистант</a>
             
           </div>

          <div className="right">
           
               <a className="undertext">образовательная платформа</a>
               <div className="none"></div>
               <a className="undertext">ENG</a>
               <div className="none"></div>
               <img className="img" src={ocul} alt={"qwedfq"} />
           
           </div>
      </div>
      <div className = "down-header">
            <div>
                <img src={logo} alt={"a logo"} className="logo"/>
            </div>
           
               <div className="center">
                <div className="topmenu">
                 <li><a Onclick={this.handleClick}>Главная</a>
      {this.state.shouldShowElem &&
                 <div className="submenu">
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                 </div>
   }
                 </li>

                 <li><a>Абитуриентам</a>
                 <div className="submenu">
                 <div className="submenu">
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                 </div>
                 </div>
                 </li>
                 <li><a>Студентам</a>
                 <div className="submenu">
                 <div className="submenu">
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                 </div>
                 </div>
                 </li>
                 <li><a>Контакты</a>
                 <div className="submenu">
                 <div className="submenu">
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                 </div>
                 </div>
                 </li>
                 <li><a>Образование</a>
                 <div className="submenu">
                 <div className="submenu">
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                    <li><a>Дистант</a></li>
                 </div>
                 </div>
                 </li>
                </div>
               </div>

            <div className="max-right">
                <input className="in" type="text" />
            </div>
      </div>
</div>
    )
   }
}

export default Header