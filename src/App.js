import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'enter youtube api key here';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Luxury Cars');
    }

    videoSearch(term) {

        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

        });
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="page-header">
                        <h2>YouTube Clone</h2>
                    </div>
                    <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                    <VideoDetail video={ this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos}
                               onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
                </div>
            </section>
        )
    }
}

export default App;
