import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';

export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Landing extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type')));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
        );
    }
}
