import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import IconSearch from '../assets/icon-search';
import IconBellNew from '../assets/icon-bell-new'

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid red',
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        color: 'white',
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    },
    searchContainer: {
        position: 'relative'
    },
    searchInput: {
        width: 200,
        padding: '8px 30px 8px 10px',
        borderRadius: 20,
        border: '1px solid #ccc',
        ':focus': {
            outline: 'none',
            borderColor: '#007bff'
        }
    },
    searchIcon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: 20,
        cursor: 'pointer',
        color: '#777'
    },
    backgroundImage: {
        backgroundImage: 'url(\'https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <div className={css(styles.backgroundImage)}>
            <Row vertical="center">
                    <span className={css(styles.name, styles.cursorPointer)}>Mrinal Suman</span>
                    <img src="https://th.bing.com/th/id/OIP.HZ9w8YiyROitCGC910VXAQAAAA?rs=1&pid=ImgDetMain" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
            </Row> <br></br><br></br><br></br>
            <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
                <span className={css(styles.title)}>{title}</span>
                <Row vertical="center" className={css(styles.searchContainer)}>
                    <input type="text" placeholder="Search..." className={css(styles.searchInput)} />
                    <div className={css(styles.searchIcon)}>
                        <IconSearch />
                    </div>
                </Row>
                <Row vertical="center">
                    <div className={css(styles.iconStyles)}>
                        <IconBellNew />
                    </div>
                </Row>
            </Row>
        </div>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;