import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    clickedItem: ""
  }

  handleClick = event => {
    console.log(event.target)
    let choice = this.findComponent(event.target.id)
    console.log(choice)
    this.setState({
      clickedItem: choice 
    })
  }

  findComponent(id) {
    if (id === "profile") {
      return <Profile/>
    } else if (id === "photo") {
      return <Photos/>
    } else if (id === "cocktail") {
      return <Cocktails/>
    } else if (id === "pokemon") {
      return <Pokemon/>
    } else {
      return ""
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = (this.state.clickedItem === "" ? <div>Nothing to see yet!</div> : this.state.clickedItem)
    console.log(detailsToDisplay)
    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
