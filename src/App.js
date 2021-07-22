import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import ListFoods from './components/ListFoods';
import Form from './components/Form';

const client = new ApolloClient({
  cache : new InMemoryCache(),
  uri : "http://localhost:8080/query"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Form></Form>
      <ListFoods></ListFoods>
      
    </ApolloProvider>
  );
}

export default App;
