import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="header">
        <div style={{backgroundColor:'white',padding:'0px 15px 0px 15px',zIndex:1030,height:'50px',display:'flex',justifyContent:'space-between',width:'100%'}}>
          <div style={{flexGrow:1,display:'flex'}}>
            <div>
              <a href='/' style={LogoStyle}>
                <img border='0' style={ImgStyle} src={ForumIcon} alt='Forum logo' />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

let ForumIcon = 'assets/forum_logo.png';

let ImgStyle = {
  maxHeight: '100%'
};

let LogoStyle = {
  padding: '5px',
  float: 'left',
  height: '50px'
};
