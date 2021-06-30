import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`menu-item ${size}`}
        style={{
            backgroundImage: `url(${imageUrl})`,
        }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="content-wrap">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    </div>
);

export default withRouter(MenuItem);
