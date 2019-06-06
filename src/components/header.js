import React from "react";

const Header = props => {
     // this.props.img_url = 'http://via.placeholder.com/350x150'
     return (
       <header>
     		<div class="topnav">
        <img class="headerImage" src={require(`../images/logo-white.svg`)}  />
     			<div class="topnav-right">
     				<a class="headerlink" href="#">Payables</a> <a class="headerlink" href="#">Receivables</a> <a class="headerlink" href="#">Hi Dan</a>
     			</div>
     		</div>
     	</header>
     );
}
export default Header;
