import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
       
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
        submenu: [
            {
                id: 31,
                title: 'About Us',
                link: '/about'
            },
            {
                id: 3222,
                title: 'Customer Stories',
                link: '/customer-stories'
            },
            {
                id: 322,
                title: 'Awards & Achievements',
                link: '/awards'
            },
            {
                id: 345,
                title: 'Career & Job',
                link: '/career'
            }
        ]
    },
    {
        id: 3,
        title: 'Products',
        link: '/products',
        // submenu: [
        //     {
        //         id: 51,
        //         title: 'Services',
        //         link: '/service'
        //     },
        //     {
        //         id: 52,
        //         title: 'Service Details',
        //         link: '/service-single/Niche-research'
        //     },
        // ]
    },
    {
        id: 4,
        title: 'Resources',
        link: '/Soft Trade Training',
        submenu: [
            {
                id: 71,
                title: 'Soft Trade Training ',
                link: '/Soft Trade Training '
            },
            {
                id: 72,
                title: 'Soft Trade BETA Program',
                link: '/'
            },
              {
                id: 73,
                title: 'Blog',
                link: '/blog'
            }
        ]
    },
    {
        id: 5,
        title: 'Partners',
        link: '/',
        submenu: [
            {
                id: 61,
                title: 'Partner Overview',
                link: '/'
            },
            {
                id: 62,
                title: 'Partner Login',
                link: '/'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="xb-menu-primary clearfix">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="menu-item menu-item-has-children active">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                to={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;