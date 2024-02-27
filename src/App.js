import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './components/content/ContentComponent';
import './App.css';

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        flexDirection: 'row-reverse'

    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = { selectedItem: 'Tickets' };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                    <ContentComponent />
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;
