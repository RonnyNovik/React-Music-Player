import React, { Component } from 'react';
import styles from './Layout.module.css';
import Player from '../Player/Player';
class Layout extends Component {

    render() {
        return (
            <div className={styles.LayoutBlock}>
                <Player />
            </div>
        );
    }
}

export default Layout;