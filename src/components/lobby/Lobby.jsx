/* eslint-disable */

import React from 'react';
import { useHistory } from 'react-router';

const Lobby = () => {

    const history = useHistory();
    return (
        <div>Lobby
            <button onClick={() => history.push("settings")}>btn</button>
        </div>

    )

}

export default Lobby;