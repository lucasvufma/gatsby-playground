import React from 'react';
import blogStyles from './post.module.scss'
import { Link } from 'gatsby'

const Post = (props) => {
    return (
        <Link className={blogStyles.link} to={props.link}>
            <div className={blogStyles.card}>
                <div className={blogStyles.cardItem}>
                    <span>
                        <small>{props.date}</small>
                        <small>{props.time}</small>
                    </span>
                    <h2>{props.title}</h2>
                    <div className={blogStyles.tagContainer}>
                        {props.tags.map(e => {
                            return (
                                <span className={blogStyles.tag}>{e}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Post;