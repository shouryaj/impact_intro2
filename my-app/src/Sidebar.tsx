import * as React from 'react';
import clubLogo from './clublogo.jpg';


class Sidebar extends React.Component {

    public render() {
        return (
          <div className="sidebar">
              <img src={clubLogo} ></img>
              {/* Here I think we should have a component which would allow
                  us to easily change up who's shown on the sidebar. For example,
                  the homepage could show all the team leaders, and clicking on
                  them would take you to the "team page" which is just the same
                  page with different people loaded into the sidebar. */}
                  <h1>Small Basic Team Members</h1>
                    {/* Ideally, people would be components so it would be easy to
                        introduce/exchange them and display them. */}
                  <p>Shourya Jain</p>
                  <p>Andrew S.</p>
                  <p>Mitchell Estberg</p>
                  <p>Pieter Benjamin</p>
                  <p>Lea</p>
                  <p>Lucy Jiang</p>
                  <p>Joey Schafer</p>
          </div>
        );
    }
}

export default Sidebar;