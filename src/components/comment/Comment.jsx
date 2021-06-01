import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';
import Avatar from '../avatar';
import Button from '../button';

const Comment = ({
  author,
  authorLink,
  avatar,
  children,
  className,
  metadata,
  replies,
  onReply,
  ...others
}) => (
  <div className={classnames('atomikui-comment', className)} {...others}>
    <div className="atomikui-comment__avatar">
      <Avatar src={avatar} alt={author} shape="bevel" />
    </div>
    <div className="atomikui-comment__content">
      <div className="atomikui-comment__title">
        {authorLink ? (
          <Link data-test-id="comment-author-link" href={authorLink}>
            {author}
          </Link>
        ) : (
          author
        )}
      </div>
      <div className="atomikui-comment__metadata">{metadata}</div>
      <div className="atomikui-comment__text">{children}</div>
      <Button
        data-test-id="comment-reply-btn"
        className="atomikui-comment__reply-btn"
        theme="link"
        onClick={onReply}
      >
        Reply
      </Button>
      {!!replies.length && (
        <div
          className="atomikui-comment__replies"
          data-test-id="comment-replies"
        >
          {replies}
        </div>
      )}
    </div>
  </div>
);

Comment.propTypes = {
  /** Comment Author */
  author: PropTypes.string,
  /** URL of author */
  authorLink: PropTypes.string,
  /** Comment avatar */
  avatar: PropTypes.string,
  /** Comment text */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Comment information. E.g. date or time of comment */
  metadata: PropTypes.string,
  /** Callback triggered when reply link button is clicked */
  onReply: PropTypes.func,
  /** Replies to a comment */
  replies: PropTypes.arrayOf(PropTypes.object),
};

Comment.defaultProps = {
  author: '',
  authorLink: '',
  avatar: '',
  children: null,
  className: '',
  metadata: '',
  onReply: () => {},
  replies: [],
};

export default Comment;
