import React, { Component } from "react";
import axios from "axios";
import StarWarsModal from "./StarWarsModal";
import { Item } from "semantic-ui-react";

class StarWarsList extends Component {
  state = {
    characters: [],
  };
  componentDidMount() {
    this.getCharacters();
  }
  getCharacters = async () => {
    let characterData = await axios.get("https://swapi.dev/api/people/");
    this.setState({ characters: characterData.data.results });
  };

  render() {
    let starWarsList = this.state.characters.map((character) => {
      return (
        <Item key={character.id} className="character-item">
          <Item.Image
            className="avatar"
            circular
            size="tiny"
            alt={character.first_name}
            src={character.avatar}
          />

          <Item.Content verticalAlign="middle">
            <Item.Header className="name">
              {character.first_name} {character.last_name}
            </Item.Header>
            <Item.Extra>
              <characterModal id={character.id} />
            </Item.Extra>
          </Item.Content>
        </Item>

        
      );
    });
    return <Item.Group id="character-list">{starWarsList}</Item.Group>;
  }
}

export default StarWarsList;