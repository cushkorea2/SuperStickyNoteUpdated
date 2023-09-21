import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [],
    searchText: ""
  };

  componentDidMount() {
    const savedNotes = localStorage.getItem("savedNotes");
    if (savedNotes) {
      this.setState({
        notes: JSON.parse(savedNotes)
      });
    }
  }

  componentDidUpdate() {
    const { notes } = this.state;
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }

  render() {
    return (
      <div className="app">
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
        />
        <NotesList
          onType={this.onType}
          onDelete={this.removeNote}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
