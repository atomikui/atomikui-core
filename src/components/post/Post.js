import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { List, ListItem } from '../list';
import Link from '../link';
import Avatar from '../avatar';
import Button from '../button';

const Post = ({
  author,
  authorLink,
  avatar,
  children,
  className,
  comments,
  facebookLink,
  isBookmarked,
  linkedInLink,
  onBookmark,
  metadata,
  title,
  twitterLink,
  ...others
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  useEffect(() => {
    onBookmark(bookmarked);
  }, [bookmarked]);

  return (
    <div className={classnames('atomikui-post', className)} {...others}>
      <div className="atomikui-post__hd">
        <h1 className="atomikui-post__title">{title}</h1>
        <div className="atomikui-post__metadata">
          <div className="atomikui-post__post-info">
            <Avatar src={avatar} alt={author} />
            <div className="atomikui-post__author-info">
              <Link href={authorLink}>{author}</Link>
              <div className="atomikui-post__post-metadata">{metadata}</div>
            </div>
          </div>
          <List type="horizontal" className="atomikui-post__actions">
            {facebookLink && (
              <ListItem>
                <Link id="facebook" href={facebookLink} title="Facebook">
                  <svg viewBox="0 0 128 128" width="24" height="24">
                    <path d="M116.42,5.07H11.58a6.5,6.5,0,0,0-6.5,6.5V116.42a6.5,6.5,0,0,0,6.5,6.5H68V77.29H52.66V59.5H68V46.38c0-15.22,9.3-23.51,22.88-23.51a126,126,0,0,1,13.72.7V39.48H95.21c-7.39,0-8.82,3.51-8.82,8.66V59.5H104l-2.29,17.79H86.39v45.64h30a6.51,6.51,0,0,0,6.5-6.5V11.58A6.5,6.5,0,0,0,116.42,5.07Z"></path>
                  </svg>
                </Link>
              </ListItem>
            )}
            {twitterLink && (
              <ListItem>
                <Link id="twitter" href={twitterLink} title="Twitter">
                  <svg viewBox="0 0 128 110" width="24" height="24">
                    <path
                      d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63"
                      transform="translate(-0.88 -12.7)"
                    ></path>
                  </svg>
                </Link>
              </ListItem>
            )}
            {linkedInLink && (
              <ListItem>
                <Link id="linkedin" href={linkedInLink} title="LinkedIn">
                  <svg viewBox="0 0 430.117 430.118" width="24" height="24">
                    <path
                      id="original"
                      d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471 c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563 c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621 c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531 c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99 c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"
                      transform="translate(-0.88 -12.7)"
                    ></path>
                  </svg>
                </Link>
              </ListItem>
            )}
            <ListItem>
              <Button
                id="bookmark"
                theme="link"
                title={bookmarked ? 'Unsave Story' : 'Save Story'}
                onClick={() => {
                  setBookmarked(!bookmarked);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  {bookmarked ? (
                    <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z" />
                  ) : (
                    <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z" />
                  )}
                </svg>
              </Button>
            </ListItem>
          </List>
        </div>
      </div>
      <div className="atomikui-post__bd">{children}</div>
      <div className="atomikui-post__ft">
        <Button size="md">Leave a Comment</Button>
        {!!comments.length && (
          <>
            <h3 className="margin-top-36 margin-bottom-24">Comments</h3>
            <div>{comments}</div>
          </>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  /** Comment Author */
  author: PropTypes.string,
  /** URL of author */
  authorLink: PropTypes.string,
  /** Comment avatar */
  avatar: PropTypes.string,
  /** Post content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Comments related to post */
  comments: PropTypes.array,
  /** Facebook link */
  facebookLink: PropTypes.string,
  /** Post is bookmarked */
  isBookmarked: PropTypes.bool,
  /** Linkedin link */
  linkedInLink: PropTypes.string,
  /** Callback on bookmark click */
  onBookmark: PropTypes.func,
  /** Comment information. E.g. date or time of comment */
  metadata: PropTypes.string,
  /** Post title */
  title: PropTypes.string,
  /** Twitter link */
  twitterLink: PropTypes.string,
};

Post.defaultProps = {
  author: '',
  authorLink: '',
  avatar: '',
  children: <></>,
  className: '',
  comments: [],
  facebookLink: '',
  isBookmarked: false,
  linkedInLink: '',
  onBookmark() {},
  metadata: '',
  title: '',
  twitterLink: '',
};

export default Post;
