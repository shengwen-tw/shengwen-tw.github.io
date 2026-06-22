import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Col, FlexboxGrid,
} from 'rsuite';

import PostCard from '../PostCard';
import ResearchCard from '../ResearchCard';
import Tag from '../Tag';
// import PostTag from '../PostTag';
// import Utils from '../../utils/pageUtils';
// import Statistics from '../../../content/statistics.json';

const POST_LABEL_ORDER = ['events', 'note'];
const POST_LABEL_TITLES = {
  events: 'Events',
  note: 'Notes',
};
const POST_LABEL_ALIASES = {
  conference: 'events',
  event: 'events',
  notes: 'note',
};

const getPostTags = (post) => _.get(post, 'node.fields.slug.tags', []);

const normalizePostLabel = (label) => {
  const normalizedLabel = _.kebabCase(label);
  return POST_LABEL_ALIASES[normalizedLabel] || normalizedLabel;
};

const getPostLabel = (post) => {
  const label = _.get(post, 'node.fields.slug.label');
  if (label) return normalizePostLabel(label);

  const tags = getPostTags(post);
  const normalizedTags = tags.map(normalizePostLabel);
  return (
    normalizedTags.find((tag) => POST_LABEL_ORDER.includes(tag)) ||
    normalizedTags[0] ||
    'other'
  );
};

const getPostLabelTitle = (label) => POST_LABEL_TITLES[label] || _.startCase(label);

const matchesSelectedTags = (post, selectedTags) => {
  const tags = new Set(getPostTags(post));
  return Array.from(selectedTags).every((tag) => tags.has(tag));
};

const Panel = (props) => {
  const { type, data } = props;
  const isResearch = type === 'research';

  // console.log(data.allTag);
  const tags = data.allTag ? data.allTag.edges : [];
  const tagsMap = _.mapValues(_.keyBy(tags, (tag) => tag.node.name), 'node');

  // const tags = Utils.getTags(type);
  const [selectedTags, setSelectedTags] = useState(new Set());

  const handleClick = (tagName) => {
    const nextSelectedTags = _.clone(selectedTags);
    if (nextSelectedTags.has(tagName)) {
      nextSelectedTags.delete(tagName);
    } else {
      nextSelectedTags.add(tagName);
    }
    setSelectedTags(nextSelectedTags);
  };

  const generateTag = (tag) => {
    const isChecked = selectedTags.has(tag.node.name);
    const color = isChecked ? tag.node.color : '';
    const handleTagClick = () => handleClick(tag.node.name);
    return (
      <Col key={tag.node.name}>
        <Tag color={color}>
          <a onClick={handleTagClick} onKeyPress={handleTagClick} role="button" tabIndex={0}>
            {tag.node.name}
          </a>
        </Tag>
      </Col>
    );
  };

  const docs = data.allMdx ? data.allMdx.edges : [];
  const filteredDocs = docs.filter((val) => matchesSelectedTags(val, selectedTags));

  if (isResearch) {
    return (
      <FlexboxGrid className="spacing-grid">
        {
          filteredDocs.map((val, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <FlexboxGrid.Item as={Col} key={key} xs={24} sm={24} md={24} lg={24}>
              <ResearchCard data={val} tagsMap={tagsMap} />
            </FlexboxGrid.Item>
          ))
        }
      </FlexboxGrid>
    );
  }

  const groupedPosts = _.groupBy(filteredDocs, getPostLabel);
  const orderedLabels = _.uniq([
    ...POST_LABEL_ORDER.filter((label) => groupedPosts[label]),
    ...Object.keys(groupedPosts).filter((label) => !POST_LABEL_ORDER.includes(label)),
  ]);

  return (
    <>
      {orderedLabels.map((label, labelIndex) => (
        <section
          key={label}
          style={{ marginTop: labelIndex === 0 ? 0 : '2rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{getPostLabelTitle(label)}</h2>
          <FlexboxGrid className="spacing-grid">
            {
              groupedPosts[label].map((val, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <FlexboxGrid.Item as={Col} key={key} xs={24} sm={24} md={24} lg={8}>
                  <PostCard data={val} tagsMap={tagsMap} />
                </FlexboxGrid.Item>
              ))
            }
          </FlexboxGrid>
        </section>
      ))}
    </>
  );
};

Panel.propTypes = {
  type: PropTypes.oneOf(['posts', 'research']).isRequired,
};

export default Panel;
