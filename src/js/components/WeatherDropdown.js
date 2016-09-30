import React from 'react';
import styles from '../../css/styles.scss';


// STATEFULL class called Dropdown that extends the base React Component class
export default class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
          selectedListItem: null,
          isListVisible: false
        }
        this.dropDownClickHandler = this.dropDownClickHandler.bind(this);
        this.dropDownListItemClickHandler = this.dropDownListItemClickHandler.bind(this);
     }

     //updating the state with placeholder value after component added in to the DOM
      componentDidMount(){
        this.setState({
          selectedListItem : this.props.placeholder
        });
      }

      // Handling the event of Dropdown click
      dropDownClickHandler(){
        this.toggleListVisibleState(!this.state.isListVisible);
      }

      // Handling the event of Dropdown list
      dropDownListItemClickHandler(e){
        const value = e.target.textContent;
        this.setState({
          selectedListItem: value
        })
        this.toggleListVisibleState(!this.state.isListVisible);
      }

      // Function to toggeling the visible and invisible state of the list coantainer
      toggleListVisibleState(isListVisible){
        this.setState({
          isListVisible:isListVisible
        });
      }

      // Function will render Dropdown and its Dropdownlist component 
      render() {
      	const ListComponent = this.props.itemComponent;
      	const listItems = this.props.items.map( (item,i) => <li className="dropdown-list-items" key={i} 
        onClick={this.dropDownListItemClickHandler}><ListComponent  {...item} /></li>)      
        return <div className="custom-dropdown-holder">
                  <h2>Weather - Custom Dropdown</h2>
                  <div className="custom-dropdown">
                     <button className="btn btn-default" type="button" 
                      onClick={this.dropDownClickHandler}>
                      {this.state.selectedListItem}
                     <span className="caret pull-right"></span></button>
                     <ul className={this.state.isListVisible ? 'list-show' : 'list-hide'}>
                     		{listItems}
                     </ul>
                  </div>
              </div>
      }
}