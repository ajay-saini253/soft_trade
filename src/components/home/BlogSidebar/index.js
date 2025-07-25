import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../../api/blogs'
import Services from '../../../api/service';
import icon from '../../../images/icon/search-icon.svg';
import icon1 from '../../../images/icon/profile-circle.svg'

const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="col-lg-4 mt-30">
            <div className="sidebar">
                <div className="sidebar_widget">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <form className="form-group" onSubmit={SubmitHandler}>
                        <input className="form-control" type="search" name="search" placeholder="" />
                        <button type="submit" className="search_icon">
                            <img src={icon} alt="Icon Search" />
                        </button>
                    </form>
                </div>
                <div className="sidebar_widget">
                    <h3 className="sidebar_widget_title">related posts</h3>
                    <ul className="recent_post_block list-unstyled">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <li className="recent_post_item" key={Bitem}>
                                <h3 className="post-title border-effect-2"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                <span><img src={icon1} alt="" />{blog.author}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widget">
                    <h3 className="sidebar_widget_title">Categories</h3>
                    <ul className="category_list_block list-unstyled">
                        {Services.slice(0, 6).map((service, srv) => (
                            <li key={srv}>
                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                    <span><i className="far fa-arrow-right"></i>{service.title}</span>
                                    <span>(0{service.Id})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
             <div className="sidebar_widget">
    <h3 className="sidebar_widget_title">Tags</h3>
    <ul className="tags_block list-unstyled">
        <li><Link onClick={ClickHandler} to="/blog">ERP</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Cloud ERP</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Mobile ERP</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Web ERP</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Desktop ERP</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Business Automation</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Inventory Management</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Billing Solutions</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">CRM</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">HR Management</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Accounts</Link></li>
        <li><Link onClick={ClickHandler} to="/blog">Data Insights</Link></li>
    </ul>
</div>

            </div>
        </div>
    )

}

export default BlogSidebar;
