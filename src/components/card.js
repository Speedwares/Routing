import React from "react";
import { invoiceData } from '../../../data/invoice_data';

export default class Card extends React.Component {
     constructor (invoiceNumber,billingAmount,invoiceDate,dueDate,Sender,sendingCompany) {
       this.invoiceNumber = number;
       this.billingAmount = amount;
       this.invoiceDate = date;
       this.dueDate = duedate;
       this.Sender = sender;
       this.sendingCompany = sendingcompany;
     }

     templateCard = new Card("44768", "$4,581.75", "June 6, 2019","6/8/2019", "Sam Stevensburg", "Google" );

     return (
       <div class="center m-b-60">
       <section class="card">
     		<h2 class="subtitle p-b-6">Invoice {templateCard.invoiceNumber}</h2>
     		<h4 class="p-b-40">{templateCard.invoiceDate}</h4>
        <img class="google" src={require(`../images/Google_2015_logo.svg`)}  />
     		<h1 class="number p-b-15">{templateCard.billingAmount}</h1>
        <a class="viewpdf" href={require('../images/invoice.pdf')} rel="noopener noreferrer" target="_blank">VIEW PDF</a>
        <hr />
     		<div class="15px"></div>
     		<h3 class="p-b-6">From: {templateCard.Sender}<br /> @ {templateCard.sendingCompany}</h3>
     		<h4 class="p-b-30">“Hi Steve, this is for the concept work”</h4>
     		<h3>Due {dueDate}</h3>
     		<h2 class="not-paid">Not Yet Paid</h2>
     	</section>
      </div>
     );
}
}
