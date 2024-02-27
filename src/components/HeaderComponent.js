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
        border: '1px solid #DFE0EB',
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
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
    <div>
        <Row vertical="center">
                    <span className={css(styles.name, styles.cursorPointer)}>Mrinal Suman</span>
                    <img src="https://scontent.fpat1-2.fna.fbcdn.net/v/t39.30808-6/334217607_2279336932272158_108377661778100570_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=BHjsusPiX9QAX-DQBRH&_nc_ht=scontent.fpat1-2.fna&oh=00_AfAEy6R9zSioZzxw6oMA44pyT5Fy1UFwI2ZesWzfF2wVRw&oe=65E2B40A" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
        </Row><br></br><br></br><br></br>
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}>{title}</span>
            <Row vertical="center">
                <div className={css(styles.cursorPointer)}>
                    <IconSearch />
                </div>
                <div style={{ marginLeft: 25 }} className={css(styles.cursorPointer)}>
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