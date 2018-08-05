class Home extends React.Component {
    
      
    state = {
    word: ""
    }
    
    clickHandler(){
        console.log( "yay" );
        }
    
    render() {
        return (
            <div className="container">
                <div>
                    <h1>TVMaze React</h1>
                    <input onChange={this.changeHandler} value={this.state.word}/>
                    <button onClick={this.clickHandler}>Search</button>
                </div>
            </div>
        )
    }
}

class Results extends React.Component {
    render() {
        var searchResults = this.props.queryText.map(results, index) => (
            <Result key={index} name={show.show.name} img={show.show.image.medium} />
        )
        }
    }
}



ReactDOM.render(<Home />, document.getElementById('root'));