import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../../apis/youtubeApi';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

// const home = () => {
//     return (
//       <div>
//         <p>home</p>
//       </div>
//     )
//   }
class home extends Component {
  state = { videos: [], selectedVideo: null };
    componentDidMount() {
        this.onQuerySubmit('buildings')
    }
    // Search for query
    onQuerySubmit = async (query)=> {
        const response = await youtube.get('/search', {
            params: {
                q: query
            }
        });
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };
  render() { 
    return (
      <div className="container youtube-layout">
          <SearchBar onFormSubmit= {this.onQuerySubmit}/>
          <VideoDetails video={this.state.selectedVideo}/>
          <VideoList 
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
          />
      </div>
  )
  }
}
 
export default home;