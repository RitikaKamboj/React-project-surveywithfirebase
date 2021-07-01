import React, { Component } from "react";	
import Details from "./Details";	
import Question from "./Question";	
import { v4 as uuidv4 } from 'uuid';	
import firebase from "firebase";	
const firebaseConfig = {	
    apiKey: "AIzaSyAA9quGt8J-gxQwF5xL_MWbAA1vkdZotIA",	
    authDomain: "survey-3e724.firebaseapp.com",	
    databaseURL: "https://survey-3e724-default-rtdb.firebaseio.com",	
    projectId: "survey-3e724",	
    storageBucket: "survey-3e724.appspot.com",	
    messagingSenderId: "851408831098",	
    appId: "1:851408831098:web:f56478702421fba9b671c3"	
  };	
  	
  if (!firebase.apps.length) {	
    firebase.initializeApp(firebaseConfig);	
  } else {	
    firebase.app(); // if already initialized, use that one	
  }	
export class Container extends Component {	
  constructor(props) {	
    super(props);	
    this.state = {	
        id : uuidv4(),	
        name : null,	
        email : null,	
        questions : {	
            q1 : null,	
            q2 : null,	
            q3 : null,	
            other : null,	
        },	
        isSubmitted : false,	
    };	
  }	
  detailsSubmitHandler = (event) =>{	
      const name = event.target.name.value;	
      const email = event.target.email.value;	
      this.setState({ name, email});	
    	
    event.preventDefault();	
  }	
  questionsSubmitHandler = (event) =>{	
      const questions ={};	
      questions.q1 = event.target.q1.value;	
      questions.q2 = event.target.q2.value;	
      questions.q3 = event.target.q3.value;	
      questions.other = event.target.other.value;	
      const isSubmitted = true;	
    this.setState({ questions , isSubmitted })	
    event.preventDefault();	
    const database = firebase.database();	
    database.ref("surveydb/"+this.state.id).set({	
        name: this.state.name,	
        email: this.state.email,	
        questions: this.state.questions,	
    })	
    ;	
  }	
  	
  render() {	
    return (	
      <>	
        <div className="container-fluid">	
          <div className="container card mt-2">	
            <h1 className="text-center text-primary">Survey</h1>	
          </div>	
        </div>	
        {	
            this.state.isSubmitted ? (	
            <div className="card">	
                <h1>Thank You</h1>	
            </div> 	
             ) :	
            this.state.name === null && this.state.email === null ? (<Details submit={this.detailsSubmitHandler}/> ): ( <Question submit={this.questionsSubmitHandler}/>)	
        }	
        	
      </>	
    );	
  }	
}	
export default Container;	
