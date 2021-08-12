import React from 'react'
import './burger.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class Burger extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      lettuceprice: 1,
      baconprice: 3,
      cheeseprice: 3,
      meatprice: 5
    }
  }

  add_remove_ingredient = (action,item) => {
    let stateValue
    if(item==='lettuce'){
      stateValue = this.state.lettuce
    }
    else if(item==='bacon'){
      stateValue = this.state.bacon
    }
    else if(item==='cheese'){
      stateValue = this.state.cheese
    }
    else {
      stateValue = this.state.meat
    }

    if(action === 'more'){
      stateValue = stateValue + 1
    }
    else{
      stateValue = stateValue - 1
    }
    this.setState({
      [item]: stateValue >= 0 ? stateValue: 0
    })
  }

  displayIngredient = () =>{

    let burger = []

    for(let i=0;i<this.state.lettuce;i++){
      burger.push(<div key ={burger.length}  className = 'lettuce'></div>)
    }
    for(let i=0;i<this.state.bacon;i++){
      burger.push(<div key ={burger.length}  className = 'bacon'></div>)
    }
    for(let i=0;i<this.state.cheese;i++){
      burger.push(<div key ={burger.length}  className = 'cheese'></div>)
    }
    for(let i=0;i<this.state.meat;i++){
      burger.push(<div key ={burger.length}  className = 'meat'></div>)
    }

    return burger
  }

  totalprice = () =>{
    return (this.state.lettuceprice * this.state.lettuce + this.state.bacon * this.state.baconprice + this.state.cheese * this.state.cheeseprice + this.state.meat * this.state.meatprice)
  }


  render(){
    return(
      <div>

        <div className = 'row text-center p-5 Right'>

        <h2>Total Cost: ${this.totalprice()}</h2>
          <div className = 'w-25'>
              <h4>Lettuce</h4>
              <button onClick = {() => this.add_remove_ingredient('less','lettuce')} className = 'btn btn-warning m-3'>Less</button>
              <button onClick = {() => this.add_remove_ingredient('more','lettuce')} className = 'btn btn-success m-3'>More</button>
              <h4>Cost per piece {this.state.lettuceprice}$</h4>
          </div>
          <div className = 'w-25'>
              <h4>Bacon</h4>
              <button onClick = {() => this.add_remove_ingredient('less','bacon')} className = 'btn btn-warning m-3'>Less</button>
              <button onClick = {() => this.add_remove_ingredient('more','bacon')} className = 'btn btn-success m-3'>More</button>
              <h4>Cost per piece {this.state.baconprice}$</h4>

          </div>
          <div className = 'w-25'>
              <h4>Cheese</h4>
              <button onClick = {() => this.add_remove_ingredient('less','cheese')} className = 'btn btn-warning m-3'>Less</button>
              <button onClick = {() => this.add_remove_ingredient('more','cheese')} className = 'btn btn-success m-3'>More</button>
              <h4>Cost per piece {this.state.cheeseprice}$</h4>

          </div>
          <div className = 'w-25'>
              <h4>Meat</h4>
              <button onClick = {() => this.add_remove_ingredient('less','meat')} className = 'btn btn-warning m-3'>Less</button>
              <button onClick = {() => this.add_remove_ingredient('more','meat')} className = 'btn btn-success m-3'>More</button>
              <h4>Cost per piece {this.state.meatprice}$</h4>

          </div>
        </div>

        <div className="container p-5">
            <div className = 'top'></div>
            {this.displayIngredient()}
            <div className = 'bottom'></div>
        </div>

      </div>

    )
  }
}
export default Burger
