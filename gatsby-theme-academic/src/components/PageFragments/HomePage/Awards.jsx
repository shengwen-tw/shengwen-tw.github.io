import { Col, Row } from 'rsuite';
import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import { useSiteMetadata } from '../../../utils/hooks';
import Icon from '../../Icon';

import * as styles from './homePage.module.less';

const splitTitleAndCompany = (title = '') => {
  const parts = title.split(' at ');
  if (parts.length < 2) {
    return { role: title, company: '' };
  }

  return {
    role: parts[0],
    company: parts.slice(1).join(' at '),
  };
};

const AwardItem = (data) => {
  const { role, company } = splitTitleAndCompany(data.title);
  const primaryTitle = company || data.description || data.company || data.location;

  return (
    <TimelineEvent
      title={primaryTitle}
      titleStyle={{ fontSize: '11pt', fontWeight: 'bold' }}
      subtitle={role}
      subtitleStyle={{ fontSize: '12pt', fontWeight: '400' }}
      createdAt={<div style={{ color: 'var(--rs-text-secondary)' }}>{data.date}</div>}
      style={{ fontSize: '11pt', fontWeight: '300' }}
      icon={<Icon size={data.iconSize || 'lg'} fixedWidth icon={data.icon || 'briefcase'} />}
      iconStyle={{ cursor: 'default' }}
      iconColor="#44566C"
    />
  );
};

const Awards = () => {
  const siteMetadata = useSiteMetadata();
  if (!siteMetadata.awards || siteMetadata.awards.length === 0 ||
    (siteMetadata.awards[0].date === '' && siteMetadata.awards[0].title === '')) return null;

  const previousTimeLineData = siteMetadata.awards.slice(0, siteMetadata.awards.length - 1);
  const lastTimeLineData = siteMetadata.awards.slice(siteMetadata.awards.length - 1);

  return (
    <div className={styles.homepageSection}>
      <Row type="flex">
        <Col xs={24} sm={24} md={12} lg={15} style={{ marginBottom: '-0.5rem' }}>
          <h2 style={{ marginBottom: '0rem' }}>Work Experience</h2>
          {siteMetadata.awards.length > 1 ? (
            <Timeline lineStyle={{ top: '20px' }} lineColor="#44566C" style={{ width: '100%' }}>
              {previousTimeLineData.map(AwardItem)}
            </Timeline>
          ) : null}
          {siteMetadata.awards.length > 0 ? (
            <Timeline
              lineStyle={{ display: 'none' }}
              style={{
                top: '-30px',
                width: '100%',
              }}
            >
              {lastTimeLineData.map(AwardItem)}
            </Timeline>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default Awards;
