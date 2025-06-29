import { Col, Row, FlexboxGrid } from 'rsuite';
import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import { useSiteMetadata } from '../../../utils/hooks';
import Icon from '../../Icon';

import * as styles from './homePage.module.less';

const AwardItem = (data) => {
  const title = (
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item as={Col} md={12} lg={15}>
        <h6>{data.title}</h6>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} md={12} lg={9} style={{ fontSize: '12pt' }}>
        {data.date}
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
  return (
    <TimelineEvent
      title={title}
      style={{
        paddingBottom: '0.8rem',
        paddingTop: '0.3rem',
      }}
      icon={<Icon size={data.iconSize || 'lg'} fixedWidth icon={data.icon || 'briefcase'} />}
      iconStyle={{ cursor: 'default' }}
      iconColor="#44566C"
      // bubbleStyle={{ background: 'none', border: '0' }}
    />
  );
};

const Awards = () => {
  const siteMetadata = useSiteMetadata();
  console.log(siteMetadata.awards);
  if (!siteMetadata.awards || siteMetadata.awards.length === 0 ||
    (siteMetadata.awards[0].date === '' && siteMetadata.awards[0].title === '')) return null;
  return (
    <div className={styles.homepageSection}>
      <h2 style={{ marginBottom: '0rem' }}>Work Experience</h2>
      <Row>
        <Col xs={24} style={{ marginBottom: '-0.5rem' }}>
          <Timeline lineStyle={{ display: 'none' }} style={{ width: '100%' }}>
            {siteMetadata.awards.map(AwardItem)}
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};

export default Awards;
