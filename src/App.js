import React from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message_Cstate';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Person from './Components/Person';
import Stylesheet from './Components/Stylesheet';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import MemoComp from './Components/MemoComp';
import ParentMemo from './Components/ParentMemo';
import RefsDemo from './Components/RefsDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default function App(){
  
    return (
      <div className='App'>
        {/* <FunctionClick />
        <ClassClick />         <EventBind />

        <ParentComponent parentName = "hello"/>
        <UserGreeting />
        <NameList />
      

        <Welcome name="sherjeel" sName="sk"/> 
         <Counter/> 
         <Message/> 
         <Greet name="Sherjeel" sName="Sk"/> 
           
         <Greet name="momin" sName="Moo">
          <button>
            A Button! 
          </button>
        </Greet>
        <Greet name="faiez" sName="faii"/>     

         <Welcome name="Sherjeel" sName="Sk">
          
        </Welcome>
        <Hello/> 

        <Stylesheet class="primary"/> */}
        {/* <Form /> */}
        {/* <LifeCycleA /> */}
        {/* <FragmentDemo /> */}

        {/* <ParentMemo /> */}
        {/* <RefsDemo /> */}
        
        {/* <ErrorBoundary>
        <Hero heroName = "Batman"></Hero>
        <Hero heroName = "Superman"></Hero>
        <Hero heroName = "Joker"></Hero>
        </ErrorBoundary> */}
        <ClickCounter />
        <HoverCounter />
      </div>
    ); 
}