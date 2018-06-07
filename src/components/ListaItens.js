import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    // requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then( response => { this.setState({ listaItens: response.data }) })
      .catch(() => { console.log('Error HTML')});
  }


  render() {
    return (
      <ScrollView style={{ backgroundColor: '#eee'  }}>
        { this.state.listaItens.map( item => ( <Itens key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}
