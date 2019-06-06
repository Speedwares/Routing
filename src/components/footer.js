import React from "react";

const Profile = props => {
     // this.props.img_url = 'http://via.placeholder.com/350x150'
     return (
       <footer>
       <hr />
       <img class="" src={require(`../images/logo-dark.svg`)}  />
     		<h2 class="madewithLove">Made with ❤️ in the West Coast</h2>
     		<div class="footernav-right">
     			<ul>
     				<li>
     					<a class="footerlinkTitle" href="">Routable</a>
     				</li>
     				<li>
     					<a class="footerlink" href="">Payables</a>
     				</li>
     				<li>
     					<a class="footerlink" href="">Receivables</a>
     				</li>
     				<li>
     					<a class="footerlink" href="">Roles</a>
     				</li>
     				<li>
     					<a class="footerlink" href="">Integrations</a>
     				</li>
     			</ul>
     			<ul>
     				<li>
     					<a class="footerlinkTitle" href="">Support</a>
     				</li>
     				<li>
     					<a class="footerlink" href="">Help Docs</a>
     				</li>
     				<li>
     					<a class="footerlink" href="">Contact Us</a>
     				</li>
     			</ul>
     		</div>
     	</footer>
     );
}
export default Profile;
