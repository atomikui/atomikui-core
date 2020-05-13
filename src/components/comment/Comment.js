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
  replyAction,
  ...others
}) => {
  return (
    <div className={classnames('atomikui-comment', className)} {...others}>
      <Avatar src={avatar} alt={author} />
      <div className="atomikui-comment__content">
        <Link className="atomikui-comment__title" href={authorLink}>
          {author}
        </Link>
        <div className="atomikui-comment__metadata">{metadata}</div>
        <div className="atomikui-comment__text">{children}</div>
        {replies.length > 0 && (
          <div className="atomikui-comment__replies"></div>
        )}
        <Button theme="link" onClick={replyAction}>
          Reply
        </Button>
      </div>
    </div>
  );
};

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
  /** Replies to a comment */
  replies: PropTypes.arrayOf(PropTypes.object),
  /** Callback triggered when reply link button is clicked */
  replyAction: PropTypes.func,
};

Comment.defaultProps = {
  author: '',
  authorLink: '',
  avatar: '',
  children: <></>,
  className: '',
  metadata: '',
  replies: [],
  replyAction() {},
};

export default Comment;
