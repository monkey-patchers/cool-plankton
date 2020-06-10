import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getData} from '../utils';

export default class BlogPostFooter extends React.Component {
    render() {
        let post = _.get(this.props, 'page');
        let date_type = _.get(this.props, 'date_type');
        return (
            <footer className="post-meta">
                <time className="published" dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>
                {(date_type === 'short') ? (
                    moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')
                ) : 
                    moment(_.get(post, 'frontmatter.date')).strftime('%A, %B %e, %Y')
                }
                </time>
                {_.get(post, 'frontmatter.author') && ((() => {
                    let author = getData(this.props.pageContext.site.data, _.get(post, 'frontmatter.author'));
                    return (', By ' + author.first_name  + author.last_name);
                })())}
            </footer>
        );
    }
}
