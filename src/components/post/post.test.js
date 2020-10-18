import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Post from './Post';
import Comment from '../comment';

configure({ adapter: new Adapter() });

describe('<Post />', () => {
  let post;
  let onBookmarkSpy;
  let onReportSpy;
  let onCommentSpy;

  beforeEach(() => {
    onBookmarkSpy = sinon.spy();
    onReportSpy = sinon.spy();
    onCommentSpy = sinon.spy();

    post = mount(
      <Post
        title="Getting Started With React Functional Components"
        avatar="bob.png"
        author="Bob Smith"
        authorLink="/profile/Bob-Smith"
        metadata="Tuesday, March 10, 2020 3:36 PM"
        facebookLink="facebook/link"
        linkedInLink="linkedin/link"
        twitterLink="/twitter/link"
        onBookmark={onBookmarkSpy}
        onReport={onReportSpy}
        onComment={onCommentSpy}
        comments={[
          <Comment
            key="comment-1"
            avatar="mary.png"
            author="Mary"
            authorLink="/profile/mary"
            metadata="Today at 11:17 AM"
            onReply={() => {}}
          >
            Awesome post. This article is right on point!
          </Comment>,
        ]}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          lacus nec felis ultricies porttitor vitae ut risus. Nulla pellentesque
          ligula orci, vitae sodales augue ornare sagittis. Aliquam sit amet
          laoreet felis. Nunc porta consequat velit vitae molestie. Suspendisse
          suscipit metus risus, vitae viverra mi suscipit vitae. Phasellus ut
          hendrerit dolor, non varius dolor. Morbi pretium sed dolor at dapibus.
          Vestibulum lorem sem, semper lobortis mi et, consectetur tincidunt
          lacus. Phasellus vestibulum iaculis malesuada. Donec vitae tincidunt
          est, eu aliquet nisl. Etiam elementum felis purus, sed hendrerit nulla
          cursus vitae.
        </p>
      </Post>,
    );
  });

  it('Should render comments', () => {
    expect(post.find('.atomikui-post__comments').find('Comment').length).toBe(
      1,
    );
  });

  it('Should render text if there are no comments', () => {
    post.setProps({ comments: [] });
    expect(post.find('.atomikui-post__comments').text()).toBe(
      'No comments to show',
    );
  });

  it('Should trigger onBookmark callback', () => {
    post.find('button#bookmark').simulate('click');
    expect(onBookmarkSpy.withArgs(true).called).toBe(true);
  });

  it('Should trigger onReport callback', () => {
    post.find('button#report-btn').simulate('click');
    expect(onReportSpy.called).toBe(true);
  });

  it('Should trigger onComment callback', () => {
    post.find('button#comment-btn').simulate('click');
    expect(onCommentSpy.called).toBe(true);
  });
});
